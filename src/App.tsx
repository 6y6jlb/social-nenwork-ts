import React from 'react';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {HashRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <HashRouter>
            <div className="App">
                <HeaderContainer/>
                <MainWrapper/>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;

