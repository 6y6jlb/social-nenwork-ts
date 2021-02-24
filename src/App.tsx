import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {RootStateType} from "./Redux/State";


export type AppStatePropsType = {
    state: RootStateType
    addMessageFromDialogs: (value:string,self: boolean) => void
    addPostFromProfile: (value:string) => void
    textAreaFromPostChanger: (item: string) => void
    textAreaFromDialogsChanger: (item: string) => void
}

function App(props: AppStatePropsType) {
    return (
        <div className="App">
            <Header/>
            <MainWrapper
                state={props.state}
                textAreaFromDialogsChanger={props.textAreaFromDialogsChanger}
                textAreaFromPostChanger={props.textAreaFromPostChanger}
                addPostFromProfile={props.addPostFromProfile}
                addMessageFromDialogs={props.addMessageFromDialogs}/>
            <Footer/>
        </div>
    );
}

export default App;

