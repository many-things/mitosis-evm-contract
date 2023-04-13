"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract LiquidityManager",
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
                internalType: "struct Gateway.ExecuteResult[]",
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
                        internalType: "struct Gateway.ExecuteFund[]",
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
                        internalType: "struct Gateway.ExecuteCalldata[]",
                        name: "inner",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct Gateway.ExecutePayload",
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
                internalType: "contract LiquidityManager",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161182738038061182783398101604081905261002f91610095565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100c5565b6000602082840312156100a757600080fd5b81516001600160a01b03811681146100be57600080fd5b9392505050565b611753806100d46000396000f3fe6080604052600436106100705760003560e01c8063a4d5e5051161004e578063a4d5e505146100f3578063b3a2fe9814610113578063ca2b36d914610133578063f2fde38b1461014657600080fd5b806314a7aa6c146100755780635f5e2997146100b15780638da5cb5b146100d3575b600080fd5b34801561008157600080fd5b50600154610095906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b3480156100bd57600080fd5b506100d16100cc3660046110c0565b610166565b005b3480156100df57600080fd5b50600054610095906001600160a01b031681565b3480156100ff57600080fd5b506100d161010e3660046111fb565b610446565b34801561011f57600080fd5b506100d161012e36600461130c565b6109dd565b6100d16101413660046113d4565b610d10565b34801561015257600080fd5b506100d1610161366004611417565b610dca565b60008160200151116101bf5760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064015b60405180910390fd5b8051604051636eb1769f60e11b81523360048201523060248201526000906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa15801561020e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102329190611439565b905082602001518110156102815760405162461bcd60e51b8152602060048201526016602482015275696e73756666696369656e7420616c6c6f77616e636560501b60448201526064016101b6565b60208301516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156102da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fe9190611452565b50600154602084015160405163095ea7b360e01b81526001600160a01b03928316600482015260248101919091529083169063095ea7b3906044016020604051808303816000875af1158015610358573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037c9190611452565b50600154604051632a3cafa760e01b81526001600160a01b0390911690632a3cafa7906103af9033908790600401611474565b600060405180830381600087803b1580156103c957600080fd5b505af11580156103dd573d6000803e3d6000fd5b50505050836000015183600001516001600160a01b0316866001600160a01b03167f318b9af78ddb94362003f2f344355e538ac82da78d7d01190bad73a0430a092b866020015188602001516040516104379291906114f4565b60405180910390a45050505050565b60208181015160408084015160608501519151600092831a949192916001916104719189910161155e565b60408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156104cf573d6000803e3d6000fd5b5050604051601f1901516000549092506001600160a01b03808416911614905061052f5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016101b6565b60005b8651518110156105f5576000876000015182815181106105545761055461164e565b60209081029190910181015160015460408051808201825283516001600160a01b039081168252848601519582019586529151633c56541760e01b8152905182166004820152935160248501529193501690633c56541790604401600060405180830381600087803b1580156105c957600080fd5b505af11580156105dd573d6000803e3d6000fd5b505050505080806105ed90611664565b915050610532565b5060008660200151516001600160401b0381111561061557610615610e7a565b60405190808252806020026020018201604052801561065b57816020015b6040805180820190915260008152606060208201528152602001906001900390816106335790505b50905060005b876020015151811015610749576000886020015182815181106106865761068661164e565b6020026020010151905060008082600001516001600160a01b0316836020015184604001516040516106b8919061168b565b60006040518083038185875af1925050503d80600081146106f5576040519150601f19603f3d011682016040523d82523d6000602084013e6106fa565b606091505b509150915060405180604001604052808315158152602001828152508585815181106107285761072861164e565b6020026020010181905250505050808061074190611664565b915050610661565b5060005b87515181101561098c5760008860000151828151811061076f5761076f61164e565b6020026020010151905060016001600160a01b031681600001516001600160a01b03160361080e5747471561080857600160009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107ee57600080fd5b505af1158015610802573d6000803e3d6000fd5b50505050505b50610979565b80516040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087a9190611439565b9050801561097757815160015460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b3906044016020604051808303816000875af11580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa9190611452565b5060015460408051808201825284516001600160a01b03908116825260208201858152925162b8f45560e71b815291518116600483015291516024820152911690635c7a2a8090604401600060405180830381600087803b15801561095e57600080fd5b505af1158015610972573d6000803e3d6000fd5b505050505b505b508061098481611664565b91505061074d565b506000546040516001600160a01b03909116907ffc005328e90a82ea799fdcfa5d775a9207abe86f05f8eb654406ed193a7a7f02906109cc9084906116a7565b60405180910390a250505050505050565b6000816020015111610a315760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064016101b6565b806060015151604114610a865760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e677468000000000000000060448201526064016101b6565b805160608083015160208082015160408084015193909401519186015184870151855163d505accf60e01b815233600482015230602482015260448101929092526064820152600092831a6084820181905260a4820183905260c4820185905294519193926001600160a01b0387169263d505accf9260e480820193929182900301818387803b158015610b1957600080fd5b505af1158015610b2d573d6000803e3d6000fd5b5050505060208501516040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b038516906323b872dd906064016020604051808303816000875af1158015610b8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bae9190611452565b50600154602086015160405163095ea7b360e01b81526001600160a01b03928316600482015260248101919091529085169063095ea7b3906044016020604051808303816000875af1158015610c08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2c9190611452565b5060015460408051808201825287516001600160a01b0390811682526020808a0151908301529151632a3cafa760e01b81529190921691632a3cafa791610c77913391600401611474565b600060405180830381600087803b158015610c9157600080fd5b505af1158015610ca5573d6000803e3d6000fd5b50505050856000015185600001516001600160a01b0316886001600160a01b03167f318b9af78ddb94362003f2f344355e538ac82da78d7d01190bad73a0430a092b88602001518a60200151604051610cff9291906114f4565b60405180910390a450505050505050565b3415610d785760015460405163f340fa0160e01b81526001600160a01b0384811660048301529091169063f340fa019034906024016000604051808303818588803b158015610d5e57600080fd5b505af1158015610d72573d6000803e3d6000fd5b50505050505b805160208201516040516000916001600160a01b038616917f318b9af78ddb94362003f2f344355e538ac82da78d7d01190bad73a0430a092b91610dbe913491906114f4565b60405180910390a45050565b6000546001600160a01b03163314610e135760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016101b6565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b80356001600160a01b0381168114610e7557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715610eb257610eb2610e7a565b60405290565b604051606081016001600160401b0381118282101715610eb257610eb2610e7a565b604051608081016001600160401b0381118282101715610eb257610eb2610e7a565b604051601f8201601f191681016001600160401b0381118282101715610f2457610f24610e7a565b604052919050565b60006001600160401b03821115610f4557610f45610e7a565b5060051b60200190565b600082601f830112610f6057600080fd5b81356001600160401b03811115610f7957610f79610e7a565b610f8c601f8201601f1916602001610efc565b818152846020838601011115610fa157600080fd5b816020850160208301376000918101602001919091529392505050565b600060408284031215610fd057600080fd5b610fd8610e90565b9050813581526020808301356001600160401b0380821115610ff957600080fd5b818501915085601f83011261100d57600080fd5b813561102061101b82610f2c565b610efc565b81815260059190911b8301840190848101908883111561103f57600080fd5b8585015b838110156110775780358581111561105b5760008081fd5b6110698b89838a0101610f4f565b845250918601918601611043565b50808688015250505050505092915050565b60006040828403121561109b57600080fd5b6110a3610e90565b90506110ae82610e5e565b81526020820135602082015292915050565b6000806000608084860312156110d557600080fd5b6110de84610e5e565b925060208401356001600160401b038111156110f957600080fd5b61110586828701610fbe565b9250506111158560408601611089565b90509250925092565b600082601f83011261112f57600080fd5b8135602061113f61101b83610f2c565b82815260059290921b8401810191818101908684111561115e57600080fd5b8286015b848110156111f05780356001600160401b03808211156111825760008081fd5b908801906060828b03601f190181131561119c5760008081fd5b6111a4610eb8565b6111af888501610e5e565b8152604084810135898301529184013591838311156111ce5760008081fd5b6111dc8d8a85880101610f4f565b908201528652505050918301918301611162565b509695505050505050565b600080604080848603121561120f57600080fd5b83356001600160401b038082111561122657600080fd5b818601915082828803121561123a57600080fd5b611242610e90565b82358281111561125157600080fd5b8301601f8101891361126257600080fd5b8035602061127261101b83610f2c565b82815260069290921b8301810191818101908c84111561129157600080fd5b938201935b838510156112b7576112a88d86611089565b82529388019390820190611296565b855250858101359650848711156112cd57600080fd5b6112d98b88880161111e565b8482015292975050508601359250808311156112f457600080fd5b505061130285828601610f4f565b9150509250929050565b60008060006060848603121561132157600080fd5b61132a84610e5e565b925060208401356001600160401b038082111561134657600080fd5b61135287838801610fbe565b9350604086013591508082111561136857600080fd5b908501906080828803121561137c57600080fd5b611384610eda565b61138d83610e5e565b815260208301356020820152604083013560408201526060830135828111156113b557600080fd5b6113c189828601610f4f565b6060830152508093505050509250925092565b600080604083850312156113e757600080fd5b6113f083610e5e565b915060208301356001600160401b0381111561140b57600080fd5b61130285828601610fbe565b60006020828403121561142957600080fd5b61143282610e5e565b9392505050565b60006020828403121561144b57600080fd5b5051919050565b60006020828403121561146457600080fd5b8151801515811461143257600080fd5b6001600160a01b038316815260608101611432602083018480516001600160a01b03168252602090810151910152565b60005b838110156114bf5781810151838201526020016114a7565b50506000910152565b600081518084526114e08160208601602086016114a4565b601f01601f19169290920160200192915050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b8281101561155057605f1988870301845261153e8683516114c8565b95509284019290840190600101611522565b509398975050505050505050565b6000602080835260608084018551604080858801528282518085526080890191508684019450600093505b808410156115c3576115af82865180516001600160a01b03168252602090810151910152565b938601936001939093019290820190611589565b5085890151601f198983038101848b015281518084529188019550935081870190600581901b8301880160005b8281101561163e5784820387018452875180516001600160a01b031683528a8101518b8401528601518683018a905261162b8a8401826114c8565b988b0198948b01949250506001016115f0565b509b9a5050505050505050505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161168457634e487b7160e01b600052601160045260246000fd5b5060010190565b6000825161169d8184602087016114a4565b9190910192915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561170f57888303603f1901855281518051151584528701518784018790526116fc878501826114c8565b95880195935050908601906001016116ce565b50909897505050505050505056fea2646970667358221220f66647d4de2dde3b91303dccbbff488610044fc389f123a0fd35dfbc1da29c7664736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class Gateway__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(_lmgr, overrides) {
        return super.getDeployTransaction(_lmgr, overrides || {});
    }
    deploy(_lmgr, overrides) {
        return super.deploy(_lmgr, overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.Gateway__factory = Gateway__factory;
Gateway__factory.bytecode = _bytecode;
Gateway__factory.abi = _abi;
