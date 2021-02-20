import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {RootStateType} from "./index";

export type AppStatePropsType={
    state: RootStateType
}

function App(props: AppStatePropsType) {
    return (
        <div className="App">
            <Header/>
            <MainWrapper state={props.state}  />
            <Footer/>
        </div>
    );
}

export default App;

