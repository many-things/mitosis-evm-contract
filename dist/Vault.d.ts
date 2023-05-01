import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export type OperationStruct = {
    id: PromiseOrValue<BigNumberish>;
    args: PromiseOrValue<BytesLike>[];
};
export type OperationStructOutput = [BigNumber, string[]] & {
    id: BigNumber;
    args: string[];
};
export type TokenStruct = {
    addr: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
};
export type TokenStructOutput = [string, BigNumber] & {
    addr: string;
    amount: BigNumber;
};
export type TokenPermitStruct = {
    addr: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
    signature: PromiseOrValue<BytesLike>;
};
export type TokenPermitStructOutput = [string, BigNumber, BigNumber, string] & {
    addr: string;
    amount: BigNumber;
    deadline: BigNumber;
    signature: string;
};
export declare namespace Vault {
    type ExecuteResultStruct = {
        success: PromiseOrValue<boolean>;
        returndata: PromiseOrValue<BytesLike>;
    };
    type ExecuteResultStructOutput = [boolean, string] & {
        success: boolean;
        returndata: string;
    };
    type ExecuteFundStruct = {
        token: PromiseOrValue<string>;
        value: PromiseOrValue<BigNumberish>;
    };
    type ExecuteFundStructOutput = [string, BigNumber] & {
        token: string;
        value: BigNumber;
    };
    type ExecuteCalldataStruct = {
        to: PromiseOrValue<string>;
        value: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type ExecuteCalldataStructOutput = [string, BigNumber, string] & {
        to: string;
        value: BigNumber;
        data: string;
    };
    type ExecutePayloadStruct = {
        funds: Vault.ExecuteFundStruct[];
        inner: Vault.ExecuteCalldataStruct[];
    };
    type ExecutePayloadStructOutput = [
        Vault.ExecuteFundStructOutput[],
        Vault.ExecuteCalldataStructOutput[]
    ] & {
        funds: Vault.ExecuteFundStructOutput[];
        inner: Vault.ExecuteCalldataStructOutput[];
    };
}
export interface VaultInterface extends utils.Interface {
    functions: {
        'execute(((address,uint256)[],(address,uint256,bytes)[]),bytes)': FunctionFragment;
        'lmgr()': FunctionFragment;
        'owner()': FunctionFragment;
        'send(address,(uint256,bytes[]),(address,uint256))': FunctionFragment;
        'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'execute' | 'lmgr' | 'owner' | 'send(address,(uint256,bytes[]),(address,uint256))' | 'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))' | 'transferOwnership'): FunctionFragment;
    encodeFunctionData(functionFragment: 'execute', values: [Vault.ExecutePayloadStruct, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'lmgr', values?: undefined): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'send(address,(uint256,bytes[]),(address,uint256))', values: [PromiseOrValue<string>, OperationStruct, TokenStruct]): string;
    encodeFunctionData(functionFragment: 'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))', values: [PromiseOrValue<string>, OperationStruct, TokenPermitStruct]): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'lmgr', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'send(address,(uint256,bytes[]),(address,uint256))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    events: {
        'ExecuteOperation(address,tuple[])': EventFragment;
        'InitOperation(address,address,uint256,uint256,bytes[])': EventFragment;
        'OwnershipTransferred(address,address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'ExecuteOperation'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'InitOperation'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}
export interface ExecuteOperationEventObject {
    owner: string;
    results: Vault.ExecuteResultStructOutput[];
}
export type ExecuteOperationEvent = TypedEvent<[
    string,
    Vault.ExecuteResultStructOutput[]
], ExecuteOperationEventObject>;
export type ExecuteOperationEventFilter = TypedEventFilter<ExecuteOperationEvent>;
export interface InitOperationEventObject {
    to: string;
    token: string;
    opId: BigNumber;
    amount: BigNumber;
    opArgs: string[];
}
export type InitOperationEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string[]
], InitOperationEventObject>;
export type InitOperationEventFilter = TypedEventFilter<InitOperationEvent>;
export interface OwnershipTransferredEventObject {
    user: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface Vault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VaultInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        execute(_payload: Vault.ExecutePayloadStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lmgr(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        'send(address,(uint256,bytes[]),(address,uint256))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenPermitStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    execute(_payload: Vault.ExecutePayloadStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lmgr(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    'send(address,(uint256,bytes[]),(address,uint256))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenPermitStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        execute(_payload: Vault.ExecutePayloadStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        lmgr(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        'send(address,(uint256,bytes[]),(address,uint256))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenStruct, overrides?: CallOverrides): Promise<void>;
        'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenPermitStruct, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'ExecuteOperation(address,tuple[])'(owner?: PromiseOrValue<string> | null, results?: null): ExecuteOperationEventFilter;
        ExecuteOperation(owner?: PromiseOrValue<string> | null, results?: null): ExecuteOperationEventFilter;
        'InitOperation(address,address,uint256,uint256,bytes[])'(to?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, opId?: PromiseOrValue<BigNumberish> | null, amount?: null, opArgs?: null): InitOperationEventFilter;
        InitOperation(to?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, opId?: PromiseOrValue<BigNumberish> | null, amount?: null, opArgs?: null): InitOperationEventFilter;
        'OwnershipTransferred(address,address)'(user?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(user?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        execute(_payload: Vault.ExecutePayloadStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lmgr(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        'send(address,(uint256,bytes[]),(address,uint256))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenPermitStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(_payload: Vault.ExecutePayloadStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lmgr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'send(address,(uint256,bytes[]),(address,uint256))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'send(address,(uint256,bytes[]),(address,uint256,uint256,bytes))'(_to: PromiseOrValue<string>, _op: OperationStruct, _token: TokenPermitStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
