// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8;

import {Multicall3} from "@src/deps/Multicall3.sol";

contract Multicall is Multicall3 {
    address private temp_caller = address(0x0);

    modifier with_caller() {
        temp_caller = msg.sender;

        _;

        temp_caller = address(0x0);
    }

    receive() external payable {
        payable(temp_caller).transfer(msg.value);
    }

    function aggregate3(Call3[] calldata calls)
        public
        payable
        override
        with_caller
        returns (Result[] memory returnData)
    {
        return super.aggregate3(calls);
    }

    function aggregate3Value(Call3Value[] calldata calls)
        public
        payable
        override
        with_caller
        returns (Result[] memory returnData)
    {
        return super.aggregate3Value(calls);
    }
}
