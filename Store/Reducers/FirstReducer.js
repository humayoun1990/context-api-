import { ADD_VALUE, SUB_VALUE } from "../Actions";

export const FirstReducer = (state, action) => {
    switch (action.type) {
        case ADD_VALUE:
            let addState = { ...state }
            addState.value=addState.value+action.payload
            return addState
            break
        case SUB_VALUE:
            let subState = { ...state}
            subState.value=subState.value-action.payload
            return subState
            break
        default:
            return state
    }
}