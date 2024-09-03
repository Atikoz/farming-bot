import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Delegation, HistoricalInfo, Pool, Redelegation, Undelegation, Validator } from "./validator";
export declare const protobufPackage = "decimal.validator.v1";
/** QueryValidatorsRequest is request type for the Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method. */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method. */
export interface QueryValidatorRequest {
    /** validator defines the validator address to query for. */
    validator: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method. */
export interface QueryValidatorResponse {
    /** validator defines the validator info. */
    validator: Validator | undefined;
}
/** QueryValidatorDelegationsRequest is request type for the Query/ValidatorDelegations RPC method. */
export interface QueryValidatorDelegationsRequest {
    /** validator defines the validator address to query for. */
    validator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryValidatorDelegationsResponse is response type for the Query/ValidatorDelegations RPC method. */
export interface QueryValidatorDelegationsResponse {
    delegations: Delegation[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryValidatorRedelegationsRequest is required type for the Query/ValidatorRedelegations RPC method. */
export interface QueryValidatorRedelegationsRequest {
    /** validator defines the validator address to query for. */
    validator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryValidatorRedelegationsResponse is response type for the Query/ValidatorRedelegations RPC method. */
export interface QueryValidatorRedelegationsResponse {
    redelegations: Redelegation[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryValidatorUndelegationsRequest is required type for the Query/ValidatorUndelegations RPC method. */
export interface QueryValidatorUndelegationsRequest {
    /** validator defines the validator address to query for. */
    validator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryValidatorUndelegationsResponse is response type for the Query/ValidatorUndelegations RPC method. */
export interface QueryValidatorUndelegationsResponse {
    undelegations: Undelegation[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
    /** delegator defines the delegator address to query for. */
    delegator: string;
    /** validator defines the validator address to query for. */
    validator: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
    /** delegation defines the delegation info of a delegation. */
    delegation: Delegation | undefined;
}
/** QueryRedelegationRequest is request type for the Query/Redelegation RPC method. */
export interface QueryRedelegationRequest {
    /** delegator defines the delegator address to query for. */
    delegator: string;
    /** validator defines the validator address to query for. */
    validator: string;
}
/** QueryDelegationResponse is response type for the Query/Redelegation RPC method. */
export interface QueryRedelegationResponse {
    /** redelegation defines the unbonding information of a delegation. */
    redelegation: Redelegation | undefined;
}
/** QueryUndelegationRequest is request type for the Query/Undelegation RPC method. */
export interface QueryUndelegationRequest {
    /** delegator defines the delegator address to query for. */
    delegator: string;
    /** validator defines the validator address to query for. */
    validator: string;
}
/** QueryDelegationResponse is response type for the Query/Undelegation RPC method. */
export interface QueryUndelegationResponse {
    /** unbond defines the unbonding information of a delegation. */
    unbond: Undelegation | undefined;
}
/** QueryDelegatorDelegationsRequest is request type for the Query/DelegatorDelegations RPC method. */
export interface QueryDelegatorDelegationsRequest {
    /** delegator defines the delegator address to query for. */
    delegator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryDelegatorDelegationsResponse is response type for the Query/DelegatorDelegations RPC method. */
export interface QueryDelegatorDelegationsResponse {
    /** delegations defines all the delegations' info of a delegator. */
    delegations: Delegation[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryDelegatorRedelegationsRequest is request type for the Query/DelegatorRedelegations RPC method. */
export interface QueryDelegatorRedelegationsRequest {
    /** delegator defines the delegator address to query for. */
    delegator: string;
    /** src_validator defines the validator address to redelegate from. */
    srcValidator: string;
    /** dst_validator defines the validator address to redelegate to. */
    dstValidator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryDelegatorRedelegationsResponse is response type for the Query/DelegatorRedelegations RPC method. */
export interface QueryDelegatorRedelegationsResponse {
    redelegations: Redelegation[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryDelegatorUndelegationsRequest is request type for the Query/DelegatorUndelegations RPC method. */
export interface QueryDelegatorUndelegationsRequest {
    /** delegator defines the delegator address to query for. */
    delegator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryDelegatorUndelegationsResponse is response type for the Query/DelegatorUndelegations RPC method. */
export interface QueryDelegatorUndelegationsResponse {
    undelegations: Undelegation[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryDelegatorValidatorsRequest is request type for the Query/DelegatorValidators RPC method. */
export interface QueryDelegatorValidatorsRequest {
    /** delegator defines the delegator address to query for. */
    delegator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryDelegatorValidatorsResponse is response type for the Query/DelegatorValidators RPC method. */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators' info of a delegator. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryDelegatorValidatorRequest is request type for the Query/DelegatorValidator RPC method. */
export interface QueryDelegatorValidatorRequest {
    /** delegator defines the delegator address to query for. */
    delegator: string;
    /** validator defines the validator address to query for. */
    validator: string;
}
/** QueryDelegatorValidatorResponse response type for the Query/DelegatorValidator RPC method. */
export interface QueryDelegatorValidatorResponse {
    /** validator defines the validator info. */
    validator: Validator | undefined;
}
/** QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC method. */
export interface QueryHistoricalInfoRequest {
    /** height defines at which height to query the historical info. */
    height: number;
}
/** QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC method. */
export interface QueryHistoricalInfoResponse {
    /** hist defines the historical info at the given height. */
    hist: HistoricalInfo | undefined;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool defines the pool info. */
    pool: Pool | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export declare const QueryValidatorsRequest: {
    encode(message: QueryValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest;
    fromJSON(object: any): QueryValidatorsRequest;
    toJSON(message: QueryValidatorsRequest): unknown;
    fromPartial<I extends {
        status?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        status?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryValidatorsRequest>]: never; }>(object: I): QueryValidatorsRequest;
};
export declare const QueryValidatorsResponse: {
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        validators?: ({
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[] & ({
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["validators"][number]["consensusPubkey"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & { [K_1 in Exclude<keyof I["validators"][number]["description"], keyof import("./validator").Description>]: never; }) | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & { [K_2 in Exclude<keyof I["validators"][number], keyof Validator>]: never; })[] & { [K_3 in Exclude<keyof I["validators"], keyof {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_4 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof QueryValidatorsResponse>]: never; }>(object: I): QueryValidatorsResponse;
};
export declare const QueryValidatorRequest: {
    encode(message: QueryValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest;
    fromJSON(object: any): QueryValidatorRequest;
    toJSON(message: QueryValidatorRequest): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
    } & {
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, "validator">]: never; }>(object: I): QueryValidatorRequest;
};
export declare const QueryValidatorResponse: {
    encode(message: QueryValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponse;
    fromJSON(object: any): QueryValidatorResponse;
    toJSON(message: QueryValidatorResponse): unknown;
    fromPartial<I extends {
        validator?: {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } | undefined;
    } & {
        validator?: ({
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["validator"]["consensusPubkey"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & { [K_1 in Exclude<keyof I["validator"]["description"], keyof import("./validator").Description>]: never; }) | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & { [K_2 in Exclude<keyof I["validator"], keyof Validator>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "validator">]: never; }>(object: I): QueryValidatorResponse;
};
export declare const QueryValidatorDelegationsRequest: {
    encode(message: QueryValidatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsRequest;
    fromJSON(object: any): QueryValidatorDelegationsRequest;
    toJSON(message: QueryValidatorDelegationsRequest): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        validator?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryValidatorDelegationsRequest>]: never; }>(object: I): QueryValidatorDelegationsRequest;
};
export declare const QueryValidatorDelegationsResponse: {
    encode(message: QueryValidatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsResponse;
    fromJSON(object: any): QueryValidatorDelegationsResponse;
    toJSON(message: QueryValidatorDelegationsResponse): unknown;
    fromPartial<I extends {
        delegations?: {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        delegations?: ({
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] & ({
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        } & {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: ({
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } & {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K in Exclude<keyof I["delegations"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["delegations"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["delegations"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["delegations"][number], keyof Delegation>]: never; })[] & { [K_4 in Exclude<keyof I["delegations"], keyof {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_5 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof QueryValidatorDelegationsResponse>]: never; }>(object: I): QueryValidatorDelegationsResponse;
};
export declare const QueryValidatorRedelegationsRequest: {
    encode(message: QueryValidatorRedelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRedelegationsRequest;
    fromJSON(object: any): QueryValidatorRedelegationsRequest;
    toJSON(message: QueryValidatorRedelegationsRequest): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        validator?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryValidatorRedelegationsRequest>]: never; }>(object: I): QueryValidatorRedelegationsRequest;
};
export declare const QueryValidatorRedelegationsResponse: {
    encode(message: QueryValidatorRedelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRedelegationsResponse;
    fromJSON(object: any): QueryValidatorRedelegationsResponse;
    toJSON(message: QueryValidatorRedelegationsResponse): unknown;
    fromPartial<I extends {
        redelegations?: {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        redelegations?: ({
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] & ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            } & {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: ({
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } & {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                    subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["redelegations"][number]["entries"][number], keyof import("./validator").RedelegationEntry>]: never; })[] & { [K_4 in Exclude<keyof I["redelegations"][number]["entries"], keyof {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["redelegations"][number], keyof Redelegation>]: never; })[] & { [K_6 in Exclude<keyof I["redelegations"], keyof {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_7 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof QueryValidatorRedelegationsResponse>]: never; }>(object: I): QueryValidatorRedelegationsResponse;
};
export declare const QueryValidatorUndelegationsRequest: {
    encode(message: QueryValidatorUndelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUndelegationsRequest;
    fromJSON(object: any): QueryValidatorUndelegationsRequest;
    toJSON(message: QueryValidatorUndelegationsRequest): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        validator?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryValidatorUndelegationsRequest>]: never; }>(object: I): QueryValidatorUndelegationsRequest;
};
export declare const QueryValidatorUndelegationsResponse: {
    encode(message: QueryValidatorUndelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUndelegationsResponse;
    fromJSON(object: any): QueryValidatorUndelegationsResponse;
    toJSON(message: QueryValidatorUndelegationsResponse): unknown;
    fromPartial<I extends {
        undelegations?: {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        undelegations?: ({
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] & ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            } & {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: ({
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } & {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                    subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["undelegations"][number]["entries"][number], keyof import("./validator").UndelegationEntry>]: never; })[] & { [K_4 in Exclude<keyof I["undelegations"][number]["entries"], keyof {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["undelegations"][number], keyof Undelegation>]: never; })[] & { [K_6 in Exclude<keyof I["undelegations"], keyof {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_7 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof QueryValidatorUndelegationsResponse>]: never; }>(object: I): QueryValidatorUndelegationsResponse;
};
export declare const QueryDelegationRequest: {
    encode(message: QueryDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRequest;
    fromJSON(object: any): QueryDelegationRequest;
    toJSON(message: QueryDelegationRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryDelegationRequest>]: never; }>(object: I): QueryDelegationRequest;
};
export declare const QueryDelegationResponse: {
    encode(message: QueryDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationResponse;
    fromJSON(object: any): QueryDelegationResponse;
    toJSON(message: QueryDelegationResponse): unknown;
    fromPartial<I extends {
        delegation?: {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        delegation?: ({
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        } & {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: ({
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } & {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K in Exclude<keyof I["delegation"]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["delegation"]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["delegation"]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["delegation"], keyof Delegation>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "delegation">]: never; }>(object: I): QueryDelegationResponse;
};
export declare const QueryRedelegationRequest: {
    encode(message: QueryRedelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationRequest;
    fromJSON(object: any): QueryRedelegationRequest;
    toJSON(message: QueryRedelegationRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryRedelegationRequest>]: never; }>(object: I): QueryRedelegationRequest;
};
export declare const QueryRedelegationResponse: {
    encode(message: QueryRedelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationResponse;
    fromJSON(object: any): QueryRedelegationResponse;
    toJSON(message: QueryRedelegationResponse): unknown;
    fromPartial<I extends {
        redelegation?: {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        redelegation?: ({
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] & ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            } & {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: ({
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } & {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K in Exclude<keyof I["redelegation"]["entries"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                    subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["redelegation"]["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["redelegation"]["entries"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["redelegation"]["entries"][number], keyof import("./validator").RedelegationEntry>]: never; })[] & { [K_4 in Exclude<keyof I["redelegation"]["entries"], keyof {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["redelegation"], keyof Redelegation>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, "redelegation">]: never; }>(object: I): QueryRedelegationResponse;
};
export declare const QueryUndelegationRequest: {
    encode(message: QueryUndelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUndelegationRequest;
    fromJSON(object: any): QueryUndelegationRequest;
    toJSON(message: QueryUndelegationRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryUndelegationRequest>]: never; }>(object: I): QueryUndelegationRequest;
};
export declare const QueryUndelegationResponse: {
    encode(message: QueryUndelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUndelegationResponse;
    fromJSON(object: any): QueryUndelegationResponse;
    toJSON(message: QueryUndelegationResponse): unknown;
    fromPartial<I extends {
        unbond?: {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        unbond?: ({
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] & ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            } & {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: ({
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } & {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K in Exclude<keyof I["unbond"]["entries"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                    subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["unbond"]["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["unbond"]["entries"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["unbond"]["entries"][number], keyof import("./validator").UndelegationEntry>]: never; })[] & { [K_4 in Exclude<keyof I["unbond"]["entries"], keyof {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["unbond"], keyof Undelegation>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, "unbond">]: never; }>(object: I): QueryUndelegationResponse;
};
export declare const QueryDelegatorDelegationsRequest: {
    encode(message: QueryDelegatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest;
    fromJSON(object: any): QueryDelegatorDelegationsRequest;
    toJSON(message: QueryDelegatorDelegationsRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryDelegatorDelegationsRequest>]: never; }>(object: I): QueryDelegatorDelegationsRequest;
};
export declare const QueryDelegatorDelegationsResponse: {
    encode(message: QueryDelegatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse;
    fromJSON(object: any): QueryDelegatorDelegationsResponse;
    toJSON(message: QueryDelegatorDelegationsResponse): unknown;
    fromPartial<I extends {
        delegations?: {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        delegations?: ({
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] & ({
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        } & {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: ({
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } & {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K in Exclude<keyof I["delegations"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["delegations"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["delegations"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["delegations"][number], keyof Delegation>]: never; })[] & { [K_4 in Exclude<keyof I["delegations"], keyof {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_5 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof QueryDelegatorDelegationsResponse>]: never; }>(object: I): QueryDelegatorDelegationsResponse;
};
export declare const QueryDelegatorRedelegationsRequest: {
    encode(message: QueryDelegatorRedelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorRedelegationsRequest;
    fromJSON(object: any): QueryDelegatorRedelegationsRequest;
    toJSON(message: QueryDelegatorRedelegationsRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        srcValidator?: string | undefined;
        dstValidator?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        srcValidator?: string | undefined;
        dstValidator?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryDelegatorRedelegationsRequest>]: never; }>(object: I): QueryDelegatorRedelegationsRequest;
};
export declare const QueryDelegatorRedelegationsResponse: {
    encode(message: QueryDelegatorRedelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorRedelegationsResponse;
    fromJSON(object: any): QueryDelegatorRedelegationsResponse;
    toJSON(message: QueryDelegatorRedelegationsResponse): unknown;
    fromPartial<I extends {
        redelegations?: {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        redelegations?: ({
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] & ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            } & {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: ({
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } & {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                    subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["redelegations"][number]["entries"][number], keyof import("./validator").RedelegationEntry>]: never; })[] & { [K_4 in Exclude<keyof I["redelegations"][number]["entries"], keyof {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["redelegations"][number], keyof Redelegation>]: never; })[] & { [K_6 in Exclude<keyof I["redelegations"], keyof {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_7 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof QueryDelegatorRedelegationsResponse>]: never; }>(object: I): QueryDelegatorRedelegationsResponse;
};
export declare const QueryDelegatorUndelegationsRequest: {
    encode(message: QueryDelegatorUndelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUndelegationsRequest;
    fromJSON(object: any): QueryDelegatorUndelegationsRequest;
    toJSON(message: QueryDelegatorUndelegationsRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryDelegatorUndelegationsRequest>]: never; }>(object: I): QueryDelegatorUndelegationsRequest;
};
export declare const QueryDelegatorUndelegationsResponse: {
    encode(message: QueryDelegatorUndelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUndelegationsResponse;
    fromJSON(object: any): QueryDelegatorUndelegationsResponse;
    toJSON(message: QueryDelegatorUndelegationsResponse): unknown;
    fromPartial<I extends {
        undelegations?: {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        undelegations?: ({
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] & ({
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            } & {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: ({
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } & {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                    subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["undelegations"][number]["entries"][number], keyof import("./validator").UndelegationEntry>]: never; })[] & { [K_4 in Exclude<keyof I["undelegations"][number]["entries"], keyof {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["undelegations"][number], keyof Undelegation>]: never; })[] & { [K_6 in Exclude<keyof I["undelegations"], keyof {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_7 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof QueryDelegatorUndelegationsResponse>]: never; }>(object: I): QueryDelegatorUndelegationsResponse;
};
export declare const QueryDelegatorValidatorsRequest: {
    encode(message: QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest;
    fromJSON(object: any): QueryDelegatorValidatorsRequest;
    toJSON(message: QueryDelegatorValidatorsRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryDelegatorValidatorsRequest>]: never; }>(object: I): QueryDelegatorValidatorsRequest;
};
export declare const QueryDelegatorValidatorsResponse: {
    encode(message: QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse;
    fromJSON(object: any): QueryDelegatorValidatorsResponse;
    toJSON(message: QueryDelegatorValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        validators?: ({
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[] & ({
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["validators"][number]["consensusPubkey"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & { [K_1 in Exclude<keyof I["validators"][number]["description"], keyof import("./validator").Description>]: never; }) | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & { [K_2 in Exclude<keyof I["validators"][number], keyof Validator>]: never; })[] & { [K_3 in Exclude<keyof I["validators"], keyof {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_4 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof QueryDelegatorValidatorsResponse>]: never; }>(object: I): QueryDelegatorValidatorsResponse;
};
export declare const QueryDelegatorValidatorRequest: {
    encode(message: QueryDelegatorValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest;
    fromJSON(object: any): QueryDelegatorValidatorRequest;
    toJSON(message: QueryDelegatorValidatorRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryDelegatorValidatorRequest>]: never; }>(object: I): QueryDelegatorValidatorRequest;
};
export declare const QueryDelegatorValidatorResponse: {
    encode(message: QueryDelegatorValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorResponse;
    fromJSON(object: any): QueryDelegatorValidatorResponse;
    toJSON(message: QueryDelegatorValidatorResponse): unknown;
    fromPartial<I extends {
        validator?: {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } | undefined;
    } & {
        validator?: ({
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["validator"]["consensusPubkey"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & { [K_1 in Exclude<keyof I["validator"]["description"], keyof import("./validator").Description>]: never; }) | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & { [K_2 in Exclude<keyof I["validator"], keyof Validator>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "validator">]: never; }>(object: I): QueryDelegatorValidatorResponse;
};
export declare const QueryHistoricalInfoRequest: {
    encode(message: QueryHistoricalInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest;
    fromJSON(object: any): QueryHistoricalInfoRequest;
    toJSON(message: QueryHistoricalInfoRequest): unknown;
    fromPartial<I extends {
        height?: number | undefined;
    } & {
        height?: number | undefined;
    } & { [K in Exclude<keyof I, "height">]: never; }>(object: I): QueryHistoricalInfoRequest;
};
export declare const QueryHistoricalInfoResponse: {
    encode(message: QueryHistoricalInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoResponse;
    fromJSON(object: any): QueryHistoricalInfoResponse;
    toJSON(message: QueryHistoricalInfoResponse): unknown;
    fromPartial<I extends {
        hist?: {
            header?: {
                version?: {
                    block?: {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } | undefined;
                    app?: {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            valset?: {
                operatorAddress?: string | undefined;
                rewardAddress?: string | undefined;
                consensusPubkey?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    securityContact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                commission?: string | undefined;
                status?: import("./validator").BondStatus | undefined;
                online?: boolean | undefined;
                jailed?: boolean | undefined;
                unbondingHeight?: number | undefined;
                unbondingTime?: Date | undefined;
                rewards?: string | undefined;
                totalRewards?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        hist?: ({
            header?: {
                version?: {
                    block?: {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } | undefined;
                    app?: {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            valset?: {
                operatorAddress?: string | undefined;
                rewardAddress?: string | undefined;
                consensusPubkey?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    securityContact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                commission?: string | undefined;
                status?: import("./validator").BondStatus | undefined;
                online?: boolean | undefined;
                jailed?: boolean | undefined;
                unbondingHeight?: number | undefined;
                unbondingTime?: Date | undefined;
                rewards?: string | undefined;
                totalRewards?: string | undefined;
            }[] | undefined;
        } & {
            header?: ({
                version?: {
                    block?: {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } | undefined;
                    app?: {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } | undefined;
                    app?: {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } | undefined;
                } & {
                    block?: ({
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } & {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } & { [K in Exclude<keyof I["hist"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                    app?: ({
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } & {
                        high?: number | undefined;
                        low?: number | undefined;
                        unsigned?: boolean | undefined;
                        add?: ((addend: string | number | Long) => Long) | undefined;
                        and?: ((other: string | number | Long) => Long) | undefined;
                        compare?: ((other: string | number | Long) => number) | undefined;
                        comp?: ((other: string | number | Long) => number) | undefined;
                        divide?: ((divisor: string | number | Long) => Long) | undefined;
                        div?: ((divisor: string | number | Long) => Long) | undefined;
                        equals?: ((other: string | number | Long) => boolean) | undefined;
                        eq?: ((other: string | number | Long) => boolean) | undefined;
                        getHighBits?: (() => number) | undefined;
                        getHighBitsUnsigned?: (() => number) | undefined;
                        getLowBits?: (() => number) | undefined;
                        getLowBitsUnsigned?: (() => number) | undefined;
                        getNumBitsAbs?: (() => number) | undefined;
                        greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                        gt?: ((other: string | number | Long) => boolean) | undefined;
                        greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        gte?: ((other: string | number | Long) => boolean) | undefined;
                        ge?: ((other: string | number | Long) => boolean) | undefined;
                        isEven?: (() => boolean) | undefined;
                        isNegative?: (() => boolean) | undefined;
                        isOdd?: (() => boolean) | undefined;
                        isPositive?: (() => boolean) | undefined;
                        isZero?: (() => boolean) | undefined;
                        eqz?: (() => boolean) | undefined;
                        lessThan?: ((other: string | number | Long) => boolean) | undefined;
                        lt?: ((other: string | number | Long) => boolean) | undefined;
                        lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                        lte?: ((other: string | number | Long) => boolean) | undefined;
                        le?: ((other: string | number | Long) => boolean) | undefined;
                        modulo?: ((other: string | number | Long) => Long) | undefined;
                        mod?: ((other: string | number | Long) => Long) | undefined;
                        rem?: ((other: string | number | Long) => Long) | undefined;
                        multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                        mul?: ((multiplier: string | number | Long) => Long) | undefined;
                        negate?: (() => Long) | undefined;
                        neg?: (() => Long) | undefined;
                        not?: (() => Long) | undefined;
                        countLeadingZeros?: (() => number) | undefined;
                        clz?: (() => number) | undefined;
                        countTrailingZeros?: (() => number) | undefined;
                        ctz?: (() => number) | undefined;
                        notEquals?: ((other: string | number | Long) => boolean) | undefined;
                        neq?: ((other: string | number | Long) => boolean) | undefined;
                        ne?: ((other: string | number | Long) => boolean) | undefined;
                        or?: ((other: string | number | Long) => Long) | undefined;
                        shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                        shl?: ((numBits: number | Long) => Long) | undefined;
                        shiftRight?: ((numBits: number | Long) => Long) | undefined;
                        shr?: ((numBits: number | Long) => Long) | undefined;
                        shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                        shru?: ((numBits: number | Long) => Long) | undefined;
                        shr_u?: ((numBits: number | Long) => Long) | undefined;
                        rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                        rotl?: ((numBits: number | Long) => Long) | undefined;
                        rotateRight?: ((numBits: number | Long) => Long) | undefined;
                        rotr?: ((numBits: number | Long) => Long) | undefined;
                        subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                        sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                        toInt?: (() => number) | undefined;
                        toNumber?: (() => number) | undefined;
                        toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                        toBytesLE?: (() => number[]) | undefined;
                        toBytesBE?: (() => number[]) | undefined;
                        toSigned?: (() => Long) | undefined;
                        toString?: ((radix?: number | undefined) => string) | undefined;
                        toUnsigned?: (() => Long) | undefined;
                        xor?: ((other: string | number | Long) => Long) | undefined;
                    } & { [K_1 in Exclude<keyof I["hist"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["hist"]["header"]["version"], keyof import("../../tendermint/version/types").Consensus>]: never; }) | undefined;
                chainId?: string | undefined;
                height?: ({
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & { [K_3 in Exclude<keyof I["hist"]["header"]["height"], keyof Long>]: never; }) | undefined;
                time?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & { [K_4 in Exclude<keyof I["hist"]["header"]["time"], keyof import("../../google/protobuf/timestamp").Timestamp>]: never; }) | undefined;
                lastBlockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_5 in Exclude<keyof I["hist"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["hist"]["header"]["lastBlockId"], keyof import("../../tendermint/types/types").BlockID>]: never; }) | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & { [K_7 in Exclude<keyof I["hist"]["header"], keyof import("../../tendermint/types/types").Header>]: never; }) | undefined;
            valset?: ({
                operatorAddress?: string | undefined;
                rewardAddress?: string | undefined;
                consensusPubkey?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    securityContact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                commission?: string | undefined;
                status?: import("./validator").BondStatus | undefined;
                online?: boolean | undefined;
                jailed?: boolean | undefined;
                unbondingHeight?: number | undefined;
                unbondingTime?: Date | undefined;
                rewards?: string | undefined;
                totalRewards?: string | undefined;
            }[] & ({
                operatorAddress?: string | undefined;
                rewardAddress?: string | undefined;
                consensusPubkey?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    securityContact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                commission?: string | undefined;
                status?: import("./validator").BondStatus | undefined;
                online?: boolean | undefined;
                jailed?: boolean | undefined;
                unbondingHeight?: number | undefined;
                unbondingTime?: Date | undefined;
                rewards?: string | undefined;
                totalRewards?: string | undefined;
            } & {
                operatorAddress?: string | undefined;
                rewardAddress?: string | undefined;
                consensusPubkey?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_8 in Exclude<keyof I["hist"]["valset"][number]["consensusPubkey"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
                description?: ({
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    securityContact?: string | undefined;
                    details?: string | undefined;
                } & {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    securityContact?: string | undefined;
                    details?: string | undefined;
                } & { [K_9 in Exclude<keyof I["hist"]["valset"][number]["description"], keyof import("./validator").Description>]: never; }) | undefined;
                commission?: string | undefined;
                status?: import("./validator").BondStatus | undefined;
                online?: boolean | undefined;
                jailed?: boolean | undefined;
                unbondingHeight?: number | undefined;
                unbondingTime?: Date | undefined;
                rewards?: string | undefined;
                totalRewards?: string | undefined;
            } & { [K_10 in Exclude<keyof I["hist"]["valset"][number], keyof Validator>]: never; })[] & { [K_11 in Exclude<keyof I["hist"]["valset"], keyof {
                operatorAddress?: string | undefined;
                rewardAddress?: string | undefined;
                consensusPubkey?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    securityContact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                commission?: string | undefined;
                status?: import("./validator").BondStatus | undefined;
                online?: boolean | undefined;
                jailed?: boolean | undefined;
                unbondingHeight?: number | undefined;
                unbondingTime?: Date | undefined;
                rewards?: string | undefined;
                totalRewards?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["hist"], keyof HistoricalInfo>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I, "hist">]: never; }>(object: I): QueryHistoricalInfoResponse;
};
export declare const QueryPoolRequest: {
    encode(_: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(_: any): QueryPoolRequest;
    toJSON(_: QueryPoolRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
            notBondedTokens?: string | undefined;
            bondedTokens?: string | undefined;
        } | undefined;
    } & {
        pool?: ({
            notBondedTokens?: string | undefined;
            bondedTokens?: string | undefined;
        } & {
            notBondedTokens?: string | undefined;
            bondedTokens?: string | undefined;
        } & { [K in Exclude<keyof I["pool"], keyof Pool>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "pool">]: never; }>(object: I): QueryPoolResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            maxValidators?: number | undefined;
            maxDelegations?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            redelegationTime?: {
                seconds?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                nanos?: number | undefined;
            } | undefined;
            undelegationTime?: {
                seconds?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        params?: ({
            maxValidators?: number | undefined;
            maxDelegations?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            redelegationTime?: {
                seconds?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                nanos?: number | undefined;
            } | undefined;
            undelegationTime?: {
                seconds?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            maxValidators?: number | undefined;
            maxDelegations?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            redelegationTime?: ({
                seconds?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: ({
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & { [K in Exclude<keyof I["params"]["redelegationTime"]["seconds"], keyof Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_1 in Exclude<keyof I["params"]["redelegationTime"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
            undelegationTime?: ({
                seconds?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: ({
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & { [K_2 in Exclude<keyof I["params"]["undelegationTime"]["seconds"], keyof Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_3 in Exclude<keyof I["params"]["undelegationTime"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "params">]: never; }>(object: I): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Validators queries all validators that match the given status. */
    Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    /** Validator queries validator info for given validator address. */
    Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    /** ValidatorDelegations queries delegate info for given validator. */
    ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    /** ValidatorRedelegations queries redelegations of a validator. */
    ValidatorRedelegations(request: QueryValidatorRedelegationsRequest): Promise<QueryValidatorRedelegationsResponse>;
    /** ValidatorUndelegations queries undelegations of a validator. */
    ValidatorUndelegations(request: QueryValidatorUndelegationsRequest): Promise<QueryValidatorUndelegationsResponse>;
    /** Delegation queries delegate info for given validator delegator pair. */
    Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    /** Redelegation queries redelegate info for given validator delegator pair. */
    Redelegation(request: QueryRedelegationRequest): Promise<QueryRedelegationResponse>;
    /** Undelegation queries undelegate info for given validator delegator pair. */
    Undelegation(request: QueryUndelegationRequest): Promise<QueryUndelegationResponse>;
    /** DelegatorDelegations queries all delegations of a given delegator address. */
    DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    /** DelegatorRedelegations queries all redelegations of a given delegator address. */
    DelegatorRedelegations(request: QueryDelegatorRedelegationsRequest): Promise<QueryDelegatorRedelegationsResponse>;
    /** DelegatorUndDelegations queries all undelegations of a given delegator address. */
    DelegatorUndelegations(request: QueryDelegatorUndelegationsRequest): Promise<QueryDelegatorUndelegationsResponse>;
    /** DelegatorValidators queries all validators info for given delegator address. */
    DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    /** DelegatorValidator queries validator info for given delegator validator pair. */
    DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    /** HistoricalInfo queries the historical info for given height. */
    HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    /** Pool queries the pool info. */
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Params queries the module params. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    ValidatorRedelegations(request: QueryValidatorRedelegationsRequest): Promise<QueryValidatorRedelegationsResponse>;
    ValidatorUndelegations(request: QueryValidatorUndelegationsRequest): Promise<QueryValidatorUndelegationsResponse>;
    Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    Redelegation(request: QueryRedelegationRequest): Promise<QueryRedelegationResponse>;
    Undelegation(request: QueryUndelegationRequest): Promise<QueryUndelegationResponse>;
    DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    DelegatorRedelegations(request: QueryDelegatorRedelegationsRequest): Promise<QueryDelegatorRedelegationsResponse>;
    DelegatorUndelegations(request: QueryDelegatorUndelegationsRequest): Promise<QueryDelegatorUndelegationsResponse>;
    DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
