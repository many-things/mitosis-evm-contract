// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";

import {DenomManager} from "../src/DenomManager.sol";
import {LiquidityManager} from "../src/LiquidityManager.sol";
import {Gateway} from "../src/Gateway.sol";
import {ERC20, WETH} from "@solmate/tokens/WETH.sol";

contract GatewayTest is Test {
    LiquidityManager internal lmgr;
    DenomManager internal dmgr;
    Gateway internal gateway;

    function setUp() public {
        lmgr = new LiquidityManager();
        dmgr = new DenomManager();
        gateway = new Gateway(lmgr, dmgr);
    }

    function test_send() public {}

    function test_send_eth() public {}

    function test_send_erc20() public {}

    function test_send_erc2612() public {}
}
