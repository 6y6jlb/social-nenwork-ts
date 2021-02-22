import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessageFromDialogs, addPostFromProfile, RootStateType} from "./Redux/State";


export const rerenderEntireThree = (state:RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostFromProfile={addPostFromProfile} addMessageFromDialogs={addMessageFromDialogs}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}