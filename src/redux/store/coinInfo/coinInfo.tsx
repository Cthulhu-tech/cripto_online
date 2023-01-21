import { IAction } from "../../type"
import { CoinType } from "./type"

const defaultState = {
    data: null
}

const updateBitcoinInfo = 'updateBitcoinInfo'

export const bitcoinInfoStore = (state = defaultState, action:IAction<string, CoinType>) => {
    switch (action.type){
        case updateBitcoinInfo:
        return {data: action.payload}
    default:
        return state
    }
}

export const updateBitcoinInfoStore = (payload: CoinType) => ({ type: updateBitcoinInfo, payload })