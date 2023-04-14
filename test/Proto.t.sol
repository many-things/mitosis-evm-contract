// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@std/Test.sol";

import {Coin, CoinCodec} from "@src/proto/coin.proto.sol";
import {MsgSend, MsgSendCodec} from "@src/proto/msg.proto.sol";

contract ProtoTest is Test {
    using MsgSendCodec for MsgSend;
    using CoinCodec for Coin;

    function setUp() public {}

    function test_encode() public {
        Coin[] memory amount = new Coin[](1);
        amount[0] = Coin({denom: "uatom", amount: "100"});

        MsgSend memory m = MsgSend({
            from_address: "cosmos1qyqsyqcyq5rqwzqfpg9scrgg9y6dyq5qccg7v9",
            to_address: "cosmos1qyqsyqcyq5rqwzqfpg9scrgg9y6dyq5qccg7v9",
            amount: amount
        });

        bytes memory encoded = m.encode();

        bytes memory expected =
            "0a2d636f736d6f7331717971737971637971357271777a716670673973637267673979366479713571636367377639122d636f736d6f7331717971737971637971357271777a7166706739736372676739793664797135716363673776391a0c0a057561746f6d1203313030";

        (bool success, uint64 pos, MsgSend memory instance) = MsgSendCodec.decode(0, expected, uint64(expected.length));

        console.logBytes(abi.encode(instance));
    }
}
