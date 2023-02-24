// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import {Vm} from "@std/Test.sol";
import {ERC20} from "@solmate/tokens/ERC20.sol";

import {Account} from "./Test.sol";

library ERC2612 {
    function permit(Vm vm, ERC20 _token, Account memory _permitter, address _spender, uint256 _value, uint256 _deadline)
        internal
        view
        returns (bytes memory)
    {
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                _token.DOMAIN_SEPARATOR(),
                keccak256(
                    abi.encode(
                        keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"),
                        _permitter.addr,
                        _spender,
                        _value,
                        _token.nonces(_permitter.addr),
                        _deadline
                    )
                )
            )
        );

        (uint8 v, bytes32 r, bytes32 s) = vm.sign(_permitter.key, digest);
        bytes memory signature = abi.encodePacked(r, s, v);

        return signature;
    }
}
