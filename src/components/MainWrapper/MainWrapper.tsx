import {NavigationBar} from "./Navigation/NavigationBar";
import {ProfileWrapper} from "./Profile/ProfileWrapper";
import React from "react";
import s from './MainWrapper.module.css'

export function MainWrapper() {
    return (
        <div className={s.mainWrapper}>
            <NavigationBar/>
            <ProfileWrapper/>
        </div>
    )
}