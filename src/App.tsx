import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {StoreType} from "./Redux/State";


export type AppStatePropsType = {
    store:StoreType
}

function App(props: AppStatePropsType) {
    const state = props.store.getState()
    return (
        <div className="App">
            <Header/>
            <MainWrapper
                state={state}
                dispatch={props.store.dispatch.bind(props.store)}/>
            <Footer/>
        </div>
    );
}

export default App;

