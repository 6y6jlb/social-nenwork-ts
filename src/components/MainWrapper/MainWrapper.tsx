import React from "react";
import s from './MainWrapper.module.css';
import NavigationBarContainer from "./Navigation/NavigationBar.container";
import Routes from "../common/routes/Routes";
import {Chat} from "./Chat";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../utils/selectors/auth-selectors";


export function MainWrapper() {
    const isAuth = useSelector(getIsAuth)
    return (
        <div className={ s.mainWrapper }>
            <NavigationBarContainer/>
            <Routes/>
            {isAuth &&  <Chat/> }
        </div>
    );
}

