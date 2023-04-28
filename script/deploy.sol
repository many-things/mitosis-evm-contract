// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@std/Script.sol";

import {MintBurnERC20} from "@src/Token.sol";
import {Vault} from "@src/Vault.sol";
import {Liquidity} from "@src/Liquidity.sol";

contract Deploy is Script {
    function setUp() public {}

    function run() public {
        string memory seedPhrase = vm.envString("MNEMONIC");
        uint256 privateKey = vm.deriveKey(seedPhrase, 0);
        // address owner = vm.addr(privateKey);

        vm.startBroadcast(privateKey);

        MintBurnERC20 usdc = new MintBurnERC20("USDC", "USD//C", 6);
        Liquidity lmgr = new Liquidity("LP_USDC", address(usdc));
        Vault vault = new Vault(lmgr);

        vm.stopBroadcast();

        console.log("usdc  = ", address(usdc));
        console.log("lmgr  = ", address(lmgr));
        console.log("vault = ", address(vault));
    }
}
