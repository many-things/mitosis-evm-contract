import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Bond, BondInterface } from "../Bond";
type BondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Bond__factory extends ContractFactory {
    constructor(...args: BondConstructorParams);
    deploy(_token: PromiseOrValue<string>, _unbondingPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Bond>;
    getDeployTransaction(_token: PromiseOrValue<string>, _unbondingPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Bond;
    connect(signer: Signer): Bond__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610f5f380380610f5f83398101604081905261002f91610100565b600180546001600160a01b0319166001600160a01b038416179055600281905561005a600033610061565b505061013a565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166100fc576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100bb3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000806040838503121561011357600080fd5b82516001600160a01b038116811461012a57600080fd5b6020939093015192949293505050565b610e16806101496000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80635da62062116100a2578063a217fddf11610071578063a217fddf14610281578063ca2221c114610289578063d547741f146102a9578063d9c3813f146102bc578063fc0c546a146102dc57600080fd5b80635da620621461023f5780636cf6d6751461025257806391d148541461025b5780639940686e1461026e57600080fd5b80632f2ff15d116100e95780632f2ff15d146101a957806336568abe146101bc578063379607f5146101cf5780634e71d92d146101e25780635c223586146101ea57600080fd5b806301ffc9a71461011b578063248a9ca31461014357806327de9e321461017457806327e235e314610189575b600080fd5b61012e610129366004610aaf565b610307565b60405190151581526020015b60405180910390f35b610166610151366004610ad9565b60009081526020819052604090206001015490565b60405190815260200161013a565b610187610182366004610ad9565b61033e565b005b610166610197366004610b0e565b60036020526000908152604090205481565b6101876101b7366004610b29565b6103e1565b6101876101ca366004610b29565b61040b565b6101876101dd366004610ad9565b61048e565b6101876105f6565b6102246101f8366004610b55565b600460209081526000928352604080842090915290825290208054600182015460029092015490919083565b6040805193845260208401929092529082015260600161013a565b61018761024d366004610b95565b610603565b61016660025481565b61012e610269366004610b29565b6106a9565b61018761027c366004610ad9565b6106d2565b610166600081565b610166610297366004610b0e565b60066020526000908152604090205481565b6101876102b7366004610b29565b610775565b6101666102ca366004610b0e565b60056020526000908152604090205481565b6001546102ef906001600160a01b031681565b6040516001600160a01b03909116815260200161013a565b60006001600160e01b03198216637965db0b60e01b148061033857506301ffc9a760e01b6001600160e01b03198316145b92915050565b336000908152600360205260408120805483929061035d908490610c6f565b909155505033600090815260066020526040812080549182919061038083610c82565b91905055506040518060600160405280838152602001428152602001600254426103aa9190610c9b565b9052336000908152600460209081526040808320948352938152908390208251815590820151600182015591015160029091015550565b6000828152602081905260409020600101546103fc8161079a565b61040683836107a7565b505050565b6001600160a01b03811633146104805760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61048a828261082b565b5050565b33600090815260056020908152604080832054600690925282205482906104c19085906104bc908590610c6f565b610890565b905060005b8181101561055557336000908152600460205260408120816104e88487610c9b565b81526020019081526020016000206040518060600160405290816000820154815260200160018201548152602001600282015481525050905042816040015111156105335750610555565b805161053f9086610c9b565b945050808061054d90610c82565b9150506104c6565b3360009081526005602052604081208054839290610574908490610c9b565b909155505060015460405163a9059cbb60e01b8152336004820152602481018690526001600160a01b039091169063a9059cbb906044016020604051808303816000875af11580156105ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ee9190610cae565b505050505050565b61060160001961048e565b565b60208101516040808301516060840151600154835163d505accf60e01b81523360048201523060248201526044810189905260648101889052600092831a6084820181905260a4820187905260c4820185905294519495946001600160a01b039092169263d505accf9260e48084019382900301818387803b15801561068857600080fd5b505af115801561069c573d6000803e3d6000fd5b505050506105ee866106d2565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6001546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610729573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074d9190610cae565b50336000908152600360205260408120805483929061076d908490610c9b565b909155505050565b6000828152602081905260409020600101546107908161079a565b610406838361082b565b6107a481336108a8565b50565b6107b182826106a9565b61048a576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556107e73390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61083582826106a9565b1561048a576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600081831061089f57816108a1565b825b9392505050565b6108b282826106a9565b61048a576108bf81610901565b6108ca836020610913565b6040516020016108db929190610cf4565b60408051601f198184030181529082905262461bcd60e51b825261047791600401610d69565b60606103386001600160a01b03831660145b60606000610922836002610d9c565b61092d906002610c9b565b67ffffffffffffffff81111561094557610945610b7f565b6040519080825280601f01601f19166020018201604052801561096f576020820181803683370190505b509050600360fc1b8160008151811061098a5761098a610db3565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106109b9576109b9610db3565b60200101906001600160f81b031916908160001a90535060006109dd846002610d9c565b6109e8906001610c9b565b90505b6001811115610a60576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610a1c57610a1c610db3565b1a60f81b828281518110610a3257610a32610db3565b60200101906001600160f81b031916908160001a90535060049490941c93610a5981610dc9565b90506109eb565b5083156108a15760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610477565b600060208284031215610ac157600080fd5b81356001600160e01b0319811681146108a157600080fd5b600060208284031215610aeb57600080fd5b5035919050565b80356001600160a01b0381168114610b0957600080fd5b919050565b600060208284031215610b2057600080fd5b6108a182610af2565b60008060408385031215610b3c57600080fd5b82359150610b4c60208401610af2565b90509250929050565b60008060408385031215610b6857600080fd5b610b7183610af2565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600080600060608486031215610baa57600080fd5b8335925060208401359150604084013567ffffffffffffffff80821115610bd057600080fd5b818601915086601f830112610be457600080fd5b813581811115610bf657610bf6610b7f565b604051601f8201601f19908116603f01168101908382118183101715610c1e57610c1e610b7f565b81604052828152896020848701011115610c3757600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b634e487b7160e01b600052601160045260246000fd5b8181038181111561033857610338610c59565b600060018201610c9457610c94610c59565b5060010190565b8082018082111561033857610338610c59565b600060208284031215610cc057600080fd5b815180151581146108a157600080fd5b60005b83811015610ceb578181015183820152602001610cd3565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610d2c816017850160208801610cd0565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610d5d816028840160208801610cd0565b01602801949350505050565b6020815260008251806020840152610d88816040850160208701610cd0565b601f01601f19169190910160400192915050565b808202811582820484141761033857610338610c59565b634e487b7160e01b600052603260045260246000fd5b600081610dd857610dd8610c59565b50600019019056fea2646970667358221220750f41ba62f45324289590a09f6aee147c24e331eb4f8f4c40273c6f22b36b9964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_unbondingPeriod";
            readonly type: "uint256";
        }];
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
        readonly inputs: readonly [{
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
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }];
        readonly name: "bond";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "bond";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_steps";
            readonly type: "uint256";
        }];
        readonly name: "claim";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claim";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "lastClaimedIndex";
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
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "lastUnbondingIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "unbond";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unbondingPeriod";
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
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "unbondings";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "createdAt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "claimableAt";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Bond;
}
export {};
