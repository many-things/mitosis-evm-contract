// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

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
