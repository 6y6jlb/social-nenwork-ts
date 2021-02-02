import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {ContentWrapper} from "./components/Content/ContentWrapper";
import {NavigationBar} from "./components/Navigation/NavigationBar";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavigationBar/>
            <ContentWrapper/>
            <Footer/>
        </div>
    );
}

export default App;

