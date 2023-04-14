import { Signer, ContractFactory, ContractTransactionResponse, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { LiquidityManager, LiquidityManagerInterface } from "../LiquidityManager";
type LiquidityManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiquidityManager__factory extends ContractFactory {
    constructor(...args: LiquidityManagerConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<LiquidityManager & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): LiquidityManager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c600033610021565b6100c0565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166100bc576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561007b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b61107f806100cf6000396000f3fe6080604052600436106101015760003560e01c80633c56541711610095578063c23f001f11610064578063c23f001f146102bd578063c50d6dd9146102f5578063d0e30db014610329578063d547741f14610331578063f340fa011461035157600080fd5b80633c565417146102485780635c7a2a801461026857806391d1485414610288578063a217fddf146102a857600080fd5b80632a3cafa7116100d15780632a3cafa7146101c85780632f1b61b7146101e85780632f2ff15d1461020857806336568abe1461022857600080fd5b8062dac8dd1461011557806301ffc9a71461013557806318c0bbe51461016a578063248a9ca31461018a57600080fd5b366101105761010e610364565b005b600080fd5b34801561012157600080fd5b5061010e610130366004610cfe565b61036f565b34801561014157600080fd5b50610155610150366004610d4c565b6104f5565b60405190151581526020015b60405180910390f35b34801561017657600080fd5b5061010e610185366004610dcd565b61052c565b34801561019657600080fd5b506101ba6101a5366004610e01565b60009081526020819052604090206001015490565b604051908152602001610161565b3480156101d457600080fd5b5061010e6101e3366004610dcd565b61066a565b3480156101f457600080fd5b5061010e610203366004610e1a565b610731565b34801561021457600080fd5b5061010e610223366004610e57565b61073e565b34801561023457600080fd5b5061010e610243366004610e57565b610763565b34801561025457600080fd5b5061010e610263366004610e7a565b6107e6565b34801561027457600080fd5b5061010e610283366004610e7a565b61081a565b34801561029457600080fd5b506101556102a3366004610e57565b610824565b3480156102b457600080fd5b506101ba600081565b3480156102c957600080fd5b506101ba6102d8366004610e96565b600160209081526000928352604080842090915290825290205481565b34801561030157600080fd5b506101ba7fb90e9995c6170fff8ea03e9ad6919878e483770c237f1a6f330ceaa7112b344a81565b61010e610364565b34801561033d57600080fd5b5061010e61034c366004610e57565b61084d565b61010e61035f366004610ec0565b610872565b61036d33610872565b565b600080600061039584606001516020810151604082015160609092015160001a92909190565b865160208801516040808a0151905163d505accf60e01b81523360048201523060248201526044810192909252606482015260ff8516608482015260a4810184905260c481018390529396509194509250906001600160a01b0382169063d505accf9060e401600060405180830381600087803b15801561041557600080fd5b505af1158015610429573d6000803e3d6000fd5b5050505060208501516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038216906323b872dd906064016020604051808303816000875af1158015610486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104aa9190610edb565b506020808601516001600160a01b0380891660009081526001845260408082208a5190931682529190935282208054919290916104e8908490610f13565b9091555050505050505050565b60006001600160e01b03198216637965db0b60e01b148061052657506301ffc9a760e01b6001600160e01b03198316145b92915050565b7fb90e9995c6170fff8ea03e9ad6919878e483770c237f1a6f330ceaa7112b344a610556816108ad565b60208083015133600090815260018352604080822086516001600160a01b0316835290935291822080549192909161058f908490610f26565b909155505081516001600160a01b0316600019016105e65760208201516040516001600160a01b0385169180156108fc02916000818181858888f193505050501580156105e0573d6000803e3d6000fd5b50505050565b8151602083015160405163a9059cbb60e01b81526001600160a01b03868116600483015260248201929092529082169063a9059cbb906044016020604051808303816000875af115801561063e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106629190610edb565b50505b505050565b805160208201516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038216906323b872dd906064016020604051808303816000875af11580156106c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e99190610edb565b506020808301516001600160a01b03808616600090815260018452604080822087519093168252919093528220805491929091610727908490610f13565b9091555050505050565b61073b338261036f565b50565b600082815260208190526040902060010154610759816108ad565b61066583836108b7565b6001600160a01b03811633146107d85760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6107e2828261093b565b5050565b7fb90e9995c6170fff8ea03e9ad6919878e483770c237f1a6f330ceaa7112b344a610810816108ad565b6107e2338361052c565b61073b338261066a565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600082815260208190526040902060010154610868816108ad565b610665838361093b565b6001600160a01b0381166000908152600160208181526040808420928452919052812080543492906108a5908490610f13565b909155505050565b61073b81336109a0565b6108c18282610824565b6107e2576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556108f73390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6109458282610824565b156107e2576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6109aa8282610824565b6107e2576109b7816109f9565b6109c2836020610a0b565b6040516020016109d3929190610f5d565b60408051601f198184030181529082905262461bcd60e51b82526107cf91600401610fd2565b60606105266001600160a01b03831660145b60606000610a1a836002611005565b610a25906002610f13565b67ffffffffffffffff811115610a3d57610a3d610bca565b6040519080825280601f01601f191660200182016040528015610a67576020820181803683370190505b509050600360fc1b81600081518110610a8257610a8261101c565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610ab157610ab161101c565b60200101906001600160f81b031916908160001a9053506000610ad5846002611005565b610ae0906001610f13565b90505b6001811115610b58576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610b1457610b1461101c565b1a60f81b828281518110610b2a57610b2a61101c565b60200101906001600160f81b031916908160001a90535060049490941c93610b5181611032565b9050610ae3565b508315610ba75760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016107cf565b9392505050565b80356001600160a01b0381168114610bc557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610c0357610c03610bca565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610c3257610c32610bca565b604052919050565b600060808284031215610c4c57600080fd5b610c54610be0565b9050610c5f82610bae565b81526020808301358183015260408301356040830152606083013567ffffffffffffffff80821115610c9057600080fd5b818501915085601f830112610ca457600080fd5b813581811115610cb657610cb6610bca565b610cc8601f8201601f19168501610c09565b91508082528684828501011115610cde57600080fd5b808484018584013760008482840101525080606085015250505092915050565b60008060408385031215610d1157600080fd5b610d1a83610bae565b9150602083013567ffffffffffffffff811115610d3657600080fd5b610d4285828601610c3a565b9150509250929050565b600060208284031215610d5e57600080fd5b81356001600160e01b031981168114610ba757600080fd5b600060408284031215610d8857600080fd5b6040516040810181811067ffffffffffffffff82111715610dab57610dab610bca565b604052905080610dba83610bae565b8152602083013560208201525092915050565b60008060608385031215610de057600080fd5b610de983610bae565b9150610df88460208501610d76565b90509250929050565b600060208284031215610e1357600080fd5b5035919050565b600060208284031215610e2c57600080fd5b813567ffffffffffffffff811115610e4357600080fd5b610e4f84828501610c3a565b949350505050565b60008060408385031215610e6a57600080fd5b82359150610df860208401610bae565b600060408284031215610e8c57600080fd5b610ba78383610d76565b60008060408385031215610ea957600080fd5b610eb283610bae565b9150610df860208401610bae565b600060208284031215610ed257600080fd5b610ba782610bae565b600060208284031215610eed57600080fd5b81518015158114610ba757600080fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561052657610526610efd565b8181038181111561052657610526610efd565b60005b83811015610f54578181015183820152602001610f3c565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610f95816017850160208801610f39565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610fc6816028840160208801610f39565b01602801949350505050565b6020815260008251806020840152610ff1816040850160208701610f39565b601f01601f19169190910160400192915050565b808202811582820484141761052657610526610efd565b634e487b7160e01b600052603260045260246000fd5b60008161104157611041610efd565b50600019019056fea26469706673582212200b585e86475a9eea5705189938e4e9973aefcbc31aeceeae82e35ee4528d810364736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "GATEWAY_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balances";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_depositor";
            readonly type: "address";
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
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_depositor";
            readonly type: "address";
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
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_depositor";
            readonly type: "address";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
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
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): LiquidityManagerInterface;
    static connect(address: string, runner?: ContractRunner | null): LiquidityManager;
}
export {};