// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";

import {ERC20, WETH} from "@solmate/tokens/WETH.sol";
import {Liquidity} from "@src/Liquidity.sol";
import {Vault} from "@src/Vault.sol";
import {Token, TokenPermit, Operation} from "@src/Types.sol";

import {ERC2612} from "@test/ERC2612.sol";
import {Account, AccountLib} from "@test/Test.sol";

contract VaultTest is Test {
    event InitOperation(
        address indexed to, address indexed token, uint256 indexed opId, uint256 amount, bytes[] opArgs
    );
    event OwnerChanged(address indexed old, address indexed change);

    Liquidity internal lmgr;
    Vault internal vault;
    WETH internal weth;

    Account internal owner;
    Account internal user;

    function setUp() public {
        owner = AccountLib.create(vm, 0x2);
        user = AccountLib.create(vm, 0x3);

        vm.startPrank(owner.addr);

        vault = new Vault(lmgr);

        weth = new WETH();
        lmgr = new Liquidity("TEST", address(weth));
        lmgr.grantRole(lmgr.GATEWAY_ROLE(), address(vault));

        vm.stopPrank();
    }

    function test_change_owner() public {
        assertEq(vault.owner(), owner.addr);

        vm.prank(owner.addr);
        vault.transferOwnership(user.addr);

        assertEq(vault.owner(), user.addr);
    }

    function test_send_erc20() public {
        bytes[] memory args = new bytes[](1);
        args[0] = bytes("hello_world");

        vm.expectEmit(true, true, true, true);
        emit InitOperation(user.addr, address(weth), 0, 1 ether, args);

        vm.startPrank(user.addr);

        vm.deal(user.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        weth.approve(address(vault), 1 ether);

        vault.send(user.addr, Operation(0, args), Token(address(weth), 1 ether));

        vm.stopPrank();

        assertEq(lmgr.balanceOf(user.addr), 1 ether);
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

        vault.send(
            user.addr,
            Operation(0, args),
            TokenPermit(
                address(weth),
                1 ether,
                block.timestamp + 1,
                ERC2612.permit(vm, weth, user, address(vault), 1 ether, block.timestamp + 1)
            )
        );

        vm.stopPrank();

        assertEq(lmgr.balanceOf(user.addr), 1 ether);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
        assertEq(weth.balanceOf(user.addr), 0);
    }

    function test_execute() public {
        vm.startPrank(user.addr);
        vm.deal(user.addr, 1 ether);

        weth.deposit{value: 1 ether}();

        // fuel 1 ether to liquidity manager
        lmgr.deposit(
            address(vault),
            1 ether,
            block.timestamp + 1,
            ERC2612.permit(vm, weth, user, address(lmgr), 1 ether, block.timestamp + 1)
        );

        vm.stopPrank();

        Vault.ExecuteFund[] memory funds = new Vault.ExecuteFund[](1);
        funds[0] = Vault.ExecuteFund(address(weth), 1 ether);

        Vault.ExecuteCalldata[] memory inner = new Vault.ExecuteCalldata[](1);
        inner[0] =
            Vault.ExecuteCalldata(address(weth), 0, abi.encodeWithSelector(ERC20.transfer.selector, user.addr, 1 ether));

        Vault.ExecutePayload memory payload = Vault.ExecutePayload(funds, inner);

        bytes32 digest = keccak256(abi.encode(payload));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(owner.key, digest);
        bytes memory signature = abi.encodePacked(r, s, v);

        vault.execute(payload, signature);

        assertEq(lmgr.balanceOf(address(vault)), 0);
        assertEq(weth.balanceOf(address(lmgr)), 0);
        assertEq(weth.balanceOf(user.addr), 1 ether);
    }
}
