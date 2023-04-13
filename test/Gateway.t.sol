// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";

import {ERC20, WETH} from "@solmate/tokens/WETH.sol";
import {LiquidityManager} from "@src/LiquidityManager.sol";
import {Gateway} from "@src/Gateway.sol";
import {Token, TokenPermit, Operation} from "@src/Types.sol";

import {ERC2612} from "@test/ERC2612.sol";
import {Account, AccountLib} from "@test/Test.sol";

contract GatewayTest is Test {
    event InitOperation(
        address indexed to, address indexed token, uint256 indexed opId, uint256 amount, bytes[] opArgs
    );
    event OwnerChanged(address indexed old, address indexed change);

    LiquidityManager internal lmgr;
    Gateway internal gateway;
    WETH internal weth;

    Account internal owner;
    Account internal user;

    function setUp() public {
        owner = AccountLib.create(vm, 0x2);
        user = AccountLib.create(vm, 0x3);

        vm.startPrank(owner.addr);

        lmgr = new LiquidityManager();
        gateway = new Gateway(lmgr);
        lmgr.grantRole(lmgr.GATEWAY_ROLE(), address(gateway));

        weth = new WETH();

        vm.stopPrank();
    }

    function test_change_owner() public {
        assertEq(gateway.owner(), owner.addr);

        vm.prank(owner.addr);
        gateway.transferOwnership(user.addr);

        assertEq(gateway.owner(), user.addr);
    }

    function test_send() public {
        bytes[] memory args = new bytes[](1);
        args[0] = bytes("hello_world");

        vm.expectEmit(true, true, true, true);
        emit InitOperation(user.addr, address(0x0), 0, 0, args);

        vm.prank(user.addr);

        gateway.send(user.addr, Operation(0, args));
    }

    function test_send_eth() public {
        bytes[] memory args = new bytes[](1);
        args[0] = bytes("hello_world");

        vm.expectEmit(true, true, true, true);
        emit InitOperation(user.addr, address(0x0), 0, 1 ether, args);

        vm.prank(user.addr);
        vm.deal(user.addr, 1 ether);

        gateway.send{value: 1 ether}(user.addr, Operation(0, args));

        assertEq(lmgr.balances(user.addr, address(0x1)), 1 ether);
        assertEq(user.addr.balance, 0);
    }

    function test_send_erc20() public {
        bytes[] memory args = new bytes[](1);
        args[0] = bytes("hello_world");

        vm.expectEmit(true, true, true, true);
        emit InitOperation(user.addr, address(weth), 0, 1 ether, args);

        vm.startPrank(user.addr);

        vm.deal(user.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        weth.approve(address(gateway), 1 ether);

        gateway.send(user.addr, Operation(0, args), Token(address(weth), 1 ether));

        vm.stopPrank();

        assertEq(lmgr.balances(user.addr, address(weth)), 1 ether);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
        assertEq(weth.balanceOf(user.addr), 0);
    }

    function test_send_erc2612() public {
        vm.expectEmit(true, true, true, true);
        bytes[] memory args = new bytes[](1);
        args[0] = bytes("hello_world");
        emit InitOperation(user.addr, address(weth), 0, 1 ether, args);

        vm.startPrank(user.addr);

        vm.deal(user.addr, 1 ether);
        weth.deposit{value: 1 ether}();

        gateway.send(
            user.addr,
            Operation(0, args),
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

    function test_execute() public {
        vm.startPrank(user.addr);
        vm.deal(user.addr, 1 ether);

        weth.deposit{value: 1 ether}();

        // fuel 1 ether to liquidity manager
        lmgr.deposit(
            address(gateway),
            TokenPermit(
                address(weth),
                1 ether,
                block.timestamp + 1,
                ERC2612.permit(vm, weth, user, address(lmgr), 1 ether, block.timestamp + 1)
            )
        );

        vm.stopPrank();

        Gateway.ExecuteFund[] memory funds = new Gateway.ExecuteFund[](1);
        funds[0] = Gateway.ExecuteFund(address(weth), 1 ether);

        Gateway.ExecuteCalldata[] memory inner = new Gateway.ExecuteCalldata[](1);
        inner[0] = Gateway.ExecuteCalldata(
            address(weth), 0, abi.encodeWithSelector(ERC20.transfer.selector, user.addr, 1 ether)
        );

        Gateway.ExecutePayload memory payload = Gateway.ExecutePayload(funds, inner);

        bytes32 digest = keccak256(abi.encode(payload));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(owner.key, digest);
        bytes memory signature = abi.encodePacked(r, s, v);

        gateway.execute(payload, signature);

        assertEq(lmgr.balances(address(gateway), address(weth)), 0);
        assertEq(weth.balanceOf(address(lmgr)), 0);
        assertEq(weth.balanceOf(user.addr), 1 ether);
    }
}
