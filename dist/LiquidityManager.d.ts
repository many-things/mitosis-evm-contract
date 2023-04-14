import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from 'ethers';
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from './common';
export type TokenPermitStruct = {
    addr: AddressLike;
    amount: BigNumberish;
    deadline: BigNumberish;
    signature: BytesLike;
};
export type TokenPermitStructOutput = [
    addr: string,
    amount: bigint,
    deadline: bigint,
    signature: string
] & {
    addr: string;
    amount: bigint;
    deadline: bigint;
    signature: string;
};
export type TokenStruct = {
    addr: AddressLike;
    amount: BigNumberish;
};
export type TokenStructOutput = [addr: string, amount: bigint] & {
    addr: string;
    amount: bigint;
};
export interface LiquidityManagerInterface extends Interface {
    getFunction(nameOrSignature: 'DEFAULT_ADMIN_ROLE' | 'GATEWAY_ROLE' | 'balances' | 'deposit(address,(address,uint256,uint256,bytes))' | 'deposit(address,(address,uint256))' | 'deposit((address,uint256,uint256,bytes))' | 'deposit((address,uint256))' | 'deposit()' | 'deposit(address)' | 'getRoleAdmin' | 'grantRole' | 'hasRole' | 'renounceRole' | 'revokeRole' | 'supportsInterface' | 'withdraw(address,(address,uint256))' | 'withdraw((address,uint256))'): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged' | 'RoleGranted' | 'RoleRevoked'): EventFragment;
    encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
    encodeFunctionData(functionFragment: 'GATEWAY_ROLE', values?: undefined): string;
    encodeFunctionData(functionFragment: 'balances', values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: 'deposit(address,(address,uint256,uint256,bytes))', values: [AddressLike, TokenPermitStruct]): string;
    encodeFunctionData(functionFragment: 'deposit(address,(address,uint256))', values: [AddressLike, TokenStruct]): string;
    encodeFunctionData(functionFragment: 'deposit((address,uint256,uint256,bytes))', values: [TokenPermitStruct]): string;
    encodeFunctionData(functionFragment: 'deposit((address,uint256))', values: [TokenStruct]): string;
    encodeFunctionData(functionFragment: 'deposit()', values?: undefined): string;
    encodeFunctionData(functionFragment: 'deposit(address)', values: [AddressLike]): string;
    encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'withdraw(address,(address,uint256))', values: [AddressLike, TokenStruct]): string;
    encodeFunctionData(functionFragment: 'withdraw((address,uint256))', values: [TokenStruct]): string;
    decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'GATEWAY_ROLE', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balances', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'deposit(address,(address,uint256,uint256,bytes))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'deposit(address,(address,uint256))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'deposit((address,uint256,uint256,bytes))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'deposit((address,uint256))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'deposit()', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'deposit(address)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdraw(address,(address,uint256))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdraw((address,uint256))', data: BytesLike): Result;
}
export declare namespace RoleAdminChangedEvent {
    type InputTuple = [
        role: BytesLike,
        previousAdminRole: BytesLike,
        newAdminRole: BytesLike
    ];
    type OutputTuple = [
        role: string,
        previousAdminRole: string,
        newAdminRole: string
    ];
    interface OutputObject {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleGrantedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleRevokedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface LiquidityManager extends BaseContract {
    connect(runner?: ContractRunner | null): BaseContract;
    attach(addressOrName: AddressLike): this;
    deployed(): Promise<this>;
    interface: LiquidityManagerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], 'view'>;
    GATEWAY_ROLE: TypedContractMethod<[], [string], 'view'>;
    balances: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], 'view'>;
    'deposit(address,(address,uint256,uint256,bytes))': TypedContractMethod<[
        _depositor: AddressLike,
        _token: TokenPermitStruct
    ], [
        void
    ], 'nonpayable'>;
    'deposit(address,(address,uint256))': TypedContractMethod<[
        _depositor: AddressLike,
        _token: TokenStruct
    ], [
        void
    ], 'nonpayable'>;
    'deposit((address,uint256,uint256,bytes))': TypedContractMethod<[
        _token: TokenPermitStruct
    ], [
        void
    ], 'nonpayable'>;
    'deposit((address,uint256))': TypedContractMethod<[
        _token: TokenStruct
    ], [
        void
    ], 'nonpayable'>;
    'deposit()': TypedContractMethod<[], [void], 'payable'>;
    'deposit(address)': TypedContractMethod<[
        _depositor: AddressLike
    ], [
        void
    ], 'payable'>;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], 'view'>;
    grantRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], 'nonpayable'>;
    hasRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], 'view'>;
    renounceRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], 'nonpayable'>;
    revokeRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], 'nonpayable'>;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], 'view'>;
    'withdraw(address,(address,uint256))': TypedContractMethod<[
        _receiver: AddressLike,
        _token: TokenStruct
    ], [
        void
    ], 'nonpayable'>;
    'withdraw((address,uint256))': TypedContractMethod<[
        _token: TokenStruct
    ], [
        void
    ], 'nonpayable'>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: 'DEFAULT_ADMIN_ROLE'): TypedContractMethod<[], [string], 'view'>;
    getFunction(nameOrSignature: 'GATEWAY_ROLE'): TypedContractMethod<[], [string], 'view'>;
    getFunction(nameOrSignature: 'balances'): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], 'view'>;
    getFunction(nameOrSignature: 'deposit(address,(address,uint256,uint256,bytes))'): TypedContractMethod<[
        _depositor: AddressLike,
        _token: TokenPermitStruct
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'deposit(address,(address,uint256))'): TypedContractMethod<[
        _depositor: AddressLike,
        _token: TokenStruct
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'deposit((address,uint256,uint256,bytes))'): TypedContractMethod<[_token: TokenPermitStruct], [void], 'nonpayable'>;
    getFunction(nameOrSignature: 'deposit((address,uint256))'): TypedContractMethod<[_token: TokenStruct], [void], 'nonpayable'>;
    getFunction(nameOrSignature: 'deposit()'): TypedContractMethod<[], [void], 'payable'>;
    getFunction(nameOrSignature: 'deposit(address)'): TypedContractMethod<[_depositor: AddressLike], [void], 'payable'>;
    getFunction(nameOrSignature: 'getRoleAdmin'): TypedContractMethod<[role: BytesLike], [string], 'view'>;
    getFunction(nameOrSignature: 'grantRole'): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'hasRole'): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], 'view'>;
    getFunction(nameOrSignature: 'renounceRole'): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'revokeRole'): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'supportsInterface'): TypedContractMethod<[interfaceId: BytesLike], [boolean], 'view'>;
    getFunction(nameOrSignature: 'withdraw(address,(address,uint256))'): TypedContractMethod<[
        _receiver: AddressLike,
        _token: TokenStruct
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'withdraw((address,uint256))'): TypedContractMethod<[_token: TokenStruct], [void], 'nonpayable'>;
    getEvent(key: 'RoleAdminChanged'): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: 'RoleGranted'): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: 'RoleRevoked'): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    filters: {
        'RoleAdminChanged(bytes32,bytes32,bytes32)': TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        'RoleGranted(bytes32,address,address)': TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        'RoleRevoked(bytes32,address,address)': TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    };
}