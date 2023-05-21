// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8;

import "@std/Test.sol";

import {Bond, BondQuerier, Unbonding} from "@src/Bond.sol";
import {WETH} from "@solmate/tokens/WETH.sol";

import {ERC2612} from "@test/ERC2612.t.sol";
import {Account, AccountLib} from "@test/Test.t.sol";

contract BondTest is Test {
    Bond internal bond;
    BondQuerier internal bondQuerier;

    WETH internal weth;

    Account internal user;
    Account internal abuser;

    function setUp() public {
        weth = new WETH();
        bond = new Bond(address(weth), 5 minutes);
        bondQuerier = new BondQuerier(bond);

        user = AccountLib.create(vm, 0x1);
        abuser = AccountLib.create(vm, 0x2);
    }

    function test_bond() public {
        vm.startPrank(user.addr);

        vm.deal(user.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        weth.approve(address(bond), 1 ether);
        bond.bond(1 ether);

        vm.stopPrank();

        assertEq(bond.balances(user.addr), 1 ether);
    }

    function test_unbond() public {
        vm.startPrank(user.addr);

        vm.deal(user.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        weth.approve(address(bond), 1 ether);
        bond.bond(1 ether);
        bond.unbond(1 ether);
        bond.claim();

        vm.stopPrank();

        assertEq(bond.balances(user.addr), 0);
    }

    function test_querier() public {
        vm.startPrank(user.addr);

        vm.deal(user.addr, 10 ether);
        weth.deposit{value: 10 ether}();
        weth.approve(address(bond), 10 ether);

        bond.bond(10 ether);

        uint256 startTime = block.timestamp;
        for (uint256 i = 0; i < 10; i++) {
            vm.warp(startTime);
            bond.unbond(1 ether);
            startTime += 1 minutes;
        }

        Unbonding[] memory unbondings = bondQuerier.getUnbondings(user.addr, 2, 10);

        for (uint256 i = 0; i < unbondings.length; i++) {
            Unbonding memory unbonding = unbondings[i];
            console.log(unbonding.amount, unbonding.createdAt, unbonding.claimableAt);
        }

        vm.stopPrank();
    }
}
