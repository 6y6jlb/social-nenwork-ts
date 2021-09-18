import s from "./SmallInfo.module.css";
import React from "react";
import {FormattedMessage} from "../../../common/FormattedMessage/FormattedMessage";
import {useSelector} from "react-redux";
import {getOwnerId, isOwnerSelector} from "../../../../utils/selectors/auth-selectors";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../common/routes/Routes";


interface IProps {
    profileName: string | null;
}

export const SmallInfo: React.FC<IProps> = (props) => {
    const {profileName} = props;
    const {isOwner} = useSelector ( isOwnerSelector );
    const ownerId = useSelector ( getOwnerId );
    return (
        <div className={ s.smallInfo }>
            { !isOwner
                ? <NavLink to={ `${ PATH.PROFILE + ownerId }` }>{ profileName && profileName }</NavLink>
                : profileName ? profileName
                    : <FormattedMessage _id={ 'navBar.info.name' }/> }
        </div>
    );
};

