// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;
pragma abicoder v2;

import {ERC20} from "@solmate/tokens/ERC20.sol";
import {Owned} from "@solmate/auth/Owned.sol";
import {ECDSA} from "@oz/utils/cryptography/ECDSA.sol";
import {Address} from "@oz/utils/Address.sol";

import {Liquidity} from "@src/Liquidity.sol";
import {Operation, Token, TokenPermit} from "@src/Types.sol";
import {Utils} from "@src/Utils.sol";

// import {console} from "@std/Console.sol";

/**
 * @title Vault
 * @author @byeongsu-hong<hong@byeongsu.dev>
 * @notice This is the main endpoint of the protocol. Validators will listen to events emitted by this contract.
 */
contract Vault is Owned {
    using Address for address;

    Liquidity public lmgr;

    /**
     * @param to destination address of this operation
     * @param token original token address
     * @param amount amount of token
     * @param opId operation id
     * @param opArgs operation arguments
     * @dev for opId, opArgs, you must register them to Mitosis through the governance
     */
    event InitOperation(
        address indexed to, address indexed token, uint256 indexed opId, uint256 amount, bytes[] opArgs
    );

    /**
     * @param _lmgr address of liquidity manager
     */
    constructor(Liquidity _lmgr) Owned(msg.sender) {
        lmgr = _lmgr;
    }

    /**
     * @notice execute operation to dest chain with pre-approved ERC20 token
     * @param _to destination address of this operation
     * @param _op operation data
     * @param _token token address and token amount
     */
    function send(address _to, Operation memory _op, Token memory _token) public {
        send(msg.sender, _to, _op, _token);
    }

    /**
     * @notice execute operation to dest chain with pre-approved ERC20 token
     * @param _from source address of this operation
     * @param _to destination address of this operation
     * @param _op operation data
     * @param _token token address and token amount
     */
    function send(address _from, address _to, Operation memory _op, Token memory _token) public {
        require(_token.amount > 0, "amount must be greater than 0");

        ERC20 token = ERC20(_token.addr);

        uint256 allowance = token.allowance(_from, address(this));
        require(allowance >= _token.amount, "insufficient allowance");

        // approve & accept
        token.transferFrom(_from, address(this), _token.amount);

        // approve & deposit
        token.approve(address(lmgr), _token.amount);
        lmgr.deposit(_from, _token.amount);

        emit InitOperation(_to, _token.addr, _op.id, _token.amount, _op.args);
    }

    /**
     * @notice execute operation to dest chain with permitted ERC20 token
     * @param _to destination address of this operation
     * @param _op operation data
     * @param _token token address and token amount and also permit signature
     */
    function send(address _to, Operation memory _op, TokenPermit memory _token) public {
        send(msg.sender, _to, _op, _token);
    }

    /**
     * @notice execute operation to dest chain with permitted ERC20 token
     * @param _from source address of this operation
     * @param _to destination address of this operation
     * @param _op operation data
     * @param _token token address and token amount and also permit signature
     */
    function send(address _from, address _to, Operation memory _op, TokenPermit memory _token) public {
        require(_token.amount > 0, "amount must be greater than 0");
        require(_token.signature.length == 65, "invalid signature length");

        ERC20 token = ERC20(_token.addr);

        (uint8 v, bytes32 r, bytes32 s) = Utils.unwrapSig(_token.signature);

        // approve & accept
        token.permit(_from, address(this), _token.amount, _token.deadline, v, r, s);
        token.transferFrom(_from, address(this), _token.amount);

        // approve & deposit
        token.approve(address(lmgr), _token.amount);
        lmgr.deposit(_from, _token.amount);

        emit InitOperation(_to, _token.addr, _op.id, _token.amount, _op.args);
    }

    struct ExecuteFund {
        address token;
        uint256 value;
    }

    struct ExecuteCalldata {
        address to; // EOA / CA
        uint256 value;
        bytes data; // calldata
    }

    struct ExecutePayload {
        ExecuteFund[] funds;
        ExecuteCalldata[] inner;
    }

    struct ExecuteResult {
        bool success;
        bytes returndata;
    }

    event ExecuteOperation(address indexed owner, ExecuteResult[] results);

    function execute(ExecutePayload memory _payload, bytes memory _signature) public {
        (uint8 v, bytes32 r, bytes32 s) = Utils.unwrapSig(_signature);

        address recovered = ecrecover(keccak256(abi.encode(_payload)), v, r, s);
        require(recovered == owner, "invalid signature");

        for (uint256 i = 0; i < _payload.funds.length; i++) {
            ExecuteFund memory fund = _payload.funds[i];

            lmgr.approve(address(lmgr), fund.value);
            lmgr.withdraw(address(this), fund.value);
        }
        // TODO: seal liquidity manager to prevent over-paying

        ExecuteResult[] memory results = new ExecuteResult[](_payload.inner.length);
        for (uint256 i = 0; i < _payload.inner.length; i++) {
            ExecuteCalldata memory inner = _payload.inner[i];

            (bool success, bytes memory returndata) = inner.to.call{value: inner.value}(inner.data);
            results[i] = ExecuteResult(success, returndata);
        }

        // claim back remainings
        for (uint256 i = 0; i < _payload.funds.length; i++) {
            ExecuteFund memory fund = _payload.funds[i];

            uint256 balance = ERC20(fund.token).balanceOf(address(this));
            if (balance > 0) {
                ERC20(fund.token).approve(address(lmgr), balance);
                lmgr.deposit(address(this), balance);
            }
        }

        emit ExecuteOperation(owner, results);
    }
}
