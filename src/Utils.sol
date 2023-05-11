// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8;

library Utils {
    function unwrapSig(bytes memory _signature) internal pure returns (uint8 v, bytes32 r, bytes32 s) {
        assembly {
            r := mload(add(_signature, 0x20))
            s := mload(add(_signature, 0x40))
            v := byte(0, mload(add(_signature, 0x60)))
        }
    }
}
