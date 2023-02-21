// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

contract DenomManager {
    address public constant NONE = address(0x0);
    address public constant ETH = address(0x1);

    mapping(address => address) public denoms;

    constructor() {
        // predefined tokens
        denoms[address(0x0)] = NONE;
        denoms[address(0x1)] = ETH;
    }

    function convert(address _token) public view returns (address) {
        return denoms[_token];
    }

    // TODO: only owner
    function addAlias(address _token, address _alias) public {
        denoms[_token] = _alias;
    }
}
