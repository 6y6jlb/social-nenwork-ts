import s from "./SmallInfo.module.css";
import React from "react";

type SmallInfoPropsType ={
    profileName:string|null
}

export const SmallInfo = (props:SmallInfoPropsType) => {
    return (
        <div className={ s.smallInfo }>
            {props.profileName?props.profileName:'Имя Профиля'}
        </div>
    );
}