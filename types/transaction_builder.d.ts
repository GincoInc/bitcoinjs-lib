import { Signer } from './ecpair';
import { Network } from './networks';
import { Transaction } from './transaction';
declare type MaybeBuffer = Buffer | undefined;
declare type TxbSignatures = Buffer[] | MaybeBuffer[];
declare type TxbPubkeys = MaybeBuffer[];
declare type TxbWitness = Buffer[];
declare type TxbScriptType = string;
declare type TxbScript = Buffer;
interface TxbInput {
    value?: number;
    hasWitness?: boolean;
    signScript?: TxbScript;
    signType?: TxbScriptType;
    prevOutScript?: TxbScript;
    redeemScript?: TxbScript;
    redeemScriptType?: TxbScriptType;
    prevOutType?: TxbScriptType;
    pubkeys?: TxbPubkeys;
    signatures?: TxbSignatures;
    witness?: TxbWitness;
    witnessScript?: TxbScript;
    witnessScriptType?: TxbScriptType;
    script?: TxbScript;
    sequence?: number;
    scriptSig?: TxbScript;
    maxSignatures?: number;
}
interface TxbSignArg {
    prevOutScriptType: string;
    vin: number;
    keyPair: Signer;
    redeemScript?: Buffer;
    hashType?: number;
    witnessValue?: number;
    witnessScript?: Buffer;
}
export declare class TransactionBuilder {
    network: Network;
    maximumFeeRate: number;
    static fromTransaction(transaction: Transaction, network?: Network, forkId?: number): TransactionBuilder;
    __INPUTS: TxbInput[];
    private __PREV_TX_SET;
    private __BITCOINCASH;
    private __BITCOINGOLD;
    private __TX;
    private __USE_LOW_R;
    constructor(network?: Network, maximumFeeRate?: number);
    enableBitcoinCash(enable?: boolean): void;
    enableBitcoinGold(enable?: boolean): void;
    setLowR(setting?: boolean): boolean;
    setLockTime(locktime: number): void;
    setVersion(version: number): void;
    addInput(txHash: Buffer | string | Transaction, vout: number, sequence?: number, prevOutScript?: Buffer): number;
    addOutput(scriptPubKey: string | Buffer, value: number): number;
    build(): Transaction;
    buildIncomplete(): Transaction;
    sign(signParams: number | TxbSignArg, keyPair?: Signer, redeemScript?: Buffer, hashType?: number, witnessValue?: number, witnessScript?: Buffer): void;
    private __addInputUnsafe;
    private __build;
    private __canModifyInputs;
    private __needsOutputs;
    private __canModifyOutputs;
    private __overMaximumFees;
}
export declare function prepareInput(input: TxbInput, ourPubKey: Buffer, redeemScript?: Buffer, witnessScript?: Buffer): TxbInput;
export {};
