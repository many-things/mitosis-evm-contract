// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";

import {DenomManager} from "../src/DenomManager.sol";

contract DenomManagerTest is Test {
    DenomManager internal dmgr;

    function setUp() public {
        dmgr = new DenomManager();
    }

    function test_init() public {
        assertEq(dmgr.convert(address(0x0)), dmgr.NONE());
        assertEq(dmgr.convert(address(0x1)), dmgr.ETH());
    }

    function test_add_alias() public {
        address token = address(0x2);

        dmgr.addAlias(token, address(0x2));

        assertEq(dmgr.convert(token), address(0x2));
    }
}
