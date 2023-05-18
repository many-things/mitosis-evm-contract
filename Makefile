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

deploy-local: build
	@(MNEMONIC="test test test test test test test test test test test junk" \
		forge script script/deploy.s.sol:Deploy \
			--broadcast \
			--rpc-url http://localhost:8545)

deploy-goerli: build
	@(MNEMONIC="$(GOERLI_DEPLOYER_KEY)" \
		forge script script/deploy.s.sol:Deploy \
			--broadcast \
			--slow \
			--rpc-url $(GOERLI_RPC_ENDPOINT) \
			--chain 5 \
			--etherscan-api-key $(ETHERSCAN_API_KEY) \
			--verify)

deploy-goerli-dry: build
	@(MNEMONIC="$(GOERLI_DEPLOYER_KEY)" \
		forge script script/deploy.s.sol:Deploy \
			--rpc-url $(GOERLI_RPC_ENDPOINT) \
			--chain 5)

deploy-mainnet: build
	@(MNEMONIC="$(MAINNET_DEPLOYER_KEY)" \
		forge script script/deploy.s.sol:Deploy \
			--broadcast \
			--slow \
			--rpc-url $(MAINNET_RPC_ENDPOINT) \
			--chain 1 \
			--etherscan-api-key $(ETHERSCAN_API_KEY) \
			--verify)

deploy-mainnet-dry: build
	@(MNEMONIC="$(MAINNET_DEPLOYER_KEY)" \
		forge script script/deploy.s.sol:Deploy \
			--rpc-url $(MAINNET_RPC_ENDPOINT) \
			--chain 1)
