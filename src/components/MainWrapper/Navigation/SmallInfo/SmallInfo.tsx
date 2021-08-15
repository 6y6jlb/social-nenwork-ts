import s from "./SmallInfo.module.css";
import React from "react";
import {FormattedMessage} from "../../../common/FormattedMessage/FormattedMessage";

type SmallInfoPropsType ={
    profileName:string|null
}

export const SmallInfo = (props:SmallInfoPropsType) => {
    return (
        <div className={ s.smallInfo }>
            {props.profileName?props.profileName: <FormattedMessage _id={'navBar.info.name'}/>}
        </div>
    );
}