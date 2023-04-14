.PHONY: build proto

build:
	@forge build
	@yarn typegen
	@yarn fmt
	@yarn compile

proto: proto-clean
	@protoc --plugin "$(GOBIN)/protoc-gen-sol" --sol_out license=Apache-2.0,generate=all:src/proto -I proto proto/*.proto
	@protoc --plugin "$(GOBIN)/protoc-gen-gocosmos" --gocosmos_out bind/ -I proto proto/*.proto
	@find src/proto -type f -exec sed -i '' "s/\"@lazyledger\/protobuf3-solidity-lib\/contracts/\"@p2s/g" {} \;
	@find src/proto -type f -exec sed -i '' "s/\[j\];/\[j++\];/g" {} \;
	@forge fmt

proto-clean:
	@rm -rf src/proto
	@mkdir -p src/proto

deploy-goerli: build
	@(MNEMONIC="$(GOERLI_DEPLOYER_KEY)" \
		forge script script/deploy.sol:Deploy \
			--broadcast \
			--rpc-url $(GOERLI_RPC_ENDPOINT) \
			--chain 5 \
			--etherscan-api-key $(ETHERSCAN_API_KEY) \
			--verify)

deploy-mainnet: build
	@(MNEMONIC="$(MAINNET_DEPLOYER_KEY)" \
		forge script script/deploy.sol:Deploy \
			--broadcast \
			--rpc-url $(MAINNET_RPC_ENDPOINT) \
			--chain 1 \
			--etherscan-api-key $(ETHERSCAN_API_KEY) \
			--verify)
