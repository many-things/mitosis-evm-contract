import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Vault, VaultInterface } from "../Vault";
type VaultConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Vault__factory extends ContractFactory {
    constructor(...args: VaultConstructorParams);
    deploy(_lmgr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Vault>;
    getDeployTransaction(_lmgr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Vault;
    connect(signer: Signer): Vault__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516117bb3803806117bb83398101604081905261002f91610095565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100c5565b6000602082840312156100a757600080fd5b81516001600160a01b03811681146100be57600080fd5b9392505050565b6116e7806100d46000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a947edd11161005b578063a947edd1146100f7578063b3a2fe981461010a578063f2fde38b1461011d578063f84aa8e01461013057600080fd5b806314a7aa6c1461008d5780635f5e2997146100bc5780638da5cb5b146100d1578063a4d5e505146100e4575b600080fd5b6001546100a0906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100cf6100ca366004610fa8565b610143565b005b6000546100a0906001600160a01b031681565b6100cf6100f23660046110e3565b610154565b6100cf61010536600461127d565b6106b2565b6100cf610118366004611301565b6109df565b6100cf61012b366004611374565b6109eb565b6100cf61013e366004611396565b610a7f565b61014f33848484610a7f565b505050565b60208181015160408084015160608501519151600092831a9491929160019161017f91899101611455565b60408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156101dd573d6000803e3d6000fd5b5050604051601f1901516000549092506001600160a01b0380841691161490506102425760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064015b60405180910390fd5b60005b865151811015610370576000876000015182815181106102675761026761153d565b6020908102919091018101516001549181015160405163095ea7b360e01b81526001600160a01b039093166004840181905260248401919091529092509063095ea7b3906044016020604051808303816000875af11580156102cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f19190611553565b50600154602082015160405163f3fef3a360e01b815230600482015260248101919091526001600160a01b039091169063f3fef3a390604401600060405180830381600087803b15801561034457600080fd5b505af1158015610358573d6000803e3d6000fd5b5050505050808061036890611575565b915050610245565b5060008660200151516001600160401b0381111561039057610390610d84565b6040519080825280602002602001820160405280156103d657816020015b6040805180820190915260008152606060208201528152602001906001900390816103ae5790505b50905060005b8760200151518110156104c4576000886020015182815181106104015761040161153d565b6020026020010151905060008082600001516001600160a01b031683602001518460400151604051610433919061159c565b60006040518083038185875af1925050503d8060008114610470576040519150601f19603f3d011682016040523d82523d6000602084013e610475565b606091505b509150915060405180604001604052808315158152602001828152508585815181106104a3576104a361153d565b602002602001018190525050505080806104bc90611575565b9150506103dc565b5060005b875151811015610661576000886000015182815181106104ea576104ea61153d565b602090810291909101015180516040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610542573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056691906115b8565b9050801561064c57815160015460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b3906044016020604051808303816000875af11580156105c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e69190611553565b506001546040516311f9fbc960e21b8152306004820152602481018390526001600160a01b03909116906347e7ef2490604401600060405180830381600087803b15801561063357600080fd5b505af1158015610647573d6000803e3d6000fd5b505050505b5050808061065990611575565b9150506104c8565b506000546040516001600160a01b03909116907ffc005328e90a82ea799fdcfa5d775a9207abe86f05f8eb654406ed193a7a7f02906106a19084906115d1565b60405180910390a250505050505050565b60008160200151116107065760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610239565b80606001515160411461075b5760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e67746800000000000000006044820152606401610239565b805160608083015160208082015160408084015193909401519186015184870151855163d505accf60e01b81526001600160a01b038c8116600483015230602483015260448201939093526064810191909152600093841a6084820181905260a4820184905260c4820186905295519294939187169263d505accf9260e48084019391929182900301818387803b1580156107f557600080fd5b505af1158015610809573d6000803e3d6000fd5b5050505060208501516040516323b872dd60e01b81526001600160a01b038a811660048301523060248301526044820192909252908516906323b872dd906064016020604051808303816000875af1158015610869573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088d9190611553565b50600154602086015160405163095ea7b360e01b81526001600160a01b03928316600482015260248101919091529085169063095ea7b3906044016020604051808303816000875af11580156108e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090b9190611553565b5060015460208601516040516311f9fbc960e21b81526001600160a01b038b8116600483015260248201929092529116906347e7ef2490604401600060405180830381600087803b15801561095f57600080fd5b505af1158015610973573d6000803e3d6000fd5b50505050856000015185600001516001600160a01b0316886001600160a01b03167f318b9af78ddb94362003f2f344355e538ac82da78d7d01190bad73a0430a092b88602001518a602001516040516109cd929190611647565b60405180910390a45050505050505050565b61014f338484846106b2565b6000546001600160a01b03163314610a345760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610239565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6000816020015111610ad35760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610239565b8051604051636eb1769f60e11b81526001600160a01b0386811660048301523060248301526000919083169063dd62ed3e90604401602060405180830381865afa158015610b25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4991906115b8565b90508260200151811015610b985760405162461bcd60e51b8152602060048201526016602482015275696e73756666696369656e7420616c6c6f77616e636560501b6044820152606401610239565b60208301516040516323b872dd60e01b81526001600160a01b0388811660048301523060248301526044820192909252908316906323b872dd906064016020604051808303816000875af1158015610bf4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c189190611553565b50600154602084015160405163095ea7b360e01b81526001600160a01b03928316600482015260248101919091529083169063095ea7b3906044016020604051808303816000875af1158015610c72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c969190611553565b5060015460208401516040516311f9fbc960e21b81526001600160a01b03898116600483015260248201929092529116906347e7ef2490604401600060405180830381600087803b158015610cea57600080fd5b505af1158015610cfe573d6000803e3d6000fd5b50505050836000015183600001516001600160a01b0316866001600160a01b03167f318b9af78ddb94362003f2f344355e538ac82da78d7d01190bad73a0430a092b86602001518860200151604051610d58929190611647565b60405180910390a4505050505050565b80356001600160a01b0381168114610d7f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715610dbc57610dbc610d84565b60405290565b604051606081016001600160401b0381118282101715610dbc57610dbc610d84565b604051601f8201601f191681016001600160401b0381118282101715610e0c57610e0c610d84565b604052919050565b60006001600160401b03821115610e2d57610e2d610d84565b5060051b60200190565b600082601f830112610e4857600080fd5b81356001600160401b03811115610e6157610e61610d84565b610e74601f8201601f1916602001610de4565b818152846020838601011115610e8957600080fd5b816020850160208301376000918101602001919091529392505050565b600060408284031215610eb857600080fd5b610ec0610d9a565b9050813581526020808301356001600160401b0380821115610ee157600080fd5b818501915085601f830112610ef557600080fd5b8135610f08610f0382610e14565b610de4565b81815260059190911b83018401908481019088831115610f2757600080fd5b8585015b83811015610f5f57803585811115610f435760008081fd5b610f518b89838a0101610e37565b845250918601918601610f2b565b50808688015250505050505092915050565b600060408284031215610f8357600080fd5b610f8b610d9a565b9050610f9682610d68565b81526020820135602082015292915050565b600080600060808486031215610fbd57600080fd5b610fc684610d68565b925060208401356001600160401b03811115610fe157600080fd5b610fed86828701610ea6565b925050610ffd8560408601610f71565b90509250925092565b600082601f83011261101757600080fd5b81356020611027610f0383610e14565b82815260059290921b8401810191818101908684111561104657600080fd5b8286015b848110156110d85780356001600160401b038082111561106a5760008081fd5b908801906060828b03601f19018113156110845760008081fd5b61108c610dc2565b611097888501610d68565b8152604084810135898301529184013591838311156110b65760008081fd5b6110c48d8a85880101610e37565b90820152865250505091830191830161104a565b509695505050505050565b60008060408084860312156110f757600080fd5b83356001600160401b038082111561110e57600080fd5b818601915082828803121561112257600080fd5b61112a610d9a565b82358281111561113957600080fd5b8301601f8101891361114a57600080fd5b8035602061115a610f0383610e14565b82815260069290921b8301810191818101908c84111561117957600080fd5b938201935b8385101561119f576111908d86610f71565b8252938801939082019061117e565b855250858101359650848711156111b557600080fd5b6111c18b888801611006565b8482015292975050508601359250808311156111dc57600080fd5b50506111ea85828601610e37565b9150509250929050565b60006080828403121561120657600080fd5b604051608081016001600160401b03828210818311171561122957611229610d84565b8160405282935061123985610d68565b83526020850135602084015260408501356040840152606085013591508082111561126357600080fd5b5061127085828601610e37565b6060830152505092915050565b6000806000806080858703121561129357600080fd5b61129c85610d68565b93506112aa60208601610d68565b925060408501356001600160401b03808211156112c657600080fd5b6112d288838901610ea6565b935060608701359150808211156112e857600080fd5b506112f5878288016111f4565b91505092959194509250565b60008060006060848603121561131657600080fd5b61131f84610d68565b925060208401356001600160401b038082111561133b57600080fd5b61134787838801610ea6565b9350604086013591508082111561135d57600080fd5b5061136a868287016111f4565b9150509250925092565b60006020828403121561138657600080fd5b61138f82610d68565b9392505050565b60008060008060a085870312156113ac57600080fd5b6113b585610d68565b93506113c360208601610d68565b925060408501356001600160401b038111156113de57600080fd5b6113ea87828801610ea6565b9250506113fa8660608701610f71565b905092959194509250565b60005b83811015611420578181015183820152602001611408565b50506000910152565b60008151808452611441816020860160208601611405565b601f01601f19169290920160200192915050565b6000602080835260608084018551604080858801528282518085526080890191508684019450600093505b808410156114b257845180516001600160a01b0316835287015187830152938601936001939093019290820190611480565b5085890151601f198983038101848b015281518084529188019550935081870190600581901b8301880160005b8281101561152d5784820387018452875180516001600160a01b031683528a8101518b8401528601518683018a905261151a8a840182611429565b988b0198948b01949250506001016114df565b509b9a5050505050505050505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561156557600080fd5b8151801515811461138f57600080fd5b60006001820161159557634e487b7160e01b600052601160045260246000fd5b5060010190565b600082516115ae818460208701611405565b9190910192915050565b6000602082840312156115ca57600080fd5b5051919050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561163957888303603f19018552815180511515845287015187840187905261162687850182611429565b95880195935050908601906001016115f8565b509098975050505050505050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b828110156116a357605f19888703018452611691868351611429565b95509284019290840190600101611675565b50939897505050505050505056fea26469706673582212209f3a4b694ff1a4f8d4722f8c87b71df8a3b5d4f47de41e937be58e66d8515adf64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract Liquidity";
            readonly name: "_lmgr";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returndata";
                readonly type: "bytes";
            }];
            readonly indexed: false;
            readonly internalType: "struct Vault.ExecuteResult[]";
            readonly name: "results";
            readonly type: "tuple[]";
        }];
        readonly name: "ExecuteOperation";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "opId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "opArgs";
            readonly type: "bytes[]";
        }];
        readonly name: "InitOperation";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Vault.ExecuteFund[]";
                readonly name: "funds";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct Vault.ExecuteCalldata[]";
                readonly name: "inner";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct Vault.ExecutePayload";
            readonly name: "_payload";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lmgr";
        readonly outputs: readonly [{
            readonly internalType: "contract Liquidity";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "args";
                readonly type: "bytes[]";
            }];
            readonly internalType: "struct Operation";
            readonly name: "_op";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Token";
            readonly name: "_token";
            readonly type: "tuple";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "args";
                readonly type: "bytes[]";
            }];
            readonly internalType: "struct Operation";
            readonly name: "_op";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct TokenPermit";
            readonly name: "_token";
            readonly type: "tuple";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "args";
                readonly type: "bytes[]";
            }];
            readonly internalType: "struct Operation";
            readonly name: "_op";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct TokenPermit";
            readonly name: "_token";
            readonly type: "tuple";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "args";
                readonly type: "bytes[]";
            }];
            readonly internalType: "struct Operation";
            readonly name: "_op";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Token";
            readonly name: "_token";
            readonly type: "tuple";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): VaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Vault;
}
export {};
