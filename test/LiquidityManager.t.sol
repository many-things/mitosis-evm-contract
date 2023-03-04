// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";
import {ERC20, WETH} from "@solmate/tokens/WETH.sol";
import {Strings} from "@oz/utils/Strings.sol";

import {LiquidityManager} from "../src/LiquidityManager.sol";
import {Token, TokenPermit} from "../src/Types.sol";

import {ERC2612} from "./ERC2612.sol";
import {Account, AccountLib} from "./Test.sol";

contract LiquidityManagerTest is Test {
    LiquidityManager internal lmgr;

    address internal ETH;
    WETH internal weth;

    Account internal depositor;

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
        lmgr = new LiquidityManager();
        weth = new WETH();

        ETH = address(0x1);
        depositor = AccountLib.create(vm, 0x2);
    }

    function test_deposit_eth() public {
        vm.prank(depositor.addr);
        vm.deal(depositor.addr, 1 ether);
        lmgr.deposit{value: 1 ether}(depositor.addr);

        assertEq(lmgr.balances(depositor.addr, address(0x1)), 1 ether);
        assertEq(depositor.addr.balance, 0);
        assertEq(address(lmgr).balance, 1 ether);
    }

    function test_deposit_erc20() public {
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        weth.approve(address(lmgr), 1 ether);
        lmgr.deposit(Token(address(weth), 0.5 ether));
        lmgr.deposit(depositor.addr, Token(address(weth), 0.5 ether));

        vm.stopPrank();

        assertEq(lmgr.balances(depositor.addr, address(weth)), 1 ether);
        assertEq(weth.balanceOf(depositor.addr), 0);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
    }

    function test_deposit_erc2612() public {
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        weth.deposit{value: 1 ether}();

        lmgr.deposit(
            TokenPermit(
                address(weth),
                0.5 ether,
                block.timestamp + 1,
                ERC2612.permit(vm, weth, depositor, address(lmgr), 0.5 ether, block.timestamp + 1)
            )
        );

        lmgr.deposit(
            depositor.addr,
            TokenPermit(
                address(weth),
                0.5 ether,
                block.timestamp + 1,
                ERC2612.permit(vm, weth, depositor, address(lmgr), 0.5 ether, block.timestamp + 1)
            )
        );

        vm.stopPrank();

        assertEq(lmgr.balances(depositor.addr, address(weth)), 1 ether);
        assertEq(weth.balanceOf(depositor.addr), 0);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
    }

    function test_access_control() public {
        vm.startPrank(depositor.addr);
        vm.deal(depositor.addr, 2 ether);

        lmgr.deposit{value: 1 ether}(depositor.addr);
        weth.deposit{value: 1 ether}();
        lmgr.deposit(
            TokenPermit(
                address(weth),
                1 ether,
                block.timestamp + 1,
                ERC2612.permit(vm, weth, depositor, address(lmgr), 1 ether, block.timestamp + 1)
            )
        );

        // Abuser trying to grant gateway role
        bytes32 role = lmgr.GATEWAY_ROLE();
        vm.expectRevert(
            "AccessControl: account 0x2b5ad5c4795c026514f8317c7a215e218dccd6cf is missing role 0x0000000000000000000000000000000000000000000000000000000000000000"
        );
        lmgr.grantRole(role, depositor.addr);

        // Try withdraw => Face Error Because depositor does not have GatewayRole
        vm.expectRevert(bytes(generateAccessControlMessage(depositor.addr, lmgr.GATEWAY_ROLE())));
        lmgr.withdraw(depositor.addr, Token(ETH, 0.5 ether));

        vm.expectRevert(bytes(generateAccessControlMessage(depositor.addr, lmgr.GATEWAY_ROLE())));
        lmgr.withdraw(Token(ETH, 0.5 ether));

        // Try withdraw erc20 => Face Error Because depositor does not have GatewayRole
        vm.expectRevert(bytes(generateAccessControlMessage(depositor.addr, lmgr.GATEWAY_ROLE())));
        lmgr.withdraw(Token(address(weth), 0.5 ether));

        vm.expectRevert(bytes(generateAccessControlMessage(depositor.addr, lmgr.GATEWAY_ROLE())));
        lmgr.withdraw(depositor.addr, Token(address(weth), 0.5 ether));

        vm.stopPrank();

        lmgr.grantRole(lmgr.GATEWAY_ROLE(), depositor.addr);
        vm.startPrank(depositor.addr);
        lmgr.withdraw(Token(ETH, 0.5 ether));
        lmgr.withdraw(Token(address(weth), 0.5 ether));
        vm.stopPrank();

        assertEq(depositor.addr.balance, 0.5 ether);
        assertEq(weth.balanceOf(depositor.addr), 0.5 ether);
    }

    function test_withdraw_eth() public {
        lmgr.grantRole(lmgr.GATEWAY_ROLE(), depositor.addr);
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        lmgr.deposit{value: 1 ether}(depositor.addr);
        lmgr.withdraw(Token(ETH, 0.5 ether));
        lmgr.withdraw(depositor.addr, Token(ETH, 0.5 ether));

        vm.stopPrank();

        assertEq(address(lmgr).balance, 0);
        assertEq(depositor.addr.balance, 1 ether);
    }

    function test_withdraw_erc20() public {
        lmgr.grantRole(lmgr.GATEWAY_ROLE(), depositor.addr);
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        lmgr.deposit(
            TokenPermit(
                address(weth),
                1 ether,
                block.timestamp + 1,
                ERC2612.permit(vm, weth, depositor, address(lmgr), 1 ether, block.timestamp + 1)
            )
        );
        lmgr.withdraw(Token(address(weth), 0.5 ether));
        lmgr.withdraw(depositor.addr, Token(address(weth), 0.5 ether));

        vm.stopPrank();

        assertEq(weth.balanceOf(address(lmgr)), 0);
        assertEq(weth.balanceOf(depositor.addr), 1 ether);
    }

    function test_withdraw_underflow() public {
        vm.prank(depositor.addr);
        vm.expectRevert();
        lmgr.withdraw(Token(ETH, 1 ether));
    }
}
