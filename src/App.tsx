import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";




function App() {
    return (
        <div className="App">
            <Header/>
            <MainWrapper/>
            <Footer/>
        </div>
    );
}

export default App;

