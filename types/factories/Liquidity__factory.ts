/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Liquidity, LiquidityInterface } from "../Liquidity";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_denom",
        type: "string",
      },
      {
        internalType: "address",
        name: "_token",
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
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GATEWAY_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001b4c38038062001b4c83398101604081905262000034916200025d565b81826040516020016200004891906200032a565b60408051601f1981840301815291905260126000620000688482620003eb565b506001620000778382620003eb565b5060ff81166080524660a0526200008d620000c3565b60c0525050600780546001600160a01b0319166001600160a01b03841617905550620000bb6000336200015f565b505062000535565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000f79190620004b7565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16620002005760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001bf3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002375781810151838201526020016200021d565b50506000910152565b80516001600160a01b03811681146200025857600080fd5b919050565b600080604083850312156200027157600080fd5b82516001600160401b03808211156200028957600080fd5b818501915085601f8301126200029e57600080fd5b815181811115620002b357620002b362000204565b604051601f8201601f19908116603f01168101908382118183101715620002de57620002de62000204565b81604052828152886020848701011115620002f857600080fd5b6200030b8360208301602088016200021a565b8096505050505050620003216020840162000240565b90509250929050565b674d49544f5f4c502d60c01b8152600082516200034f8160088501602087016200021a565b9190910160080192915050565b600181811c908216806200037157607f821691505b6020821081036200039257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003e657600081815260208120601f850160051c81016020861015620003c15750805b601f850160051c820191505b81811015620003e257828155600101620003cd565b5050505b505050565b81516001600160401b0381111562000407576200040762000204565b6200041f816200041884546200035c565b8462000398565b602080601f8311600181146200045757600084156200043e5750858301515b600019600386901b1c1916600185901b178555620003e2565b600085815260208120601f198616915b82811015620004885788860151825594840194600190910190840162000467565b5085821015620004a75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004c7816200035c565b60018281168015620004e25760018114620004f85762000529565b60ff198416875282151583028701945062000529565b8760005260208060002060005b85811015620005205781548a82015290840190820162000505565b50505082870194505b50929695505050505050565b60805160a05160c0516115e762000565600039600061068d015260006106580152600061024201526115e76000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806370a08231116100de578063a9059cbb11610097578063d547741f11610071578063d547741f14610367578063dd62ed3e1461037a578063f3fef3a3146103a5578063fc0c546a146103b857600080fd5b8063a9059cbb1461031a578063c50d6dd91461032d578063d505accf1461035457600080fd5b806370a08231146102a45780637ecebe00146102c457806391d14854146102e457806395d89b41146102f75780639e48ff5a146102ff578063a217fddf1461031257600080fd5b8063248a9ca311610130578063248a9ca3146102075780632f2ff15d1461022a578063313ce5671461023d5780633644e5151461027657806336568abe1461027e57806347e7ef241461029157600080fd5b806301ffc9a71461017857806306fdde03146101a0578063095ea7b3146101b55780630bd0ca9a146101c857806318160ddd146101dd57806323b872dd146101f4575b600080fd5b61018b6101863660046110b6565b6103e3565b60405190151581526020015b60405180910390f35b6101a861041a565b6040516101979190611104565b61018b6101c3366004611153565b6104a8565b6101db6101d6366004611193565b610514565b005b6101e660025481565b604051908152602001610197565b61018b610202366004611268565b61054a565b6101e66102153660046112a4565b60009081526006602052604090206001015490565b6101db6102383660046112bd565b61062a565b6102647f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610197565b6101e6610654565b6101db61028c3660046112bd565b6106af565b6101db61029f366004611153565b610732565b6101e66102b23660046112e9565b60036020526000908152604090205481565b6101e66102d23660046112e9565b60056020526000908152604090205481565b61018b6102f23660046112bd565b6107b8565b6101a86107e3565b6101db61030d366004611193565b6107f0565b6101e6600081565b61018b610328366004611153565b610897565b6101e67fb90e9995c6170fff8ea03e9ad6919878e483770c237f1a6f330ceaa7112b344a81565b6101db610362366004611304565b6108fd565b6101db6103753660046112bd565b610b41565b6101e6610388366004611377565b600460209081526000928352604080842090915290825290205481565b6101db6103b3366004611153565b610b66565b6007546103cb906001600160a01b031681565b6040516001600160a01b039091168152602001610197565b60006001600160e01b03198216637965db0b60e01b148061041457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008054610427906113a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610453906113a1565b80156104a05780601f10610475576101008083540402835291602001916104a0565b820191906000526020600020905b81548152906001019060200180831161048357829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906105039086815260200190565b60405180910390a350600192915050565b60208101516040820151606083015160001a9190610537333088888787876108fd565b6105418787610b66565b50505050505050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146105a65761058183826113f1565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906105ce9084906113f1565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611592833981519152906106179087815260200190565b60405180910390a3506001949350505050565b60008281526006602052604090206001015461064581610c58565b61064f8383610c65565b505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461068a57610685610ceb565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b03811633146107245760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61072e8282610d85565b5050565b6007546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610789573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ad9190611404565b5061072e8282610dec565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60018054610427906113a1565b60208101516040808301516060840151600754835163d505accf60e01b81523360048201523060248201526044810189905260648101889052600092831a6084820181905260a4820187905260c4820185905294519495946001600160a01b039092169263d505accf9260e48084019382900301818387803b15801561087557600080fd5b505af1158015610889573d6000803e3d6000fd5b505050506105418787610732565b336000908152600360205260408120805483919083906108b89084906113f1565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611592833981519152906105039086815260200190565b4284101561094d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f45585049524544000000000000000000604482015260640161071b565b60006001610959610654565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610a65573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610a9b5750876001600160a01b0316816001600160a01b0316145b610ad85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b604482015260640161071b565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b600082815260066020526040902060010154610b5c81610c58565b61064f8383610d85565b6040516323b872dd60e01b8152336004820152306024820181905260448201839052906323b872dd906064016020604051808303816000875af1158015610bb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd59190611404565b5060075460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af1158015610c29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4d9190611404565b5061072e3082610e46565b610c628133610ea8565b50565b610c6f82826107b8565b61072e5760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610ca73390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051610d1d9190611426565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b610d8f82826107b8565b1561072e5760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b8060026000828254610dfe91906114c5565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061159283398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290610e6e9084906113f1565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061159283398151915290602001610e3a565b610eb282826107b8565b61072e57610ebf81610f01565b610eca836020610f13565b604051602001610edb9291906114d8565b60408051601f198184030181529082905262461bcd60e51b825261071b91600401611104565b60606104146001600160a01b03831660145b60606000610f2283600261154d565b610f2d9060026114c5565b67ffffffffffffffff811115610f4557610f4561117d565b6040519080825280601f01601f191660200182016040528015610f6f576020820181803683370190505b509050600360fc1b81600081518110610f8a57610f8a611564565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610fb957610fb9611564565b60200101906001600160f81b031916908160001a9053506000610fdd84600261154d565b610fe89060016114c5565b90505b6001811115611060576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061101c5761101c611564565b1a60f81b82828151811061103257611032611564565b60200101906001600160f81b031916908160001a90535060049490941c936110598161157a565b9050610feb565b5083156110af5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161071b565b9392505050565b6000602082840312156110c857600080fd5b81356001600160e01b0319811681146110af57600080fd5b60005b838110156110fb5781810151838201526020016110e3565b50506000910152565b60208152600082518060208401526111238160408501602087016110e0565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461114e57600080fd5b919050565b6000806040838503121561116657600080fd5b61116f83611137565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156111a957600080fd5b6111b285611137565b93506020850135925060408501359150606085013567ffffffffffffffff808211156111dd57600080fd5b818701915087601f8301126111f157600080fd5b8135818111156112035761120361117d565b604051601f8201601f19908116603f0116810190838211818310171561122b5761122b61117d565b816040528281528a602084870101111561124457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060006060848603121561127d57600080fd5b61128684611137565b925061129460208501611137565b9150604084013590509250925092565b6000602082840312156112b657600080fd5b5035919050565b600080604083850312156112d057600080fd5b823591506112e060208401611137565b90509250929050565b6000602082840312156112fb57600080fd5b6110af82611137565b600080600080600080600060e0888a03121561131f57600080fd5b61132888611137565b965061133660208901611137565b95506040880135945060608801359350608088013560ff8116811461135a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561138a57600080fd5b61139383611137565b91506112e060208401611137565b600181811c908216806113b557607f821691505b6020821081036113d557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610414576104146113db565b60006020828403121561141657600080fd5b815180151581146110af57600080fd5b600080835481600182811c91508083168061144257607f831692505b6020808410820361146157634e487b7160e01b86526022600452602486fd5b818015611475576001811461148a576114b7565b60ff19861689528415158502890196506114b7565b60008a81526020902060005b868110156114af5781548b820152908501908301611496565b505084890196505b509498975050505050505050565b80820180821115610414576104146113db565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516115108160178501602088016110e0565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516115418160288401602088016110e0565b01602801949350505050565b8082028115828204841417610414576104146113db565b634e487b7160e01b600052603260045260246000fd5b600081611589576115896113db565b50600019019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220e90ba957849722117b3c146bdba3259630f0d4daf19a9421e0de1486edf007cf64736f6c63430008110033";

type LiquidityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Liquidity__factory extends ContractFactory {
  constructor(...args: LiquidityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _denom: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Liquidity> {
    return super.deploy(_denom, _token, overrides || {}) as Promise<Liquidity>;
  }
  override getDeployTransaction(
    _denom: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_denom, _token, overrides || {});
  }
  override attach(address: string): Liquidity {
    return super.attach(address) as Liquidity;
  }
  override connect(signer: Signer): Liquidity__factory {
    return super.connect(signer) as Liquidity__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityInterface {
    return new utils.Interface(_abi) as LiquidityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Liquidity {
    return new Contract(address, _abi, signerOrProvider) as Liquidity;
  }
}
