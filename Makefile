build:
	@forge build
	@npx typechain --target="ethers-v5" --out-dir="types" "out/Token.sol/*.json"

deploy-goerli: build
	@(MNEMONIC="$(GOERLI_DEPLOYER_KEY)" forge script script/deploy.sol:Deploy \
		--broadcast \
		--rpc-url $(GOERLI_RPC_ENDPOINT) \
		--chain 5 \
		--etherscan-api-key $(ETHERSCAN_API_KEY) \
		--verify)

deploy-mainnet: build
	@(MNEMONIC="$(MAINNET_DEPLOYER_KEY)" forge script script/deploy.sol:Deploy \
		--broadcast \
		--rpc-url $(MAINNET_RPC_ENDPOINT) \
		--chain 1 \
		--etherscan-api-key $(ETHERSCAN_API_KEY) \
		--verify)