// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8;

struct Operation {
    uint256 id;
    bytes[] args;
}

struct Token {
    address addr;
    uint256 amount;
}

struct TokenPermit {
    address addr;
    uint256 amount;
    uint256 deadline;
    bytes signature;
}
