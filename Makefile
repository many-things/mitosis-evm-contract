.PHONY: build

clean:
	@rm -rf out
	@rm -rf types
	@rm -rf dist

build: clean
	@forge build --skip test --skip script
	@yarn typegen
	@yarn fmt
	@yarn compile

deploy-goerli: build
	@(MNEMONIC="$(GOERLI_DEPLOYER_KEY)" \
		forge script script/deploy.sol:Deploy \
			--broadcast \
			--rpc-url $(GOERLI_RPC_ENDPOINT) \
			--chain 5 \
			--etherscan-api-key $(ETHERSCAN_API_KEY) \
			--verify)

deploy-goerli-dry: build
	@(MNEMONIC="$(GOERLI_DEPLOYER_KEY)" \
		forge script script/deploy.sol:Deploy \
			--rpc-url $(GOERLI_RPC_ENDPOINT) \
			--chain 5)

deploy-mainnet: build
	@(MNEMONIC="$(MAINNET_DEPLOYER_KEY)" \
		forge script script/deploy.sol:Deploy \
			--broadcast \
			--rpc-url $(MAINNET_RPC_ENDPOINT) \
			--chain 1 \
			--etherscan-api-key $(ETHERSCAN_API_KEY) \
			--verify)

deploy-mainnet-dry: build
	@(MNEMONIC="$(MAINNET_DEPLOYER_KEY)" \
		forge script script/deploy.sol:Deploy \
			--rpc-url $(MAINNET_RPC_ENDPOINT) \
			--chain 1)
