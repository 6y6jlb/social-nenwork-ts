import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {
    addMessageFromDialogs,
    addPostFromProfile,
    RootStateType,
    textAreaFromDialogsChanger,
    textAreaFromPostChanger
} from "./Redux/State";


export const rerenderEntireThree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App textAreaFromPostChanger={textAreaFromPostChanger}
                 textAreaFromDialogsChanger={textAreaFromDialogsChanger}
                 state={state}
                 addPostFromProfile={addPostFromProfile}
                 addMessageFromDialogs={addMessageFromDialogs}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}