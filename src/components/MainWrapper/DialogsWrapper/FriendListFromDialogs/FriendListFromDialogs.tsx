import React from "react";
import {NavLink} from "react-router-dom";
import style from './FriendListFromDialogs.module.css';
import {IDialogs} from "../../../../api/dialogsAPI";


interface IProps {
    dialogs:Array<IDialogs>
}



export const FriendListFromDialogs:React.FC<IProps> = React.memo ( ({dialogs}) => {

    const activeItem = style.item + ' ' + style.active;

    const mappedFriends = dialogs.map ( friend => <NavLink to={ `/dialog/${ friend.id}` } className={ activeItem }>
        <span>{friend.userName}</span>
    </NavLink> );
    return (
        <div className={ style.friendListFromDialogs }>
            { mappedFriends }
        </div>
    );
} );
