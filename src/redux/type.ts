import { BitcoinType } from "./store/bitcoin/type"

export interface IAction<T, P> {
    readonly type: T
    readonly payload?: P
}

export type socketStoreType = {
    type: string
}

export type Store = {
    typeSocket: socketStoreType
    typeBitcoin: {data: BitcoinType | null}
}