// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@std/Script.sol";

import {MintBurnERC20} from "@src/Token.sol";
import {Liquidity} from "@src/Liquidity.sol";
import {Bond} from "@src/Bond.sol";
import {Vault} from "@src/Vault.sol";

contract Deploy is Script {
    function setUp() public {}

    function run() public {
        string memory seedPhrase = vm.envString("MNEMONIC");
        uint256 privateKey = vm.deriveKey(seedPhrase, 0);
        // address owner = vm.addr(privateKey);

        vm.startBroadcast(privateKey);

        // MintBurnERC20 usdc = new MintBurnERC20("USDC", "USD//C", 6);
        Liquidity lmgr = new Liquidity("LP_USDC", address(0x5Cbb2F9f7E54c5B4656C3B563ff5650a0866A3EF));
        Bond bond = new Bond(address(lmgr), 3 minutes);
        Vault vault = new Vault(lmgr);

        vm.stopBroadcast();

        console.log("usdc  = ", address(0x5Cbb2F9f7E54c5B4656C3B563ff5650a0866A3EF));
        console.log("lmgr  = ", address(lmgr));
        console.log("bond  = ", address(bond));
        console.log("vault = ", address(vault));
    }
}
