// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@std/Script.sol";
import {ERC20PresetMinterPauser as ERC20} from "@oz/token/ERC20/presets/ERC20PresetMinterPauser.sol";

import {Vault} from "@src/Vault.sol";
import {Liquidity} from "@src/Liquidity.sol";

contract Deploy is Script {
    function setUp() public {}

    function run() public {
        string memory seedPhrase = vm.envString("MNEMONIC");
        uint256 privateKey = vm.deriveKey(seedPhrase, 0);
        // address owner = vm.addr(privateKey);

        vm.startBroadcast(privateKey);

        ERC20 usdc = new ERC20("USDC", "USD//C");
        Liquidity lmgr = new Liquidity("USDC", address(usdc));
        Vault vault = new Vault(lmgr);

        vm.stopBroadcast();

        console.log("usdc  = ", address(usdc));
        console.log("lmgr  = ", address(lmgr));
        console.log("vault = ", address(vault));
    }
}
