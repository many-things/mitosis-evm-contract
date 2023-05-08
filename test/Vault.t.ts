import { Vault__factory, MintBurnERC20__factory } from '../types'
import { Wallet, providers } from 'ethers'

async function main() {
  const provider = new providers.JsonRpcProvider('http://127.0.0.1:8545', 74)
  const signer = new Wallet(
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    provider,
  )
  const account = await signer.getAddress()

  const vault = Vault__factory.connect(
    '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    signer,
  )
  const usdc = MintBurnERC20__factory.connect(
    '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    signer,
  )

  await usdc.mint(account, '1000000000000000000')
  await usdc.approve(vault.address, '1000000000000000000')

  const asdf = `0x${Buffer.from('hello_world').toString('hex')}`

  console.log(await vault.owner())

  const tx = await vault['send(address,(uint256,bytes[]),(address,uint256))'](
    account,
    { id: 0, args: [asdf] },
    {
      addr: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      amount: '1000000000000000000',
    },
  )
  console.log(tx)
  const receipt = await tx.wait()
  console.log(receipt)
}

main().catch(console.error)
