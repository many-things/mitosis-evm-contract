import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from 'ethers';
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from './common';
export type OperationStruct = {
    id: BigNumberish;
    args: BytesLike[];
};
export type OperationStructOutput = [id: bigint, args: string[]] & {
    id: bigint;
    args: string[];
};
export type TokenStruct = {
    addr: AddressLike;
    amount: BigNumberish;
};
export type TokenStructOutput = [addr: string, amount: bigint] & {
    addr: string;
    amount: bigint;
};
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
export declare namespace Vault {
    type ExecuteResultStruct = {
        success: boolean;
        returndata: BytesLike;
    };
    type ExecuteResultStructOutput = [
        success: boolean,
        returndata: string
    ] & {
        success: boolean;
        returndata: string;
    };
    type ExecuteFundStruct = {
        token: AddressLike;
        value: BigNumberish;
    };
    type ExecuteFundStructOutput = [token: string, value: bigint] & {
        token: string;
        value: bigint;
    };
    type ExecuteCalldataStruct = {
        to: AddressLike;
        value: BigNumberish;
        data: BytesLike;
    };
    type ExecuteCalldataStructOutput = [
        to: string,
        value: bigint,
        data: string
    ] & {
        to: string;
        value: bigint;
        data: string;
    };
    type ExecutePayloadStruct = {
        funds: Vault.ExecuteFundStruct[];
        inner: Vault.ExecuteCalldataStruct[];
    };
    type ExecutePayloadStructOutput = [
        funds: Vault.ExecuteFundStructOutput[],
        inner: Vault.ExecuteCalldataStructOutput[]
    ] & {
        funds: Vault.ExecuteFundStructOutput[];
        inner: Vault.ExecuteCalldataStructOutput[];
    };
}
export interface VaultInterface extends Interface {
    getFunction(nameOrSignature: 'execute' | 'lmgr' | 'owner' | 'send(address,(uint256,bytes[]),(address,uint256))' | 'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))' | 'transferOwnership'): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: 'ExecuteOperation' | 'InitOperation' | 'OwnershipTransferred'): EventFragment;
    encodeFunctionData(functionFragment: 'execute', values: [Vault.ExecutePayloadStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'lmgr', values?: undefined): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'send(address,(uint256,bytes[]),(address,uint256))', values: [AddressLike, OperationStruct, TokenStruct]): string;
    encodeFunctionData(functionFragment: 'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))', values: [AddressLike, OperationStruct, TokenPermitStruct]): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'lmgr', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'send(address,(uint256,bytes[]),(address,uint256))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
}
export declare namespace ExecuteOperationEvent {
    type InputTuple = [
        owner: AddressLike,
        results: Vault.ExecuteResultStruct[]
    ];
    type OutputTuple = [
        owner: string,
        results: Vault.ExecuteResultStructOutput[]
    ];
    interface OutputObject {
        owner: string;
        results: Vault.ExecuteResultStructOutput[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitOperationEvent {
    type InputTuple = [
        to: AddressLike,
        token: AddressLike,
        opId: BigNumberish,
        amount: BigNumberish,
        opArgs: BytesLike[]
    ];
    type OutputTuple = [
        to: string,
        token: string,
        opId: bigint,
        amount: bigint,
        opArgs: string[]
    ];
    interface OutputObject {
        to: string;
        token: string;
        opId: bigint;
        amount: bigint;
        opArgs: string[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [user: AddressLike, newOwner: AddressLike];
    type OutputTuple = [user: string, newOwner: string];
    interface OutputObject {
        user: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Vault extends BaseContract {
    connect(runner?: ContractRunner | null): BaseContract;
    attach(addressOrName: AddressLike): this;
    deployed(): Promise<this>;
    interface: VaultInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    execute: TypedContractMethod<[
        _payload: Vault.ExecutePayloadStruct,
        _signature: BytesLike
    ], [
        void
    ], 'nonpayable'>;
    lmgr: TypedContractMethod<[], [string], 'view'>;
    owner: TypedContractMethod<[], [string], 'view'>;
    'send(address,(uint256,bytes[]),(address,uint256))': TypedContractMethod<[
        _to: AddressLike,
        _op: OperationStruct,
        _token: TokenStruct
    ], [
        void
    ], 'nonpayable'>;
    'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))': TypedContractMethod<[
        _to: AddressLike,
        _op: OperationStruct,
        _token: TokenPermitStruct
    ], [
        void
    ], 'nonpayable'>;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], 'nonpayable'>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: 'execute'): TypedContractMethod<[
        _payload: Vault.ExecutePayloadStruct,
        _signature: BytesLike
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'lmgr'): TypedContractMethod<[], [string], 'view'>;
    getFunction(nameOrSignature: 'owner'): TypedContractMethod<[], [string], 'view'>;
    getFunction(nameOrSignature: 'send(address,(uint256,bytes[]),(address,uint256))'): TypedContractMethod<[
        _to: AddressLike,
        _op: OperationStruct,
        _token: TokenStruct
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))'): TypedContractMethod<[
        _to: AddressLike,
        _op: OperationStruct,
        _token: TokenPermitStruct
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'transferOwnership'): TypedContractMethod<[newOwner: AddressLike], [void], 'nonpayable'>;
    getEvent(key: 'ExecuteOperation'): TypedContractEvent<ExecuteOperationEvent.InputTuple, ExecuteOperationEvent.OutputTuple, ExecuteOperationEvent.OutputObject>;
    getEvent(key: 'InitOperation'): TypedContractEvent<InitOperationEvent.InputTuple, InitOperationEvent.OutputTuple, InitOperationEvent.OutputObject>;
    getEvent(key: 'OwnershipTransferred'): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    filters: {
        'ExecuteOperation(address,tuple[])': TypedContractEvent<ExecuteOperationEvent.InputTuple, ExecuteOperationEvent.OutputTuple, ExecuteOperationEvent.OutputObject>;
        ExecuteOperation: TypedContractEvent<ExecuteOperationEvent.InputTuple, ExecuteOperationEvent.OutputTuple, ExecuteOperationEvent.OutputObject>;
        'InitOperation(address,address,uint256,uint256,bytes[])': TypedContractEvent<InitOperationEvent.InputTuple, InitOperationEvent.OutputTuple, InitOperationEvent.OutputObject>;
        InitOperation: TypedContractEvent<InitOperationEvent.InputTuple, InitOperationEvent.OutputTuple, InitOperationEvent.OutputObject>;
        'OwnershipTransferred(address,address)': TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    };
}
