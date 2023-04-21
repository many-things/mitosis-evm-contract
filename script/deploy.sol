// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@std/Script.sol";

import {Vault} from "@src/Vault.sol";
import {Liquidity} from "@src/Liquidity.sol";

contract Deploy is Script {
    function setUp() public {}

    function run() public {
        string memory seedPhrase = vm.envString("MNEMONIC");
        uint256 privateKey = vm.deriveKey(seedPhrase, 0);
        // address owner = vm.addr(privateKey);

        vm.startBroadcast(privateKey);

        Liquidity lmgr = new Liquidity("TODO", address(0x0));
        new Vault(lmgr);

        vm.stopBroadcast();
    }
}
