import React from "react";
import s from './NavigationBar.module.css'
import {SmallInfo} from "./SmallInfo/SmallInfo";

export function NavigationBar() {
    return (
        <div className={s.navigationBar}>
            <SmallInfo />
            <div className={s.NavElements}>
                <div>Profile</div>
                <div>Messages</div>
                <div>Friend List</div>
                <div>News</div>
                <div>Audio</div>
                <div>Settings</div>
            </div>
        </div>
    )
}
