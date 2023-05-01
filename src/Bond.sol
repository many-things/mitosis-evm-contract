// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import {ERC20} from "@solmate/tokens/ERC20.sol";
import {AccessControl} from "@oz/access/AccessControl.sol";
import {Math} from "@oz/utils/math/Math.sol";

import {Utils} from "@src/Utils.sol";

struct Unbonding {
    uint256 amount;
    uint256 createdAt;
    uint256 claimableAt;
}

contract Bond is AccessControl {
    address public token;
    uint256 public unbondingPeriod;

    mapping(address => uint256) public balances;
    mapping(address => mapping(uint256 => Unbonding)) public unbondings;
    mapping(address => uint256) public lastClaimedIndex;
    mapping(address => uint256) public lastUnbondingIndex;

    constructor(address _token, uint256 _unbondingPeriod) {
        token = _token;
        unbondingPeriod = _unbondingPeriod;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function bond(uint256 _amount) public {
        ERC20(token).transferFrom(msg.sender, address(this), _amount);

        balances[msg.sender] += _amount;
    }

    function bond(uint256 _amount, uint256 _deadline, bytes memory _signature) public {
        (uint8 v, bytes32 r, bytes32 s) = Utils.unwrapSig(_signature);

        ERC20(token).permit(msg.sender, address(this), _amount, _deadline, v, r, s);

        bond(_amount);
    }

    function unbond(uint256 _amount) public {
        balances[msg.sender] -= _amount;

        uint256 lastIdx = lastUnbondingIndex[msg.sender];
        lastUnbondingIndex[msg.sender]++;

        unbondings[msg.sender][lastIdx] =
            Unbonding({amount: _amount, createdAt: block.timestamp, claimableAt: block.timestamp + unbondingPeriod});
    }

    function claim() public {
        claim(type(uint256).max);
    }

    function claim(uint256 _steps) public {
        uint256 total = 0;
        uint256 lastIdx = lastClaimedIndex[msg.sender];
        uint256 steps = Math.min(_steps, lastUnbondingIndex[msg.sender] - lastIdx);
        uint256 processed = 0;

        for (; processed < steps; processed++) {
            Unbonding memory unbonding = unbondings[msg.sender][lastIdx + processed];
            if (unbonding.claimableAt > block.timestamp) {
                break;
            }
            total += unbonding.amount;
        }

        lastClaimedIndex[msg.sender] += processed;

        ERC20(token).transfer(msg.sender, total);
    }
}
