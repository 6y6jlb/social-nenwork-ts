import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavigationBar.module.css'
import {SmallInfo} from "./SmallInfo/SmallInfo";
import {NavBarObjType} from "../../../index";



export function NavigationBar(props:NavBarObjType) {
const navLinkBlock = props.navLinkBar.map(i=>{
    return <div key={i.id}>
        <NavLink to={i.item}>{i.item}</NavLink>
    </div>
})

    return (
        <div className={s.navigationBar}>
            <SmallInfo/>
            <div className={s.NavElements}>
                {navLinkBlock}
            </div>
            <div className={s.activeFriends}>
                activeFriends
            </div>
        </div>
    )
}
