// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";

import {Bond} from "@src/Bond.sol";
import {WETH} from "@solmate/tokens/WETH.sol";

import {ERC2612} from "@test/ERC2612.t.sol";
import {Account, AccountLib} from "@test/Test.t.sol";

contract BondTest is Test {
    Bond internal bond;

    WETH internal weth;

    Account internal user;
    Account internal abuser;

    function setUp() public {
        weth = new WETH();
        bond = new Bond(address(weth));

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
}
