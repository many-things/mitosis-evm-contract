// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8;

import {Vm} from "@std/Test.sol";

struct Account {
    address addr;
    uint256 key;
}

library AccountLib {
    function create(Vm vm, uint256 key) internal pure returns (Account memory) {
        return Account(vm.addr(key), key);
    }
}
