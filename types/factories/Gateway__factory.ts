/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Gateway, GatewayInterface } from "../Gateway";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract LiquidityManager",
        name: "_lmgr",
        type: "address",
      },
      {
        internalType: "contract DenomManager",
        name: "_dmgr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "denom",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "opId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "opArgs",
        type: "bytes",
      },
    ],
    name: "InitOperation",
    type: "event",
  },
  {
    inputs: [],
    name: "dmgr",
    outputs: [
      {
        internalType: "contract DenomManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lmgr",
    outputs: [
      {
        internalType: "contract LiquidityManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "args",
            type: "bytes",
          },
        ],
        internalType: "struct Operation",
        name: "_op",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct TokenPermit",
        name: "_token",
        type: "tuple",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "args",
            type: "bytes",
          },
        ],
        internalType: "struct Operation",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "args",
            type: "bytes",
          },
        ],
        internalType: "struct Operation",
        name: "_op",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Token",
        name: "_token",
        type: "tuple",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610fa0380380610fa083398101604081905261002f91610078565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100b2565b6001600160a01b038116811461007557600080fd5b50565b6000806040838503121561008b57600080fd5b825161009681610060565b60208401519092506100a781610060565b809150509250929050565b610edf806100c16000396000f3fe60806040526004361061004a5760003560e01c806314a7aa6c1461004f5780634f4f2d231461008b5780637b30c41c146100ad5780639cf11c55146100c0578063c7555d97146100e0575b600080fd5b34801561005b57600080fd5b5060005461006f906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b34801561009757600080fd5b506100ab6100a6366004610c01565b610100565b005b6100ab6100bb366004610cd0565b6104a8565b3480156100cc57600080fd5b5060015461006f906001600160a01b031681565b3480156100ec57600080fd5b506100ab6100fb366004610d20565b610761565b60008160200151116101595760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064015b60405180910390fd5b8060600151516041146101ae5760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e67746800000000000000006044820152606401610150565b805160608083015160208082015160408084015193909401519186015184870151855163d505accf60e01b815233600482015230602482015260448101929092526064820152600092831a6084820181905260a4820183905260c4820185905294519193926001600160a01b0387169263d505accf9260e480820193929182900301818387803b15801561024157600080fd5b505af1158015610255573d6000803e3d6000fd5b5050505060208501516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038516906323b872dd906064016020604051808303816000875af11580156102b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d69190610dc5565b50600054602086015160405163095ea7b360e01b81526001600160a01b03928316600482015260248101919091529085169063095ea7b3906044016020604051808303816000875af1158015610330573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103549190610dc5565b5060005460408051808201825287516001600160a01b0390811682526020808a01519083019081529251632a3cafa760e01b815233600482015291518116602483015291516044820152911690632a3cafa790606401600060405180830381600087803b1580156103c457600080fd5b505af11580156103d8573d6000803e3d6000fd5b5050600154875160405163def2489b60e01b81526001600160a01b039182166004820152600094509116915063def2489b90602401602060405180830381865afa15801561042a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044e9190610dee565b90508660000151816001600160a01b0316896001600160a01b0316600080516020610e8a83398151915289600001518a602001518c6020015160405161049693929190610e0b565b60405180910390a45050505050505050565b341561063f57600154604080516341917ff960e11b815290516000926001600160a01b031691638322fff29160048083019260209291908290030181865afa1580156104f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051c9190610dee565b60015460405163def2489b60e01b81526001600160a01b0380841660048301529293506000929091169063def2489b90602401602060405180830381865afa15801561056c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105909190610dee565b60005460405163f340fa0160e01b81526001600160a01b03878116600483015292935091169063f340fa019034906024016000604051808303818588803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b50505050508260000151816001600160a01b0316856001600160a01b0316600080516020610e8a8339815191528534886020015160405161063193929190610e0b565b60405180910390a450505050565b600154604080516320d494e560e21b815290516000926001600160a01b03169163835253949160048083019260209291908290030181865afa158015610689573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ad9190610dee565b60015460405163def2489b60e01b81526001600160a01b0380841660048301529293506000929091169063def2489b90602401602060405180830381865afa1580156106fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107219190610dee565b90508260000151816001600160a01b0316856001600160a01b0316600080516020610e8a8339815191528534886020015160405161063193929190610e0b565b60008160200151116107b55760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610150565b8051604051636eb1769f60e11b81523360048201523060248201526000906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa158015610804573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108289190610e70565b905082602001518110156108775760405162461bcd60e51b8152602060048201526016602482015275696e73756666696369656e7420616c6c6f77616e636560501b6044820152606401610150565b60208301516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156108d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f49190610dc5565b50600054602084015160405163095ea7b360e01b81526001600160a01b03928316600482015260248101919091529083169063095ea7b3906044016020604051808303816000875af115801561094e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109729190610dc5565b50600054604051632a3cafa760e01b815233600482015284516001600160a01b0390811660248301526020860151604483015290911690632a3cafa790606401600060405180830381600087803b1580156109cc57600080fd5b505af11580156109e0573d6000803e3d6000fd5b5050600154855160405163def2489b60e01b81526001600160a01b039182166004820152600094509116915063def2489b90602401602060405180830381865afa158015610a32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a569190610dee565b90508460000151816001600160a01b0316876001600160a01b0316600080516020610e8a833981519152876000015188602001518a60200151604051610a9e93929190610e0b565b60405180910390a4505050505050565b6001600160a01b0381168114610ac357600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610aff57610aff610ac6565b60405290565b600082601f830112610b1657600080fd5b813567ffffffffffffffff80821115610b3157610b31610ac6565b604051601f8301601f19908116603f01168101908282118183101715610b5957610b59610ac6565b81604052838152866020858801011115610b7257600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060408284031215610ba457600080fd5b6040516040810167ffffffffffffffff8282108183111715610bc857610bc8610ac6565b81604052829350843583526020850135915080821115610be757600080fd5b50610bf485828601610b05565b6020830152505092915050565b600080600060608486031215610c1657600080fd5b8335610c2181610aae565b9250602084013567ffffffffffffffff80821115610c3e57600080fd5b610c4a87838801610b92565b93506040860135915080821115610c6057600080fd5b9085019060808288031215610c7457600080fd5b610c7c610adc565b8235610c8781610aae565b808252506020830135602082015260408301356040820152606083013582811115610cb157600080fd5b610cbd89828601610b05565b6060830152508093505050509250925092565b60008060408385031215610ce357600080fd5b8235610cee81610aae565b9150602083013567ffffffffffffffff811115610d0a57600080fd5b610d1685828601610b92565b9150509250929050565b60008060008385036080811215610d3657600080fd5b8435610d4181610aae565b9350602085013567ffffffffffffffff80821115610d5e57600080fd5b610d6a88838901610b92565b94506040603f1984011215610d7e57600080fd5b60405192506040830191508282108183111715610d9d57610d9d610ac6565b506040908152850135610daf81610aae565b8152606094909401356020850152509093909250565b600060208284031215610dd757600080fd5b81518015158114610de757600080fd5b9392505050565b600060208284031215610e0057600080fd5b8151610de781610aae565b60018060a01b038416815260006020848184015260606040840152835180606085015260005b81811015610e4d57858101830151858201608001528201610e31565b506000608082860101526080601f19601f83011685010192505050949350505050565b600060208284031215610e8257600080fd5b505191905056fe2af3306f1f1ed163fc7ecde37668401571145f7b1b7f28c082798d1cc4030a59a2646970667358221220b2e0bbbcd957661750d60cc417a5141635b915bcd5e8a002212424a956aea6be64736f6c63430008110033";

type GatewayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GatewayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Gateway__factory extends ContractFactory {
  constructor(...args: GatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _lmgr: AddressLike,
    _dmgr: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_lmgr, _dmgr, overrides || {});
  }
  override deploy(
    _lmgr: AddressLike,
    _dmgr: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_lmgr, _dmgr, overrides || {}) as Promise<
      Gateway & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Gateway__factory {
    return super.connect(runner) as Gateway__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GatewayInterface {
    return new Interface(_abi) as GatewayInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Gateway {
    return new Contract(address, _abi, runner) as unknown as Gateway;
  }
}