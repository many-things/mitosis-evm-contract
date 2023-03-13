build:
	@forge build
	@npx typechain \
		--target="ethers-v6" \
		--out-dir="types" \
		"out/DenomManager.sol/*.json" \
		"out/Gateway.sol/*.json" \
		"out/LiquidityManager.sol/*.json"
	@yarn build

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
