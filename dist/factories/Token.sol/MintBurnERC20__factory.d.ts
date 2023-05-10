import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MintBurnERC20, MintBurnERC20Interface } from "../../Token.sol/MintBurnERC20";
type MintBurnERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MintBurnERC20__factory extends ContractFactory {
    constructor(...args: MintBurnERC20ConstructorParams);
    deploy(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MintBurnERC20>;
    getDeployTransaction(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MintBurnERC20;
    connect(signer: Signer): MintBurnERC20__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b50604051620011bc380380620011bc833981016040819052620000349162000227565b3383838360006200004684826200033b565b5060016200005583826200033b565b5060ff81166080524660a0526200006b620000c6565b60c0525050600680546001600160a01b0319166001600160a01b0384169081179091556040519091506000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35050505062000485565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000fa919062000407565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018a57600080fd5b81516001600160401b0380821115620001a757620001a762000162565b604051601f8301601f19908116603f01168101908282118183101715620001d257620001d262000162565b81604052838152602092508683858801011115620001ef57600080fd5b600091505b83821015620002135785820183015181830184015290820190620001f4565b600093810190920192909252949350505050565b6000806000606084860312156200023d57600080fd5b83516001600160401b03808211156200025557600080fd5b620002638783880162000178565b945060208601519150808211156200027a57600080fd5b50620002898682870162000178565b925050604084015160ff81168114620002a157600080fd5b809150509250925092565b600181811c90821680620002c157607f821691505b602082108103620002e257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200033657600081815260208120601f850160051c81016020861015620003115750805b601f850160051c820191505b8181101562000332578281556001016200031d565b5050505b505050565b81516001600160401b0381111562000357576200035762000162565b6200036f81620003688454620002ac565b84620002e8565b602080601f831160018114620003a757600084156200038e5750858301515b600019600386901b1c1916600185901b17855562000332565b600085815260208120601f198616915b82811015620003d857888601518255948401946001909101908401620003b7565b5085821015620003f75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200041781620002ac565b60018281168015620004325760018114620004485762000479565b60ff198416875282151583028701945062000479565b8760005260208060002060005b85811015620004705781548a82015290840190820162000455565b50505082870194505b50929695505050505050565b60805160a05160c051610d07620004b560003960006104c40152600061048f015260006101750152610d076000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80637ecebe0011610097578063a9059cbb11610066578063a9059cbb1461024c578063d505accf1461025f578063dd62ed3e14610272578063f2fde38b1461029d57600080fd5b80637ecebe00146101e65780638da5cb5b1461020657806395d89b41146102315780639dc29fac1461023957600080fd5b8063313ce567116100d3578063313ce567146101705780633644e515146101a957806340c10f19146101b157806370a08231146101c657600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd1461015d575b600080fd5b61010d6102b0565b60405161011a91906109de565b60405180910390f35b610136610131366004610a48565b61033e565b604051901515815260200161011a565b61014f60025481565b60405190815260200161011a565b61013661016b366004610a72565b6103ab565b6101977f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161011a565b61014f61048b565b6101c46101bf366004610a48565b6104e6565b005b61014f6101d4366004610aae565b60036020526000908152604090205481565b61014f6101f4366004610aae565b60056020526000908152604090205481565b600654610219906001600160a01b031681565b6040516001600160a01b03909116815260200161011a565b61010d610527565b6101c4610247366004610a48565b610534565b61013661025a366004610a48565b610568565b6101c461026d366004610ad0565b6105ce565b61014f610280366004610b43565b600460209081526000928352604080842090915290825290205481565b6101c46102ab366004610aae565b610812565b600080546102bd90610b76565b80601f01602080910402602001604051908101604052809291908181526020018280546102e990610b76565b80156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103999086815260200190565b60405180910390a35060015b92915050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610407576103e28382610bc6565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061042f908490610bc6565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020610cb2833981519152906104789087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146104c1576104bc610888565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6006546001600160a01b031633146105195760405162461bcd60e51b815260040161051090610bd9565b60405180910390fd5b6105238282610922565b5050565b600180546102bd90610b76565b6006546001600160a01b0316331461055e5760405162461bcd60e51b815260040161051090610bd9565b610523828261097c565b33600090815260036020526040812080548391908390610589908490610bc6565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020610cb2833981519152906103999086815260200190565b4284101561061e5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610510565b6000600161062a61048b565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610736573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061076c5750876001600160a01b0316816001600160a01b0316145b6107a95760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610510565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6006546001600160a01b0316331461083c5760405162461bcd60e51b815260040161051090610bd9565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516108ba9190610bff565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546109349190610c9e565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020610cb283398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906109a4908490610bc6565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020610cb283398151915290602001610970565b600060208083528351808285015260005b81811015610a0b578581018301518582016040015282016109ef565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610a4357600080fd5b919050565b60008060408385031215610a5b57600080fd5b610a6483610a2c565b946020939093013593505050565b600080600060608486031215610a8757600080fd5b610a9084610a2c565b9250610a9e60208501610a2c565b9150604084013590509250925092565b600060208284031215610ac057600080fd5b610ac982610a2c565b9392505050565b600080600080600080600060e0888a031215610aeb57600080fd5b610af488610a2c565b9650610b0260208901610a2c565b95506040880135945060608801359350608088013560ff81168114610b2657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610b5657600080fd5b610b5f83610a2c565b9150610b6d60208401610a2c565b90509250929050565b600181811c90821680610b8a57607f821691505b602082108103610baa57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156103a5576103a5610bb0565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b600080835481600182811c915080831680610c1b57607f831692505b60208084108203610c3a57634e487b7160e01b86526022600452602486fd5b818015610c4e5760018114610c6357610c90565b60ff1986168952841515850289019650610c90565b60008a81526020902060005b86811015610c885781548b820152908501908301610c6f565b505084890196505b509498975050505050505050565b808201808211156103a5576103a5610bb056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212204a9bf20dec3a5b732e1c6e920f8ba065c4f26ecec2ebd57485e2575d1d3a56ca64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint8";
            readonly name: "_decimals";
            readonly type: "uint8";
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
        readonly name: "DOMAIN_SEPARATOR";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MintBurnERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintBurnERC20;
}
export {};
