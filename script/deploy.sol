// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@std/Script.sol";

import {DenomManager} from "@src/DenomManager.sol";
import {Gateway} from "@src/Gateway.sol";
import {LiquidityManager} from "@src/LiquidityManager.sol";

contract Deploy is Script {
    function setUp() public {}

    function run() public {
        string memory seedPhrase = vm.envString("MNEMONIC");
        uint256 privateKey = vm.deriveKey(seedPhrase, 0);
        // address owner = vm.addr(privateKey);

        vm.startBroadcast(privateKey);

        DenomManager dmgr = new DenomManager();
        LiquidityManager lmgr = new LiquidityManager();
        new Gateway(lmgr, dmgr);

        vm.stopBroadcast();
    }
}
