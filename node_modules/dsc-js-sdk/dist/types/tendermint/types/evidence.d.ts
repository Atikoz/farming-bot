import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Vote, LightBlock } from "../../tendermint/types/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator } from "../../tendermint/types/validator";
export declare const protobufPackage = "tendermint.types";
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence | undefined;
    lightClientAttackEvidence?: LightClientAttackEvidence | undefined;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    voteA?: Vote;
    voteB?: Vote;
    totalVotingPower: Long;
    validatorPower: Long;
    timestamp?: Timestamp;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflictingBlock?: LightBlock;
    commonHeight: Long;
    byzantineValidators: Validator[];
    totalVotingPower: Long;
    timestamp?: Timestamp;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial<I extends {
        duplicateVoteEvidence?: {
            voteA?: {
                type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            voteB?: {
                type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            totalVotingPower?: string | number | Long | undefined;
            validatorPower?: string | number | Long | undefined;
            timestamp?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        lightClientAttackEvidence?: {
            conflictingBlock?: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | Long | undefined;
                            app?: string | number | Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long | undefined;
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
                    commit?: {
                        height?: string | number | Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | Long | undefined;
                } | undefined;
            } | undefined;
            commonHeight?: string | number | Long | undefined;
            byzantineValidators?: {
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long | undefined;
                proposerPriority?: string | number | Long | undefined;
            }[] | undefined;
            totalVotingPower?: string | number | Long | undefined;
            timestamp?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        duplicateVoteEvidence?: ({
            voteA?: {
                type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            voteB?: {
                type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            totalVotingPower?: string | number | Long | undefined;
            validatorPower?: string | number | Long | undefined;
            timestamp?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            voteA?: ({
                type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["height"], keyof Long>, never>) | undefined;
                round?: number | undefined;
                blockId?: ({
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
                    } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["timestamp"], keyof Timestamp>, never>) | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"], keyof Vote>, never>) | undefined;
            voteB?: ({
                type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["height"], keyof Long>, never>) | undefined;
                round?: number | undefined;
                blockId?: ({
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
                    } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["timestamp"], keyof Timestamp>, never>) | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"], keyof Vote>, never>) | undefined;
            totalVotingPower?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["totalVotingPower"], keyof Long>, never>) | undefined;
            validatorPower?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["validatorPower"], keyof Long>, never>) | undefined;
            timestamp?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["timestamp"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["duplicateVoteEvidence"], keyof DuplicateVoteEvidence>, never>) | undefined;
        lightClientAttackEvidence?: ({
            conflictingBlock?: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | Long | undefined;
                            app?: string | number | Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long | undefined;
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
                    commit?: {
                        height?: string | number | Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | Long | undefined;
                } | undefined;
            } | undefined;
            commonHeight?: string | number | Long | undefined;
            byzantineValidators?: {
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long | undefined;
                proposerPriority?: string | number | Long | undefined;
            }[] | undefined;
            totalVotingPower?: string | number | Long | undefined;
            timestamp?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            conflictingBlock?: ({
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | Long | undefined;
                            app?: string | number | Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long | undefined;
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
                    commit?: {
                        height?: string | number | Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | Long | undefined;
                } | undefined;
            } & {
                signedHeader?: ({
                    header?: {
                        version?: {
                            block?: string | number | Long | undefined;
                            app?: string | number | Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long | undefined;
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
                    commit?: {
                        height?: string | number | Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    header?: ({
                        version?: {
                            block?: string | number | Long | undefined;
                            app?: string | number | Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long | undefined;
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
                            block?: string | number | Long | undefined;
                            app?: string | number | Long | undefined;
                        } & {
                            block?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>, never>) | undefined;
                            app?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>, never>) | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                        chainId?: string | undefined;
                        height?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>, never>) | undefined;
                        time?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["time"], keyof Timestamp>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("../../tendermint/types/types").Header>, never>) | undefined;
                    commit?: ({
                        height?: string | number | Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } & {
                        height?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>, never>) | undefined;
                        round?: number | undefined;
                        blockId?: ({
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
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                        signatures?: ({
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] & ({
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                            blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("../../tendermint/types/types").Commit>, never>) | undefined;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("../../tendermint/types/types").SignedHeader>, never>) | undefined;
                validatorSet?: ({
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | Long | undefined;
                } & {
                    validators?: ({
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    }[] & ({
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    } & {
                        address?: Uint8Array | undefined;
                        pubKey?: ({
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                        votingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>, never>) | undefined;
                        proposerPriority?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    }[]>, never>) | undefined;
                    proposer?: ({
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long | undefined;
                        proposerPriority?: string | number | Long | undefined;
                    } & {
                        address?: Uint8Array | undefined;
                        pubKey?: ({
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                        votingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>, never>) | undefined;
                        proposerPriority?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof Validator>, never>) | undefined;
                    totalVotingPower?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>, never>) | undefined;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("../../tendermint/types/validator").ValidatorSet>, never>) | undefined;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"], keyof LightBlock>, never>) | undefined;
            commonHeight?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["commonHeight"], keyof Long>, never>) | undefined;
            byzantineValidators?: ({
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long | undefined;
                proposerPriority?: string | number | Long | undefined;
            }[] & ({
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long | undefined;
                proposerPriority?: string | number | Long | undefined;
            } & {
                address?: Uint8Array | undefined;
                pubKey?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                votingPower?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long>, never>) | undefined;
                proposerPriority?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long>, never>) | undefined;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long | undefined;
                proposerPriority?: string | number | Long | undefined;
            }[]>, never>) | undefined;
            totalVotingPower?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["totalVotingPower"], keyof Long>, never>) | undefined;
            timestamp?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["timestamp"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["lightClientAttackEvidence"], keyof LightClientAttackEvidence>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Evidence>, never>>(object: I): Evidence;
};
export declare const DuplicateVoteEvidence: {
    encode(message: DuplicateVoteEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromJSON(object: any): DuplicateVoteEvidence;
    toJSON(message: DuplicateVoteEvidence): unknown;
    fromPartial<I extends {
        voteA?: {
            type?: import("../../tendermint/types/types").SignedMsgType | undefined;
            height?: string | number | Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        voteB?: {
            type?: import("../../tendermint/types/types").SignedMsgType | undefined;
            height?: string | number | Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        totalVotingPower?: string | number | Long | undefined;
        validatorPower?: string | number | Long | undefined;
        timestamp?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        voteA?: ({
            type?: import("../../tendermint/types/types").SignedMsgType | undefined;
            height?: string | number | Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../../tendermint/types/types").SignedMsgType | undefined;
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["voteA"]["height"], keyof Long>, never>) | undefined;
            round?: number | undefined;
            blockId?: ({
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
                } & Record<Exclude<keyof I["voteA"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["voteA"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["voteA"]["timestamp"], keyof Timestamp>, never>) | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["voteA"], keyof Vote>, never>) | undefined;
        voteB?: ({
            type?: import("../../tendermint/types/types").SignedMsgType | undefined;
            height?: string | number | Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../../tendermint/types/types").SignedMsgType | undefined;
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["voteB"]["height"], keyof Long>, never>) | undefined;
            round?: number | undefined;
            blockId?: ({
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
                } & Record<Exclude<keyof I["voteB"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["voteB"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["voteB"]["timestamp"], keyof Timestamp>, never>) | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["voteB"], keyof Vote>, never>) | undefined;
        totalVotingPower?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["totalVotingPower"], keyof Long>, never>) | undefined;
        validatorPower?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["validatorPower"], keyof Long>, never>) | undefined;
        timestamp?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DuplicateVoteEvidence>, never>>(object: I): DuplicateVoteEvidence;
};
export declare const LightClientAttackEvidence: {
    encode(message: LightClientAttackEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromJSON(object: any): LightClientAttackEvidence;
    toJSON(message: LightClientAttackEvidence): unknown;
    fromPartial<I extends {
        conflictingBlock?: {
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string | number | Long | undefined;
                        app?: string | number | Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | Long | undefined;
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
                commit?: {
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            validatorSet?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long | undefined;
            } | undefined;
        } | undefined;
        commonHeight?: string | number | Long | undefined;
        byzantineValidators?: {
            address?: Uint8Array | undefined;
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long | undefined;
            proposerPriority?: string | number | Long | undefined;
        }[] | undefined;
        totalVotingPower?: string | number | Long | undefined;
        timestamp?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        conflictingBlock?: ({
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string | number | Long | undefined;
                        app?: string | number | Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | Long | undefined;
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
                commit?: {
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            validatorSet?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long | undefined;
            } | undefined;
        } & {
            signedHeader?: ({
                header?: {
                    version?: {
                        block?: string | number | Long | undefined;
                        app?: string | number | Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | Long | undefined;
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
                commit?: {
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                header?: ({
                    version?: {
                        block?: string | number | Long | undefined;
                        app?: string | number | Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | Long | undefined;
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
                        block?: string | number | Long | undefined;
                        app?: string | number | Long | undefined;
                    } & {
                        block?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>, never>) | undefined;
                        app?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                    chainId?: string | undefined;
                    height?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>, never>) | undefined;
                    time?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["time"], keyof Timestamp>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"], keyof import("../../tendermint/types/types").Header>, never>) | undefined;
                commit?: ({
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    height?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>, never>) | undefined;
                    round?: number | undefined;
                    blockId?: ({
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
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                    signatures?: ({
                        blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] & ({
                        blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                        blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"], keyof import("../../tendermint/types/types").Commit>, never>) | undefined;
            } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"], keyof import("../../tendermint/types/types").SignedHeader>, never>) | undefined;
            validatorSet?: ({
                validators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long | undefined;
            } & {
                validators?: ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] & ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pubKey?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                    votingPower?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>, never>) | undefined;
                    proposerPriority?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>, never>) | undefined;
                } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"], keyof {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[]>, never>) | undefined;
                proposer?: ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pubKey?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                    votingPower?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>, never>) | undefined;
                    proposerPriority?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>, never>) | undefined;
                } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["proposer"], keyof Validator>, never>) | undefined;
                totalVotingPower?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>, never>) | undefined;
            } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"], keyof import("../../tendermint/types/validator").ValidatorSet>, never>) | undefined;
        } & Record<Exclude<keyof I["conflictingBlock"], keyof LightBlock>, never>) | undefined;
        commonHeight?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["commonHeight"], keyof Long>, never>) | undefined;
        byzantineValidators?: ({
            address?: Uint8Array | undefined;
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long | undefined;
            proposerPriority?: string | number | Long | undefined;
        }[] & ({
            address?: Uint8Array | undefined;
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long | undefined;
            proposerPriority?: string | number | Long | undefined;
        } & {
            address?: Uint8Array | undefined;
            pubKey?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
            votingPower?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["byzantineValidators"][number]["votingPower"], keyof Long>, never>) | undefined;
            proposerPriority?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["byzantineValidators"][number]["proposerPriority"], keyof Long>, never>) | undefined;
        } & Record<Exclude<keyof I["byzantineValidators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["byzantineValidators"], keyof {
            address?: Uint8Array | undefined;
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long | undefined;
            proposerPriority?: string | number | Long | undefined;
        }[]>, never>) | undefined;
        totalVotingPower?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["totalVotingPower"], keyof Long>, never>) | undefined;
        timestamp?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof LightClientAttackEvidence>, never>>(object: I): LightClientAttackEvidence;
};
export declare const EvidenceList: {
    encode(message: EvidenceList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList;
    fromJSON(object: any): EvidenceList;
    toJSON(message: EvidenceList): unknown;
    fromPartial<I extends {
        evidence?: {
            duplicateVoteEvidence?: {
                voteA?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long | undefined;
                validatorPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            lightClientAttackEvidence?: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long | undefined;
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
                        commit?: {
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        evidence?: ({
            duplicateVoteEvidence?: {
                voteA?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long | undefined;
                validatorPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            lightClientAttackEvidence?: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long | undefined;
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
                        commit?: {
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            duplicateVoteEvidence?: {
                voteA?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long | undefined;
                validatorPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            lightClientAttackEvidence?: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long | undefined;
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
                        commit?: {
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            duplicateVoteEvidence?: ({
                voteA?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long | undefined;
                validatorPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                voteA?: ({
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof Long>, never>) | undefined;
                    round?: number | undefined;
                    blockId?: ({
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
                        } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                    timestamp?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["timestamp"], keyof Timestamp>, never>) | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof Vote>, never>) | undefined;
                voteB?: ({
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof Long>, never>) | undefined;
                    round?: number | undefined;
                    blockId?: ({
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
                        } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                    timestamp?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["timestamp"], keyof Timestamp>, never>) | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof Vote>, never>) | undefined;
                totalVotingPower?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof Long>, never>) | undefined;
                validatorPower?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof Long>, never>) | undefined;
                timestamp?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["timestamp"], keyof Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"], keyof DuplicateVoteEvidence>, never>) | undefined;
            lightClientAttackEvidence?: ({
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long | undefined;
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
                        commit?: {
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                conflictingBlock?: ({
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long | undefined;
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
                        commit?: {
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                    } | undefined;
                } & {
                    signedHeader?: ({
                        header?: {
                            version?: {
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long | undefined;
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
                        commit?: {
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        header?: ({
                            version?: {
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long | undefined;
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
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } & {
                                block?: string | number | (Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long) => Long;
                                    and: (other: string | number | Long) => Long;
                                    compare: (other: string | number | Long) => number;
                                    comp: (other: string | number | Long) => number;
                                    divide: (divisor: string | number | Long) => Long;
                                    div: (divisor: string | number | Long) => Long;
                                    equals: (other: string | number | Long) => boolean;
                                    eq: (other: string | number | Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long) => boolean;
                                    gt: (other: string | number | Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                                    gte: (other: string | number | Long) => boolean;
                                    ge: (other: string | number | Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    eqz: () => boolean;
                                    lessThan: (other: string | number | Long) => boolean;
                                    lt: (other: string | number | Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long) => boolean;
                                    lte: (other: string | number | Long) => boolean;
                                    le: (other: string | number | Long) => boolean;
                                    modulo: (other: string | number | Long) => Long;
                                    mod: (other: string | number | Long) => Long;
                                    rem: (other: string | number | Long) => Long;
                                    multiply: (multiplier: string | number | Long) => Long;
                                    mul: (multiplier: string | number | Long) => Long;
                                    negate: () => Long;
                                    neg: () => Long;
                                    not: () => Long;
                                    countLeadingZeros: () => number;
                                    clz: () => number;
                                    countTrailingZeros: () => number;
                                    ctz: () => number;
                                    notEquals: (other: string | number | Long) => boolean;
                                    neq: (other: string | number | Long) => boolean;
                                    ne: (other: string | number | Long) => boolean;
                                    or: (other: string | number | Long) => Long;
                                    shiftLeft: (numBits: number | Long) => Long;
                                    shl: (numBits: number | Long) => Long;
                                    shiftRight: (numBits: number | Long) => Long;
                                    shr: (numBits: number | Long) => Long;
                                    shiftRightUnsigned: (numBits: number | Long) => Long;
                                    shru: (numBits: number | Long) => Long;
                                    shr_u: (numBits: number | Long) => Long;
                                    rotateLeft: (numBits: number | Long) => Long;
                                    rotl: (numBits: number | Long) => Long;
                                    rotateRight: (numBits: number | Long) => Long;
                                    rotr: (numBits: number | Long) => Long;
                                    subtract: (subtrahend: string | number | Long) => Long;
                                    sub: (subtrahend: string | number | Long) => Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long;
                                    xor: (other: string | number | Long) => Long;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>, never>) | undefined;
                                app?: string | number | (Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long) => Long;
                                    and: (other: string | number | Long) => Long;
                                    compare: (other: string | number | Long) => number;
                                    comp: (other: string | number | Long) => number;
                                    divide: (divisor: string | number | Long) => Long;
                                    div: (divisor: string | number | Long) => Long;
                                    equals: (other: string | number | Long) => boolean;
                                    eq: (other: string | number | Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long) => boolean;
                                    gt: (other: string | number | Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                                    gte: (other: string | number | Long) => boolean;
                                    ge: (other: string | number | Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    eqz: () => boolean;
                                    lessThan: (other: string | number | Long) => boolean;
                                    lt: (other: string | number | Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long) => boolean;
                                    lte: (other: string | number | Long) => boolean;
                                    le: (other: string | number | Long) => boolean;
                                    modulo: (other: string | number | Long) => Long;
                                    mod: (other: string | number | Long) => Long;
                                    rem: (other: string | number | Long) => Long;
                                    multiply: (multiplier: string | number | Long) => Long;
                                    mul: (multiplier: string | number | Long) => Long;
                                    negate: () => Long;
                                    neg: () => Long;
                                    not: () => Long;
                                    countLeadingZeros: () => number;
                                    clz: () => number;
                                    countTrailingZeros: () => number;
                                    ctz: () => number;
                                    notEquals: (other: string | number | Long) => boolean;
                                    neq: (other: string | number | Long) => boolean;
                                    ne: (other: string | number | Long) => boolean;
                                    or: (other: string | number | Long) => Long;
                                    shiftLeft: (numBits: number | Long) => Long;
                                    shl: (numBits: number | Long) => Long;
                                    shiftRight: (numBits: number | Long) => Long;
                                    shr: (numBits: number | Long) => Long;
                                    shiftRightUnsigned: (numBits: number | Long) => Long;
                                    shru: (numBits: number | Long) => Long;
                                    shr_u: (numBits: number | Long) => Long;
                                    rotateLeft: (numBits: number | Long) => Long;
                                    rotl: (numBits: number | Long) => Long;
                                    rotateRight: (numBits: number | Long) => Long;
                                    rotr: (numBits: number | Long) => Long;
                                    subtract: (subtrahend: string | number | Long) => Long;
                                    sub: (subtrahend: string | number | Long) => Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long;
                                    xor: (other: string | number | Long) => Long;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                            chainId?: string | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>, never>) | undefined;
                            time?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["time"], keyof Timestamp>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("../../tendermint/types/types").Header>, never>) | undefined;
                        commit?: ({
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>, never>) | undefined;
                            round?: number | undefined;
                            blockId?: ({
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
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                            signatures?: ({
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] & ({
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            } & {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: ({
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } & {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                                signature?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("../../tendermint/types/types").Commit>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("../../tendermint/types/types").SignedHeader>, never>) | undefined;
                    validatorSet?: ({
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                    } & {
                        validators?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                            votingPower?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>, never>) | undefined;
                            proposerPriority?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[]>, never>) | undefined;
                        proposer?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                            votingPower?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>, never>) | undefined;
                            proposerPriority?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof Validator>, never>) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("../../tendermint/types/validator").ValidatorSet>, never>) | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof LightBlock>, never>) | undefined;
                commonHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof Long>, never>) | undefined;
                byzantineValidators?: ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] & ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pubKey?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                    votingPower?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long>, never>) | undefined;
                    proposerPriority?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long>, never>) | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[]>, never>) | undefined;
                totalVotingPower?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof Long>, never>) | undefined;
                timestamp?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["timestamp"], keyof Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"], keyof LightClientAttackEvidence>, never>) | undefined;
        } & Record<Exclude<keyof I["evidence"][number], keyof Evidence>, never>)[] & Record<Exclude<keyof I["evidence"], keyof {
            duplicateVoteEvidence?: {
                voteA?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("../../tendermint/types/types").SignedMsgType | undefined;
                    height?: string | number | Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long | undefined;
                validatorPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            lightClientAttackEvidence?: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long | undefined;
                                app?: string | number | Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long | undefined;
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
                        commit?: {
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("../../tendermint/types/types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long | undefined;
                    proposerPriority?: string | number | Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long | undefined;
                timestamp?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "evidence">, never>>(object: I): EvidenceList;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
