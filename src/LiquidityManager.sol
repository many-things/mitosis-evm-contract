// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import {ERC20} from "@solmate/tokens/ERC20.sol";

import {Token, TokenPermit} from "@src/Types.sol";
import {Utils} from "@src/Utils.sol";

/**
 * @title LiquidityManager
 * @author @byeongsu-hong<hong@byeongsu.dev>
 * @notice This is the liquidity manager of the protocol. Users can deposit and withdraw their tokens.
 * @dev TODO: concern about the liquidity isolation
 */
contract LiquidityManager {
    mapping(address => mapping(address => uint256)) public balances;

    /**
     * @notice receive ETH for any reason
     */
    receive() external payable {
        deposit();
    }

    /**
     * @notice deposit ETH for context
     */
    function deposit() public payable {
        deposit(msg.sender);
    }

    /**
     * @notice deposit ETH for specified address
     * @param _depositor address of depositor
     */
    function deposit(address _depositor) public payable {
        balances[_depositor][address(0x1)] += msg.value;
    }

    /**
     * @notice deposit ERC20 token after pre-approval with any sender changes
     * @param _token token address and token amount
     */
    function deposit(Token memory _token) public {
        deposit(msg.sender, _token);
    }

    /**
     * @notice deposit ERC20 token after pre-approval with specific sender changes
     * @param _depositor address of depositor
     * @param _token token address and token amount
     */
    function deposit(address _depositor, Token memory _token) public {
        ERC20 token = ERC20(_token.addr);

        token.transferFrom(msg.sender, address(this), _token.amount);

        balances[_depositor][_token.addr] += _token.amount;
    }

    /**
     * @notice deposit ERC20 (ERC2612) token with any sender changes
     * @param _token token address and token amount and permit signature
     */
    function deposit(TokenPermit memory _token) public {
        deposit(msg.sender, _token);
    }

    /**
     * @notice deposit ERC20 (ERC2612) token with specific sender changes
     * @param _depositor address of depositor
     * @param _token token address and token amount and permit signature
     */
    function deposit(address _depositor, TokenPermit memory _token) public {
        (uint8 v, bytes32 r, bytes32 s) = Utils.unwrapSig(_token.signature);

        ERC20 token = ERC20(_token.addr);

        token.permit(msg.sender, address(this), _token.amount, _token.deadline, v, r, s);

        token.transferFrom(msg.sender, address(this), _token.amount);

        balances[_depositor][_token.addr] += _token.amount;
    }

    /**
     * @notice withdraw ETH / ERC20 to sender address
     * @dev if you set to _token.addr to zero address, The contract will detect it as ETH
     * @param _token token address and token amount
     */
    function withdraw(Token memory _token) public {
        withdraw(msg.sender, _token);
    }

    /**
     * @notice withdraw ETH / ERC20 to receiver address
     * @dev if you set to _token.addr to zero address, The contract will detect it as ETH
     * @param _receiver address of receiver
     * @param _token token address and token amount
     */
    function withdraw(address _receiver, Token memory _token) public {
        balances[msg.sender][_token.addr] -= _token.amount;

        if (_token.addr == address(0x1)) {
            payable(_receiver).transfer(_token.amount);
        } else {
            ERC20 token = ERC20(_token.addr);

            token.transfer(_receiver, _token.amount);
        }
    }
}
