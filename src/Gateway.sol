// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import {ERC20} from "@solmate/tokens/ERC20.sol";
import {ECDSA} from "@oz/utils/cryptography/ECDSA.sol";

import {DenomManager} from "@src/DenomManager.sol";
import {LiquidityManager} from "@src/LiquidityManager.sol";
import {Operation, Token, TokenPermit} from "@src/Types.sol";
import {Utils} from "@src/Utils.sol";

/**
 * @title Gateway
 * @author @byeongsu-hong<hong@byeongsu.dev>
 * @notice This is the main endpoint of the protocol. Validators will listen to events emitted by this contract.
 */
contract Gateway {
    LiquidityManager public lmgr;
    DenomManager public dmgr;

    /**
     * @param to destination address of this operation
     * @param denom converted token denomination that Mitosis can recognize
     * @param opId operation id
     * @param token original token address
     * @param amount amount of token
     * @param opArgs operation arguments
     * @dev for opId, opArgs, you must register them to Mitosis through the governance
     */
    event InitOperation(
        address indexed to, address indexed denom, uint256 indexed opId, address token, uint256 amount, bytes opArgs
    );

    /**
     * @param _lmgr address of liquidity manager
     * @param _dmgr address of denom manager
     */
    constructor(LiquidityManager _lmgr, DenomManager _dmgr) {
        lmgr = _lmgr;
        dmgr = _dmgr;
    }

    /**
     * @notice execute operation to dest chain. This can be executed with msg.value or not.
     * @param _to destination address of this operation
     * @param _op operation data
     */
    function send(address _to, Operation memory _op) public payable {
        if (msg.value > 0) {
            address token = dmgr.ETH();
            address denom = dmgr.convert(token);

            // deposit ETH
            lmgr.deposit{value: msg.value}(_to);

            emit InitOperation(_to, denom, _op.id, token, msg.value, _op.args);
        } else {
            address token = dmgr.NONE();
            address denom = dmgr.convert(token);

            emit InitOperation(_to, denom, _op.id, token, msg.value, _op.args);
        }
    }

    /**
     * @notice execute operation to dest chain with pre-approved ERC20 token
     * @param _to destination address of this operation
     * @param _op operation data
     * @param _token token address and token amount
     */
    function send(address _to, Operation memory _op, Token memory _token) public {
        require(_token.amount > 0, "amount must be greater than 0");

        ERC20 token = ERC20(_token.addr);

        uint256 allowance = token.allowance(msg.sender, address(this));
        require(allowance >= _token.amount, "insufficient allowance");

        // approve & accept
        token.transferFrom(msg.sender, address(this), _token.amount);

        // approve & deposit
        token.approve(address(lmgr), _token.amount);
        lmgr.deposit(msg.sender, _token);

        address denom = dmgr.convert(_token.addr);

        emit InitOperation(_to, denom, _op.id, _token.addr, _token.amount, _op.args);
    }

    /**
     * @notice execute operation to dest chain with permitted ERC20 token
     * @param _to destination address of this operation
     * @param _op operation data
     * @param _token token address and token amount and also permit signature
     */
    function send(address _to, Operation memory _op, TokenPermit memory _token) public {
        require(_token.amount > 0, "amount must be greater than 0");
        require(_token.signature.length == 65, "invalid signature length");

        ERC20 token = ERC20(_token.addr);

        (uint8 v, bytes32 r, bytes32 s) = Utils.unwrapSig(_token.signature);

        // approve & accept
        token.permit(msg.sender, address(this), _token.amount, _token.deadline, v, r, s);
        token.transferFrom(msg.sender, address(this), _token.amount);

        // approve & deposit
        token.approve(address(lmgr), _token.amount);
        lmgr.deposit(msg.sender, Token(_token.addr, _token.amount));

        address denom = dmgr.convert(_token.addr);

        emit InitOperation(_to, denom, _op.id, _token.addr, _token.amount, _op.args);
    }
}
