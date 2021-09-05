import {InferActionsType} from "./reduxStore";
import React from "react";
import {APP} from "./consts";


//types
export type InitialStateFromAppType = {
    isInitialized:boolean
}

export type AppActionsTypes = InferActionsType<typeof actionsApp>
//ac
export const actionsApp = {
    setInitializedSuccess :() => {
        return {type: APP.SET_INITIALIZED } as const
    },
    initializeSaga :() => {
        return {type: APP.INITIALIZE_SAGA} as const
    }
}
//tc
/*export const initialize = ():AppThunk => async dispatch=>{

     await dispatch(setUserTC(true))
     await dispatch(actionsApp.setInitializedSuccess())

//if wi use then in thunk
  /!*
  const response = dispatch(setUserTC(true))
  //@ts-ignore
    response.then(res=>{
        dispatch(actionsApp.setInitializedSuccess())
    })*!/
}*/

//state
const initialState: InitialStateFromAppType = {
    isInitialized:false
}
//reducer
const appReducer = (state = initialState, action: AppActionsTypes): InitialStateFromAppType => {
    switch (action.type) {
        case APP.SET_INITIALIZED:
            return {
                ...state,isInitialized:true
            }
        default:
            return state
    }
}
//export default
export default appReducer;
