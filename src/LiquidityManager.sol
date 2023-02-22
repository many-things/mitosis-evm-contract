// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import {ERC20} from "@solmate/tokens/ERC20.sol";

import {Token, TokenPermit} from "./Types.sol";
import {Utils} from "./Utils.sol";

contract LiquidityManager {
    mapping(address => mapping(address => uint256)) public balances;

    function deposit(address _depositor) public payable {
        balances[_depositor][address(0x1)] += msg.value;
    }

    // approved deposit
    function deposit(Token memory _token) public {
        deposit(msg.sender, _token);
    }

    function deposit(address _depositor, Token memory _token) public {
        ERC20 token = ERC20(_token.addr);

        token.transferFrom(msg.sender, address(this), _token.amount);

        balances[_depositor][_token.addr] += _token.amount;
    }

    // permitted deposit
    function deposit(TokenPermit memory _token) public {
        deposit(msg.sender, _token);
    }

    function deposit(address _depositor, TokenPermit memory _token) public {
        (uint8 v, bytes32 r, bytes32 s) = Utils.unwrapSig(_token.signature);

        ERC20 token = ERC20(_token.addr);

        token.permit(msg.sender, address(this), _token.amount, _token.deadline, v, r, s);

        token.transferFrom(msg.sender, address(this), _token.amount);

        balances[_depositor][_token.addr] += _token.amount;
    }

    function withdraw(Token memory _token) public {
        withdraw(msg.sender, _token);
    }

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
