import React from "react";
import s from './MainWrapper.module.css';
import NavigationBarContainer from "./Navigation/NavigationBar.container";
import Routes from "../common/routes/Routes";
import {Chat} from "./Chat";


export function MainWrapper() {
    return (
        <div className={ s.mainWrapper }>
            <NavigationBarContainer/>
            <Routes/>
            <Chat/>
        </div>
    );
}

