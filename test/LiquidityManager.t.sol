// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";
import {WETH} from "@solmate/tokens/WETH.sol";

import {LiquidityManager} from "../src/LiquidityManager.sol";
import {Token, TokenPermit} from "../src/Types.sol";

contract LiquidityManagerTest is Test {
    LiquidityManager internal lmgr;
    WETH internal weth;

    address internal depositor;

    function setUp() public {
        lmgr = new LiquidityManager();
        weth = new WETH();

        depositor = address(0x0);
    }

    function test_deposit() public {
        vm.prank(depositor);
        vm.deal(depositor, 1 ether);
        lmgr.deposit{value: 1 ether}(depositor);

        assertEq(lmgr.balances(depositor, address(0x1)), 1 ether);
        assertEq(depositor.balance, 0);
        assertEq(address(lmgr).balance, 1 ether);
    }

    function test_deposit_erc20() public {}

    function test_deposit_erc2612() public {}

    function test_withdraw() public {}
}
