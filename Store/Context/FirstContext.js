import React, { createContext, useReducer, useContext } from "react";
import { ADD_VALUE, SUB_VALUE } from "../Actions";
import { FirstReducer } from "../Reducers/FirstReducer";
export const FirstContext = createContext()

const FirstContextProvider = (props) => {
    const [state, dispatch] = useReducer(FirstReducer, { value: 0 })
    const addValue = (value) => {
        dispatch({ type: ADD_VALUE, payload:value })
    }
    const subValue = (value) => {
        dispatch({ type: SUB_VALUE,payload:value })
    }
    return (
        <FirstContext.Provider value={{
            state, addValue, subValue
        }}>
            {props.children}
        </FirstContext.Provider>
    )
}
export default FirstContextProvider