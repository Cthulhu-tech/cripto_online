import { IAction } from "../../type"

const defaultState = {
    type: 'BTCRUB'
}

const updateSocketType = 'updateSocketType'

export const socketStore = (state = defaultState, action:IAction<string, string>) => {
    switch (action.type){
        case updateSocketType:
        return {type: action.payload}
    default:
        return state
    }
}

export const updateSocketStore = (payload: string) => ({ type: updateSocketType, payload })