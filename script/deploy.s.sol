// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8;

import "@std/Script.sol";

import {Multicall} from "@src/Multicall.sol";
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
        // Liquidity lmgr = new Liquidity("LP_USDC", address(usdc));
        // Bond bond = new Bond(address(lmgr), 3 minutes);

        // pre-deployed
        MintBurnERC20 usdc = MintBurnERC20(0x5Cbb2F9f7E54c5B4656C3B563ff5650a0866A3EF);
        Liquidity lmgr = Liquidity(0x958c5CB5479616908eF550Da851F59E5f119750C);
        Bond bond = Bond(0xAc04705DFb53e326B79238afeaff84906e60A6EE);
        Multicall multicall = Multicall(payable(address(0x7480e4D89d485114016A7EC3d5d2E4760a405a12)));

        // new ones
        Vault vault = new Vault(lmgr);

        vm.stopBroadcast();

        console.log("usdc      = ", address(usdc));
        console.log("lmgr      = ", address(lmgr));
        console.log("bond      = ", address(bond));
        console.log("vault     = ", address(vault));
        console.log("multicall = ", address(multicall));
    }
}
