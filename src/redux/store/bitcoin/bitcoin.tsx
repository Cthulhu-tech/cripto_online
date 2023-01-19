import { IAction } from "../../type"
import { BitcoinType } from "./type"

const defaultState = {
    data: null
}

const updateBitcoinType = 'updateBitcoinType'

export const bitcoinStore = (state = defaultState, action:IAction<string, BitcoinType>) => {
    switch (action.type){
        case updateBitcoinType:
        return {data: action.payload}
    default:
        return state
    }
}

export const updateBitcoinStore = (payload: BitcoinType) => ({ type: updateBitcoinType, payload })