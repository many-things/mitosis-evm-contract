// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";
import {ERC20, WETH} from "@solmate/tokens/WETH.sol";

import {LiquidityManager} from "../src/LiquidityManager.sol";
import {Token, TokenPermit} from "../src/Types.sol";

struct Account {
    address addr;
    uint256 key;
}

contract LiquidityManagerTest is Test {
    LiquidityManager internal lmgr;

    address internal ETH;
    WETH internal weth;

    Account internal depositor;

    function permit(ERC20 _token, Account memory _permitter, address _spender, uint256 _value, uint256 _deadline)
        internal
        view
        returns (bytes memory)
    {
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                _token.DOMAIN_SEPARATOR(),
                keccak256(
                    abi.encode(
                        keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"),
                        _permitter.addr,
                        _spender,
                        _value,
                        _token.nonces(_permitter.addr),
                        _deadline
                    )
                )
            )
        );

        (uint8 v, bytes32 r, bytes32 s) = vm.sign(depositor.key, digest);
        bytes memory signature = abi.encodePacked(r, s, v);

        return signature;
    }

    function newAccount(uint256 key) internal pure returns (Account memory) {
        return Account(vm.addr(key), key);
    }

    function setUp() public {
        lmgr = new LiquidityManager();
        weth = new WETH();

        ETH = address(0x1);
        depositor = newAccount(0x2);
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
                permit(weth, depositor, address(lmgr), 0.5 ether, block.timestamp + 1)
            )
        );

        lmgr.deposit(
            depositor.addr,
            TokenPermit(
                address(weth),
                0.5 ether,
                block.timestamp + 1,
                permit(weth, depositor, address(lmgr), 0.5 ether, block.timestamp + 1)
            )
        );

        vm.stopPrank();

        assertEq(lmgr.balances(depositor.addr, address(weth)), 1 ether);
        assertEq(weth.balanceOf(depositor.addr), 0);
        assertEq(weth.balanceOf(address(lmgr)), 1 ether);
    }

    function test_withdraw_eth() public {
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
        vm.startPrank(depositor.addr);

        vm.deal(depositor.addr, 1 ether);
        weth.deposit{value: 1 ether}();
        lmgr.deposit(
            TokenPermit(
                address(weth),
                1 ether,
                block.timestamp + 1,
                permit(weth, depositor, address(lmgr), 1 ether, block.timestamp + 1)
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
