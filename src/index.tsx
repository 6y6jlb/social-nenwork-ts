import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store , {
    RootStateType
} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";


export const rerenderEntireThree = (state:any) => {

    ReactDOM.render(
        <React.StrictMode>
            <App addPostFromProfile={store.addPostFromProfile}
                 addMessageFromDialogs={store.addMessageFromDialogs}
                textAreaFromDialogsChanger={store.textAreaFromDialogsChanger}
                 textAreaFromPostChanger={store.textAreaFromPostChanger}
                 state={store.getState() }

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
