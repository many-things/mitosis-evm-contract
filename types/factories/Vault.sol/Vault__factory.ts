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
import type { NonPayableOverrides } from "../../common";
import type { Vault, VaultInterface } from "../../Vault.sol/Vault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Liquidity",
        name: "_lmgr",
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
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returndata",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct Vault.ExecuteResult[]",
        name: "results",
        type: "tuple[]",
      },
    ],
    name: "ExecuteOperation",
    type: "event",
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
        name: "token",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "opArgs",
        type: "bytes[]",
      },
    ],
    name: "InitOperation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Vault.ExecuteFund[]",
            name: "funds",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct Vault.ExecuteCalldata[]",
            name: "inner",
            type: "tuple[]",
          },
        ],
        internalType: "struct Vault.ExecutePayload",
        name: "_payload",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lmgr",
    outputs: [
      {
        internalType: "contract Liquidity",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
            internalType: "bytes[]",
            name: "args",
            type: "bytes[]",
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
            internalType: "bytes[]",
            name: "args",
            type: "bytes[]",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516115c83803806115c883398101604081905261002f91610095565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100c5565b6000602082840312156100a757600080fd5b81516001600160a01b03811681146100be57600080fd5b9392505050565b6114f4806100d46000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806314a7aa6c146100675780635f5e2997146100965780638da5cb5b146100ab578063a4d5e505146100be578063b3a2fe98146100d1578063f2fde38b146100e4575b600080fd5b60015461007a906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100a96100a4366004610ed8565b6100f7565b005b60005461007a906001600160a01b031681565b6100a96100cc366004611015565b6103dd565b6100a96100df366004611127565b6108ba565b6100a96100f23660046111f0565b610bdb565b60008160200151116101505760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064015b60405180910390fd5b8051604051636eb1769f60e11b81523360048201523060248201526000906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa15801561019f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c39190611212565b905082602001518110156102125760405162461bcd60e51b8152602060048201526016602482015275696e73756666696369656e7420616c6c6f77616e636560501b6044820152606401610147565b60208301516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038316906323b872dd906064016020604051808303816000875af115801561026b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028f919061122b565b50600154602084015160405163095ea7b360e01b81526001600160a01b03928316600482015260248101919091529083169063095ea7b3906044016020604051808303816000875af11580156102e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030d919061122b565b5060015460208401516040516311f9fbc960e21b815233600482015260248101919091526001600160a01b03909116906347e7ef2490604401600060405180830381600087803b15801561036057600080fd5b505af1158015610374573d6000803e3d6000fd5b50505050836000015183600001516001600160a01b0316866001600160a01b03167f318b9af78ddb94362003f2f344355e538ac82da78d7d01190bad73a0430a092b866020015188602001516040516103ce92919061129d565b60405180910390a45050505050565b60208181015160408084015160608501519151600092831a9491929160019161040891899101611307565b60408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610466573d6000803e3d6000fd5b5050604051601f1901516000549092506001600160a01b0380841691161490506104c65760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610147565b60005b865151811015610577576000876000015182815181106104eb576104eb6113ef565b6020908102919091018101516001549181015160405163f3fef3a360e01b815230600482015260248101919091529092506001600160a01b039091169063f3fef3a390604401600060405180830381600087803b15801561054b57600080fd5b505af115801561055f573d6000803e3d6000fd5b5050505050808061056f90611405565b9150506104c9565b50600086602001515167ffffffffffffffff81111561059857610598610c8b565b6040519080825280602002602001820160405280156105de57816020015b6040805180820190915260008152606060208201528152602001906001900390816105b65790505b50905060005b8760200151518110156106cc57600088602001518281518110610609576106096113ef565b6020026020010151905060008082600001516001600160a01b03168360200151846040015160405161063b919061142c565b60006040518083038185875af1925050503d8060008114610678576040519150601f19603f3d011682016040523d82523d6000602084013e61067d565b606091505b509150915060405180604001604052808315158152602001828152508585815181106106ab576106ab6113ef565b602002602001018190525050505080806106c490611405565b9150506105e4565b5060005b875151811015610869576000886000015182815181106106f2576106f26113ef565b602090810291909101015180516040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa15801561074a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076e9190611212565b9050801561085457815160015460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b3906044016020604051808303816000875af11580156107ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ee919061122b565b506001546040516311f9fbc960e21b8152306004820152602481018390526001600160a01b03909116906347e7ef2490604401600060405180830381600087803b15801561083b57600080fd5b505af115801561084f573d6000803e3d6000fd5b505050505b5050808061086190611405565b9150506106d0565b506000546040516001600160a01b03909116907ffc005328e90a82ea799fdcfa5d775a9207abe86f05f8eb654406ed193a7a7f02906108a9908490611448565b60405180910390a250505050505050565b600081602001511161090e5760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610147565b8060600151516041146109635760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e67746800000000000000006044820152606401610147565b805160608083015160208082015160408084015193909401519186015184870151855163d505accf60e01b815233600482015230602482015260448101929092526064820152600092831a6084820181905260a4820183905260c4820185905294519193926001600160a01b0387169263d505accf9260e480820193929182900301818387803b1580156109f657600080fd5b505af1158015610a0a573d6000803e3d6000fd5b5050505060208501516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038516906323b872dd906064016020604051808303816000875af1158015610a67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8b919061122b565b50600154602086015160405163095ea7b360e01b81526001600160a01b03928316600482015260248101919091529085169063095ea7b3906044016020604051808303816000875af1158015610ae5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b09919061122b565b5060015460208601516040516311f9fbc960e21b815233600482015260248101919091526001600160a01b03909116906347e7ef2490604401600060405180830381600087803b158015610b5c57600080fd5b505af1158015610b70573d6000803e3d6000fd5b50505050856000015185600001516001600160a01b0316886001600160a01b03167f318b9af78ddb94362003f2f344355e538ac82da78d7d01190bad73a0430a092b88602001518a60200151604051610bca92919061129d565b60405180910390a450505050505050565b6000546001600160a01b03163314610c245760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610147565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b80356001600160a01b0381168114610c8657600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610cc457610cc4610c8b565b60405290565b6040516060810167ffffffffffffffff81118282101715610cc457610cc4610c8b565b6040516080810167ffffffffffffffff81118282101715610cc457610cc4610c8b565b604051601f8201601f1916810167ffffffffffffffff81118282101715610d3957610d39610c8b565b604052919050565b600067ffffffffffffffff821115610d5b57610d5b610c8b565b5060051b60200190565b600082601f830112610d7657600080fd5b813567ffffffffffffffff811115610d9057610d90610c8b565b610da3601f8201601f1916602001610d10565b818152846020838601011115610db857600080fd5b816020850160208301376000918101602001919091529392505050565b600060408284031215610de757600080fd5b610def610ca1565b90508135815260208083013567ffffffffffffffff80821115610e1157600080fd5b818501915085601f830112610e2557600080fd5b8135610e38610e3382610d41565b610d10565b81815260059190911b83018401908481019088831115610e5757600080fd5b8585015b83811015610e8f57803585811115610e735760008081fd5b610e818b89838a0101610d65565b845250918601918601610e5b565b50808688015250505050505092915050565b600060408284031215610eb357600080fd5b610ebb610ca1565b9050610ec682610c6f565b81526020820135602082015292915050565b600080600060808486031215610eed57600080fd5b610ef684610c6f565b9250602084013567ffffffffffffffff811115610f1257600080fd5b610f1e86828701610dd5565b925050610f2e8560408601610ea1565b90509250925092565b600082601f830112610f4857600080fd5b81356020610f58610e3383610d41565b82815260059290921b84018101918181019086841115610f7757600080fd5b8286015b8481101561100a57803567ffffffffffffffff80821115610f9c5760008081fd5b908801906060828b03601f1901811315610fb65760008081fd5b610fbe610cca565b610fc9888501610c6f565b815260408481013589830152918401359183831115610fe85760008081fd5b610ff68d8a85880101610d65565b908201528652505050918301918301610f7b565b509695505050505050565b600080604080848603121561102957600080fd5b833567ffffffffffffffff8082111561104157600080fd5b818601915082828803121561105557600080fd5b61105d610ca1565b82358281111561106c57600080fd5b8301601f8101891361107d57600080fd5b8035602061108d610e3383610d41565b82815260069290921b8301810191818101908c8411156110ac57600080fd5b938201935b838510156110d2576110c38d86610ea1565b825293880193908201906110b1565b855250858101359650848711156110e857600080fd5b6110f48b888801610f37565b84820152929750505086013592508083111561110f57600080fd5b505061111d85828601610d65565b9150509250929050565b60008060006060848603121561113c57600080fd5b61114584610c6f565b9250602084013567ffffffffffffffff8082111561116257600080fd5b61116e87838801610dd5565b9350604086013591508082111561118457600080fd5b908501906080828803121561119857600080fd5b6111a0610ced565b6111a983610c6f565b815260208301356020820152604083013560408201526060830135828111156111d157600080fd5b6111dd89828601610d65565b6060830152508093505050509250925092565b60006020828403121561120257600080fd5b61120b82610c6f565b9392505050565b60006020828403121561122457600080fd5b5051919050565b60006020828403121561123d57600080fd5b8151801515811461120b57600080fd5b60005b83811015611268578181015183820152602001611250565b50506000910152565b6000815180845261128981602086016020860161124d565b601f01601f19169290920160200192915050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b828110156112f957605f198887030184526112e7868351611271565b955092840192908401906001016112cb565b509398975050505050505050565b6000602080835260608084018551604080858801528282518085526080890191508684019450600093505b8084101561136457845180516001600160a01b0316835287015187830152938601936001939093019290820190611332565b5085890151601f198983038101848b015281518084529188019550935081870190600581901b8301880160005b828110156113df5784820387018452875180516001600160a01b031683528a8101518b8401528601518683018a90526113cc8a840182611271565b988b0198948b0194925050600101611391565b509b9a5050505050505050505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161142557634e487b7160e01b600052601160045260246000fd5b5060010190565b6000825161143e81846020870161124d565b9190910192915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156114b057888303603f19018552815180511515845287015187840187905261149d87850182611271565b958801959350509086019060010161146f565b50909897505050505050505056fea2646970667358221220188e6dfd07515dd090afe10493889e00022b325971b66f04653a229d90f886a564736f6c63430008110033";

type VaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault__factory extends ContractFactory {
  constructor(...args: VaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _lmgr: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_lmgr, overrides || {});
  }
  override deploy(
    _lmgr: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_lmgr, overrides || {}) as Promise<
      Vault & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Vault__factory {
    return super.connect(runner) as Vault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new Interface(_abi) as VaultInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Vault {
    return new Contract(address, _abi, runner) as unknown as Vault;
  }
}
