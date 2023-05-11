// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8;

import "@std/Script.sol";

import {Multicall} from "@src/Multicall.sol";
import {MintBurnERC20} from "@src/Token.sol";
import {Liquidity} from "@src/Liquidity.sol";
import {Vault} from "@src/Vault.sol";
import {Bond} from "@src/Bond.sol";
import {Operation, Token} from "@src/Types.sol";
import "@src/Utils.sol";

import "@test/ERC2612.t.sol";
import "@test/Test.t.sol";
import "@solmate/tokens/ERC20.sol";
import "@multicall/interfaces/IMulticall3.sol";
import "@uniswap/interfaces/IUniswapV2Router01.sol";

contract TestMulticall is Script {
    MintBurnERC20 public usdc;
    Liquidity public liquidity;
    Bond public bond;
    Vault public vault;
    Multicall public multicall;

    IUniswapV2Router01 public router = IUniswapV2Router01(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);

    function setUp() public {
        multicall = new Multicall();

        usdc = MintBurnERC20(0x5Cbb2F9f7E54c5B4656C3B563ff5650a0866A3EF);
        liquidity = Liquidity(0x958c5CB5479616908eF550Da851F59E5f119750C);
        bond = Bond(0xAc04705DFb53e326B79238afeaff84906e60A6EE);
        vault = new Vault(liquidity);
    }

    function run() public {
        Account memory tester =
            AccountLib.create(vm, 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);

        console.log(tester.addr.balance / 1e12);

        vm.startPrank(tester.addr);

        IMulticall3.Call3Value[] memory calls = new IMulticall3.Call3Value[](5);

        uint256 amount_in_max = 1 ether;
        uint256 amount_out = 1000000;
        uint256 deadline = block.timestamp + 60;

        // uniswap.swap
        {
            address[] memory path = new address[](2);
            path[0] = 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6;
            path[1] = 0x5Cbb2F9f7E54c5B4656C3B563ff5650a0866A3EF;

            bytes memory swap_calldata = abi.encodeWithSelector(
                IUniswapV2Router01.swapETHForExactTokens.selector, amount_out, path, tester.addr, deadline
            );

            calls[0] = IMulticall3.Call3Value({
                target: address(router),
                allowFailure: false,
                value: amount_in_max,
                callData: swap_calldata
            });
        }

        // usdc.permit
        {
            (uint8 v, bytes32 r, bytes32 s) =
                Utils.unwrapSig(ERC2612.permit(vm, ERC20(usdc), tester, address(multicall), amount_out, deadline));
            bytes memory permit_calldata = abi.encodeWithSelector(
                ERC20.permit.selector, tester.addr, address(multicall), amount_out, deadline, v, r, s
            );

            calls[1] = IMulticall3.Call3Value({
                target: address(usdc),
                allowFailure: false,
                value: 0,
                callData: permit_calldata
            });
        }

        // usdc.transferFrom
        {
            bytes memory transfer_calldata =
                abi.encodeWithSelector(ERC20.transferFrom.selector, tester.addr, address(multicall), amount_out);

            calls[2] = IMulticall3.Call3Value({
                target: address(usdc),
                allowFailure: false,
                value: 0,
                callData: transfer_calldata
            });
        }

        // usdc.approve
        {
            bytes memory approve_calldata = abi.encodeWithSelector(ERC20.approve.selector, address(vault), amount_out);

            calls[3] = IMulticall3.Call3Value({
                target: address(usdc),
                allowFailure: false,
                value: 0,
                callData: approve_calldata
            });
        }

        // vault.send
        {
            bytes[] memory args = new bytes[](1);
            args[0] = bytes("hello_world");

            bytes memory send_calldata = abi.encodeWithSignature(
                "send(address,address,(uint256,bytes[]),(address,uint256))",
                tester.addr,
                tester.addr,
                Operation({id: 0, args: args}),
                Token({addr: address(usdc), amount: amount_out})
            );

            calls[4] =
                IMulticall3.Call3Value({target: address(vault), allowFailure: false, value: 0, callData: send_calldata});
        }

        // ignore results
        multicall.aggregate3Value{value: 1 ether}(calls);

        vm.stopPrank();

        console.log(tester.addr.balance / 1e12);
    }
}
