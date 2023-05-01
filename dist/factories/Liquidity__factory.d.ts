import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Liquidity, LiquidityInterface } from "../Liquidity";
type LiquidityConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Liquidity__factory extends ContractFactory {
    constructor(...args: LiquidityConstructorParams);
    deploy(_denom: PromiseOrValue<string>, _token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Liquidity>;
    getDeployTransaction(_denom: PromiseOrValue<string>, _token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Liquidity;
    connect(signer: Signer): Liquidity__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b5060405162001ae838038062001ae883398101604081905262000034916200025d565b81826040516020016200004891906200032a565b60408051601f1981840301815291905260126000620000688482620003eb565b506001620000778382620003eb565b5060ff81166080524660a0526200008d620000c3565b60c0525050600780546001600160a01b0319166001600160a01b03841617905550620000bb6000336200015f565b505062000535565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000f79190620004b7565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16620002005760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001bf3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002375781810151838201526020016200021d565b50506000910152565b80516001600160a01b03811681146200025857600080fd5b919050565b600080604083850312156200027157600080fd5b82516001600160401b03808211156200028957600080fd5b818501915085601f8301126200029e57600080fd5b815181811115620002b357620002b362000204565b604051601f8201601f19908116603f01168101908382118183101715620002de57620002de62000204565b81604052828152886020848701011115620002f857600080fd5b6200030b8360208301602088016200021a565b8096505050505050620003216020840162000240565b90509250929050565b674d49544f5f4c502d60c01b8152600082516200034f8160088501602087016200021a565b9190910160080192915050565b600181811c908216806200037157607f821691505b6020821081036200039257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003e657600081815260208120601f850160051c81016020861015620003c15750805b601f850160051c820191505b81811015620003e257828155600101620003cd565b5050505b505050565b81516001600160401b0381111562000407576200040762000204565b6200041f816200041884546200035c565b8462000398565b602080601f8311600181146200045757600084156200043e5750858301515b600019600386901b1c1916600185901b178555620003e2565b600085815260208120601f198616915b82811015620004885788860151825594840194600190910190840162000467565b5085821015620004a75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004c7816200035c565b60018281168015620004e25760018114620004f85762000529565b60ff198416875282151583028701945062000529565b8760005260208060002060005b85811015620005205781548a82015290840190820162000505565b50505082870194505b50929695505050505050565b60805160a05160c05161158362000565600039600061068d015260006106580152600061024201526115836000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806370a08231116100de578063a9059cbb11610097578063d547741f11610071578063d547741f14610367578063dd62ed3e1461037a578063f3fef3a3146103a5578063fc0c546a146103b857600080fd5b8063a9059cbb1461031a578063c50d6dd91461032d578063d505accf1461035457600080fd5b806370a08231146102a45780637ecebe00146102c457806391d14854146102e457806395d89b41146102f75780639e48ff5a146102ff578063a217fddf1461031257600080fd5b8063248a9ca311610130578063248a9ca3146102075780632f2ff15d1461022a578063313ce5671461023d5780633644e5151461027657806336568abe1461027e57806347e7ef241461029157600080fd5b806301ffc9a71461017857806306fdde03146101a0578063095ea7b3146101b55780630bd0ca9a146101c857806318160ddd146101dd57806323b872dd146101f4575b600080fd5b61018b610186366004611052565b6103e3565b60405190151581526020015b60405180910390f35b6101a861041a565b60405161019791906110a0565b61018b6101c33660046110ef565b6104a8565b6101db6101d636600461112f565b610514565b005b6101e660025481565b604051908152602001610197565b61018b610202366004611204565b61054a565b6101e6610215366004611240565b60009081526006602052604090206001015490565b6101db610238366004611259565b61062a565b6102647f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610197565b6101e6610654565b6101db61028c366004611259565b6106af565b6101db61029f3660046110ef565b610732565b6101e66102b2366004611285565b60036020526000908152604090205481565b6101e66102d2366004611285565b60056020526000908152604090205481565b61018b6102f2366004611259565b6107b8565b6101a86107e3565b6101db61030d36600461112f565b6107f0565b6101e6600081565b61018b6103283660046110ef565b610897565b6101e67fb90e9995c6170fff8ea03e9ad6919878e483770c237f1a6f330ceaa7112b344a81565b6101db6103623660046112a0565b6108fd565b6101db610375366004611259565b610b41565b6101e6610388366004611313565b600460209081526000928352604080842090915290825290205481565b6101db6103b33660046110ef565b610b66565b6007546103cb906001600160a01b031681565b6040516001600160a01b039091168152602001610197565b60006001600160e01b03198216637965db0b60e01b148061041457506301ffc9a760e01b6001600160e01b03198316145b92915050565b600080546104279061133d565b80601f01602080910402602001604051908101604052809291908181526020018280546104539061133d565b80156104a05780601f10610475576101008083540402835291602001916104a0565b820191906000526020600020905b81548152906001019060200180831161048357829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906105039086815260200190565b60405180910390a350600192915050565b60208101516040820151606083015160001a9190610537333088888787876108fd565b6105418787610b66565b50505050505050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146105a657610581838261138d565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906105ce90849061138d565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061152e833981519152906106179087815260200190565b60405180910390a3506001949350505050565b60008281526006602052604090206001015461064581610bf4565b61064f8383610c01565b505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461068a57610685610c87565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b03811633146107245760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61072e8282610d21565b5050565b6007546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610789573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ad91906113a0565b5061072e8282610d88565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600180546104279061133d565b60208101516040808301516060840151600754835163d505accf60e01b81523360048201523060248201526044810189905260648101889052600092831a6084820181905260a4820187905260c4820185905294519495946001600160a01b039092169263d505accf9260e48084019382900301818387803b15801561087557600080fd5b505af1158015610889573d6000803e3d6000fd5b505050506105418787610732565b336000908152600360205260408120805483919083906108b890849061138d565b90915550506001600160a01b0383166000818152600360205260409081902080548501905551339060008051602061152e833981519152906105039086815260200190565b4284101561094d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f45585049524544000000000000000000604482015260640161071b565b60006001610959610654565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610a65573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610a9b5750876001600160a01b0316816001600160a01b0316145b610ad85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b604482015260640161071b565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b600082815260066020526040902060010154610b5c81610bf4565b61064f8383610d21565b610b7133308361054a565b5060075460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af1158015610bc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be991906113a0565b5061072e3082610de2565b610bfe8133610e44565b50565b610c0b82826107b8565b61072e5760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610c433390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051610cb991906113c2565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b610d2b82826107b8565b1561072e5760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b8060026000828254610d9a9190611461565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061152e83398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290610e0a90849061138d565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061152e83398151915290602001610dd6565b610e4e82826107b8565b61072e57610e5b81610e9d565b610e66836020610eaf565b604051602001610e77929190611474565b60408051601f198184030181529082905262461bcd60e51b825261071b916004016110a0565b60606104146001600160a01b03831660145b60606000610ebe8360026114e9565b610ec9906002611461565b67ffffffffffffffff811115610ee157610ee1611119565b6040519080825280601f01601f191660200182016040528015610f0b576020820181803683370190505b509050600360fc1b81600081518110610f2657610f26611500565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f5557610f55611500565b60200101906001600160f81b031916908160001a9053506000610f798460026114e9565b610f84906001611461565b90505b6001811115610ffc576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610fb857610fb8611500565b1a60f81b828281518110610fce57610fce611500565b60200101906001600160f81b031916908160001a90535060049490941c93610ff581611516565b9050610f87565b50831561104b5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161071b565b9392505050565b60006020828403121561106457600080fd5b81356001600160e01b03198116811461104b57600080fd5b60005b8381101561109757818101518382015260200161107f565b50506000910152565b60208152600082518060208401526110bf81604085016020870161107c565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146110ea57600080fd5b919050565b6000806040838503121561110257600080fd5b61110b836110d3565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561114557600080fd5b61114e856110d3565b93506020850135925060408501359150606085013567ffffffffffffffff8082111561117957600080fd5b818701915087601f83011261118d57600080fd5b81358181111561119f5761119f611119565b604051601f8201601f19908116603f011681019083821181831017156111c7576111c7611119565b816040528281528a60208487010111156111e057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060006060848603121561121957600080fd5b611222846110d3565b9250611230602085016110d3565b9150604084013590509250925092565b60006020828403121561125257600080fd5b5035919050565b6000806040838503121561126c57600080fd5b8235915061127c602084016110d3565b90509250929050565b60006020828403121561129757600080fd5b61104b826110d3565b600080600080600080600060e0888a0312156112bb57600080fd5b6112c4886110d3565b96506112d2602089016110d3565b95506040880135945060608801359350608088013560ff811681146112f657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561132657600080fd5b61132f836110d3565b915061127c602084016110d3565b600181811c9082168061135157607f821691505b60208210810361137157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561041457610414611377565b6000602082840312156113b257600080fd5b8151801515811461104b57600080fd5b600080835481600182811c9150808316806113de57607f831692505b602080841082036113fd57634e487b7160e01b86526022600452602486fd5b818015611411576001811461142657611453565b60ff1986168952841515850289019650611453565b60008a81526020902060005b8681101561144b5781548b820152908501908301611432565b505084890196505b509498975050505050505050565b8082018082111561041457610414611377565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516114ac81601785016020880161107c565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516114dd81602884016020880161107c565b01602801949350505050565b808202811582820484141761041457610414611377565b634e487b7160e01b600052603260045260246000fd5b60008161152557611525611377565b50600019019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b3138654f74ef8ab973bc256976386f174cb0b707fdae643feddee6623928e7064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_denom";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
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
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
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
        readonly name: "DOMAIN_SEPARATOR";
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
        readonly name: "allowance";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_depositor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
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
        readonly name: "deposit";
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
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "nonces";
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
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
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
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
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
        readonly inputs: readonly [];
        readonly name: "totalSupply";
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
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
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
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): LiquidityInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Liquidity;
}
export {};
