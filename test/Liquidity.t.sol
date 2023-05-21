// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8;

import "@std/Test.sol";
import {ERC20, WETH} from "@solmate/tokens/WETH.sol";
import {Strings} from "@oz/utils/Strings.sol";

import {Liquidity} from "@src/Liquidity.sol";
import {Token, TokenPermit} from "@src/Types.sol";

import {ERC2612} from "@test/ERC2612.t.sol";
import {Account, AccountLib} from "@test/Test.t.sol";

contract LiquidityTest is Test {
    Liquidity internal lmgr;

    WETH internal weth;

    Account internal depositor;
    Account internal abuser;

    function generateAccessControlMessage(address addr, bytes32 role) public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "AccessControl: account ",
                Strings.toHexString(addr),
                " is missing role ",
                Strings.toHexString(uint256(role), 32)
            )
        );
    }

    function setUp() public {
        weth = new WETH();
        lmgr = new Liquidity("TEST", address(weth));

        depositor = AccountLib.create(vm, 0x2);
        abuser = AccountLib.create(vm, 0x3);
    }

    function test_deposit_erc20() public {
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        weth.approve(address(lmgr), 1 ether);
        lmgr.deposit(depositor.addr, 1 ether);

        vm.stopPrank();

        assertEq(lmgr.balanceOf(depositor.addr), 1 ether);
        assertEq(weth.balanceOf(depositor.addr), 0);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
    }

    function test_deposit_erc2612() public {
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        weth.deposit{value: 1 ether}();

        lmgr.deposit(
            depositor.addr,
            1 ether,
            block.timestamp + 1,
            ERC2612.permit(vm, weth, depositor, address(lmgr), 1 ether, block.timestamp + 1)
        );

        vm.stopPrank();

        assertEq(lmgr.balanceOf(depositor.addr), 1 ether);
        assertEq(weth.balanceOf(depositor.addr), 0);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
    }

    function test_withdraw_erc20() public {
        lmgr.grantRole(lmgr.GATEWAY_ROLE(), depositor.addr);
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        lmgr.deposit(
            depositor.addr,
            1 ether,
            block.timestamp + 1,
            ERC2612.permit(vm, weth, depositor, address(lmgr), 1 ether, block.timestamp + 1)
        );

        lmgr.approve(address(lmgr), 1 ether);
        lmgr.withdraw(depositor.addr, 1 ether);

        vm.stopPrank();

        assertEq(weth.balanceOf(address(lmgr)), 0);
        assertEq(weth.balanceOf(depositor.addr), 1 ether);
    }

    function test_withdraw_erc2612() public {
        lmgr.grantRole(lmgr.GATEWAY_ROLE(), depositor.addr);
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        lmgr.deposit(
            depositor.addr,
            1 ether,
            block.timestamp + 1,
            ERC2612.permit(vm, weth, depositor, address(lmgr), 1 ether, block.timestamp + 1)
        );

        lmgr.withdraw(
            depositor.addr,
            1 ether,
            block.timestamp + 1,
            ERC2612.permit(vm, lmgr, depositor, address(lmgr), 1 ether, block.timestamp + 1)
        );

        vm.stopPrank();

        assertEq(weth.balanceOf(address(lmgr)), 0);
        assertEq(weth.balanceOf(depositor.addr), 1 ether);
    }

    function test_withdraw_underflow() public {
        vm.prank(depositor.addr);
        vm.expectRevert();
        lmgr.withdraw(depositor.addr, 1 ether);
    }
}
