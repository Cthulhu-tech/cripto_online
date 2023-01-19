import { bitcoinStore } from "./store/bitcoin/bitcoin"
import { combineReducers, createStore } from "redux"
import { socketStore } from "./store/socket/soket"


export const rootReducer = combineReducers({
    typeSocket: socketStore,
    typeBitcoin: bitcoinStore
})

export const store = createStore(rootReducer)