import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export interface BondInterface extends utils.Interface {
    functions: {
        'DEFAULT_ADMIN_ROLE()': FunctionFragment;
        'balances(address)': FunctionFragment;
        'bond(uint256,uint256,bytes)': FunctionFragment;
        'bond(uint256)': FunctionFragment;
        'claim(uint256)': FunctionFragment;
        'claim()': FunctionFragment;
        'getRoleAdmin(bytes32)': FunctionFragment;
        'grantRole(bytes32,address)': FunctionFragment;
        'hasRole(bytes32,address)': FunctionFragment;
        'lastClaimedIndex(address)': FunctionFragment;
        'lastUnbondingIndex(address)': FunctionFragment;
        'renounceRole(bytes32,address)': FunctionFragment;
        'revokeRole(bytes32,address)': FunctionFragment;
        'supportsInterface(bytes4)': FunctionFragment;
        'token()': FunctionFragment;
        'unbond(uint256)': FunctionFragment;
        'unbondingPeriod()': FunctionFragment;
        'unbondings(address,uint256)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'DEFAULT_ADMIN_ROLE' | 'balances' | 'bond(uint256,uint256,bytes)' | 'bond(uint256)' | 'claim(uint256)' | 'claim()' | 'getRoleAdmin' | 'grantRole' | 'hasRole' | 'lastClaimedIndex' | 'lastUnbondingIndex' | 'renounceRole' | 'revokeRole' | 'supportsInterface' | 'token' | 'unbond' | 'unbondingPeriod' | 'unbondings'): FunctionFragment;
    encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
    encodeFunctionData(functionFragment: 'balances', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'bond(uint256,uint256,bytes)', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'bond(uint256)', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'claim(uint256)', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'claim()', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getRoleAdmin', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'grantRole', values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'hasRole', values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'lastClaimedIndex', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'lastUnbondingIndex', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'renounceRole', values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'revokeRole', values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'supportsInterface', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'token', values?: undefined): string;
    encodeFunctionData(functionFragment: 'unbond', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'unbondingPeriod', values?: undefined): string;
    encodeFunctionData(functionFragment: 'unbondings', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balances', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'bond(uint256,uint256,bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'bond(uint256)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claim(uint256)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claim()', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'lastClaimedIndex', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'lastUnbondingIndex', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'unbond', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'unbondingPeriod', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'unbondings', data: BytesLike): Result;
    events: {
        'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment;
        'RoleGranted(bytes32,address,address)': EventFragment;
        'RoleRevoked(bytes32,address,address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment;
}
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface Bond extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BondInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        'bond(uint256,uint256,bytes)'(_amount: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'bond(uint256)'(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'claim(uint256)'(_steps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'claim()'(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lastClaimedIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lastUnbondingIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        unbond(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unbondingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        unbondings(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            createdAt: BigNumber;
            claimableAt: BigNumber;
        }>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    'bond(uint256,uint256,bytes)'(_amount: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'bond(uint256)'(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'claim(uint256)'(_steps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'claim()'(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lastClaimedIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    lastUnbondingIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    token(overrides?: CallOverrides): Promise<string>;
    unbond(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unbondingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    unbondings(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        createdAt: BigNumber;
        claimableAt: BigNumber;
    }>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        'bond(uint256,uint256,bytes)'(_amount: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        'bond(uint256)'(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        'claim(uint256)'(_steps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        'claim()'(overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lastClaimedIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastUnbondingIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        token(overrides?: CallOverrides): Promise<string>;
        unbond(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unbondingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        unbondings(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            createdAt: BigNumber;
            claimableAt: BigNumber;
        }>;
    };
    filters: {
        'RoleAdminChanged(bytes32,bytes32,bytes32)'(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        'RoleGranted(bytes32,address,address)'(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        'RoleRevoked(bytes32,address,address)'(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        'bond(uint256,uint256,bytes)'(_amount: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'bond(uint256)'(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'claim(uint256)'(_steps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'claim()'(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastClaimedIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastUnbondingIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        unbond(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unbondingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        unbondings(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'bond(uint256,uint256,bytes)'(_amount: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'bond(uint256)'(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'claim(uint256)'(_steps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'claim()'(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastClaimedIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUnbondingIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unbond(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unbondingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unbondings(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
