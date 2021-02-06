import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavigationBar.module.css'
import {SmallInfo} from "./SmallInfo/SmallInfo";

export function NavigationBar() {
    return (
        <div className={s.navigationBar}>
            <SmallInfo/>
            <div className={s.NavElements}>
                <div>
                    <NavLink to={'profilePage'}>profile</NavLink>
                </div>
                <div>
                    <NavLink to={'dialogsPage'}>dialogs</NavLink>
                </div>
                <div>
                    <NavLink to={'friendList'}>Friend List</NavLink>
                </div>
                <div>
                    <NavLink to={'newsFeed'}>News</NavLink>
                </div>
                <div>
                    <NavLink to={'audioPage'}>Audio</NavLink>
                </div>
                <div>
                    <NavLink to={'settings'}>Settings</NavLink>
                </div>
            </div>
        </div>
    )
}
