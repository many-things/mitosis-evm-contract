// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";

import {ERC20, WETH} from "@solmate/tokens/WETH.sol";

import {DenomManager} from "../src/DenomManager.sol";
import {LiquidityManager} from "../src/LiquidityManager.sol";
import {Gateway} from "../src/Gateway.sol";
import {Token, TokenPermit, Operation} from "../src/Types.sol";

import {ERC2612} from "./ERC2612.sol";
import {Account, AccountLib} from "./Test.sol";

contract GatewayTest is Test {
    event InitOperation(
        address indexed to, address indexed denom, uint256 indexed opId, address token, uint256 amount, bytes opArgs
    );

    LiquidityManager internal lmgr;
    DenomManager internal dmgr;
    Gateway internal gateway;
    WETH internal weth;

    Account internal user;

    function setUp() public {
        lmgr = new LiquidityManager();
        dmgr = new DenomManager();
        gateway = new Gateway(lmgr, dmgr);

        weth = new WETH();
        dmgr.addAlias(address(weth), address(0x2));

        user = AccountLib.create(vm, 0x2);
    }

    function test_send() public {
        vm.expectEmit(true, true, true, true);
        emit InitOperation(user.addr, dmgr.NONE(), 0, dmgr.NONE(), 0, bytes("hello_world"));

        vm.prank(user.addr);
        gateway.send(user.addr, Operation(0, bytes("hello_world")));
    }

    function test_send_eth() public {
        vm.expectEmit(true, true, true, true);
        emit InitOperation(user.addr, dmgr.ETH(), 0, dmgr.ETH(), 1 ether, bytes("hello_world"));

        vm.prank(user.addr);
        vm.deal(user.addr, 1 ether);
        gateway.send{value: 1 ether}(user.addr, Operation(0, bytes("hello_world")));

        assertEq(lmgr.balances(user.addr, dmgr.ETH()), 1 ether);
        assertEq(user.addr.balance, 0);
    }

    function test_send_erc20() public {
        vm.expectEmit(true, true, true, true);
        emit InitOperation(user.addr, address(0x2), 0, address(weth), 1 ether, bytes("hello_world"));

        vm.startPrank(user.addr);

        vm.deal(user.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        weth.approve(address(gateway), 1 ether);

        gateway.send(user.addr, Operation(0, bytes("hello_world")), Token(address(weth), 1 ether));

        vm.stopPrank();

        assertEq(lmgr.balances(user.addr, address(weth)), 1 ether);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
        assertEq(weth.balanceOf(user.addr), 0);
    }

    function test_send_erc2612() public {
        vm.expectEmit(true, true, true, true);
        emit InitOperation(user.addr, address(0x2), 0, address(weth), 1 ether, bytes("hello_world"));

        vm.startPrank(user.addr);

        vm.deal(user.addr, 1 ether);
        weth.deposit{value: 1 ether}();

        gateway.send(
            user.addr,
            Operation(0, bytes("hello_world")),
            TokenPermit(
                address(weth),
                1 ether,
                block.timestamp + 1,
                ERC2612.permit(vm, weth, user, address(gateway), 1 ether, block.timestamp + 1)
            )
        );

        vm.stopPrank();

        assertEq(lmgr.balances(user.addr, address(weth)), 1 ether);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
        assertEq(weth.balanceOf(user.addr), 0);
    }
}
