import * as React from "react";

import {AppStateType} from "./Redux/reduxStore";

const StoreContext = React.createContext({} as AppStateType);

export type ProviderType = {
    store: AppStateType
    children: React.ReactNode
}

export const Provider = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContext;