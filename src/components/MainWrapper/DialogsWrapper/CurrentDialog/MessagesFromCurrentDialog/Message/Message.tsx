import s from "./Message.module.css";
import React, {useState} from "react";
import {IMessage} from "../../../../../../api/dialogsAPI";
import bin from '../../../../../../images/dustbin.png';
import spam from '../../../../../../images/spam.png';


interface IProps {
    message: IMessage;
    isSelf: boolean;
    deleteMessage: (messageId: string) => void;

}

export const Message: React.FC<IProps> = React.memo ( ({message, deleteMessage, isSelf}) => {
    const [isSelfSubMenu, setSelfSubMenu] = useState ( false );
    const [isFriendSubMenu, setFriendSubMenu] = useState ( false );


    return isSelf ?
        <div className={ s.message }>
            <div className={ `${ s.bin } ${ isSelfSubMenu && s.activeBin }` }
                 onClick={ () => deleteMessage ( message.id ) }>
                <img src={ bin } alt="delete"/>
            </div>
            <div className={ s.avatar }><img className={ s.avatarChild } src={ '' }/></div>
            <div className={ s.messageFrame } onClick={ () => setSelfSubMenu ( !isSelfSubMenu ) }>
                <div className={ s.textFrame }>
                    <div className={ s.name }>{ message.senderName }</div>
                    <div className={ s.textMessage }>{ message.body }</div>
                    <div className={ s.time }>{ message.addedAt }</div>
                </div>
                <div className={ s.cornet }></div>
            </div>
        </div>
        :
        <div className={ s.messageFriend }>
            <div className={ `${s.subMenuFriend} ${ isFriendSubMenu && s.activeSubMenuFriend }`}>
                <div className={ s.img }
                     onClick={ () => deleteMessage ( message.id ) }>
                    <img src={ spam } alt="spam"/>
                </div>
                <div className={  s.img }
                     onClick={ () => deleteMessage ( message.id ) }>
                    <img src={ bin } alt="spam"/>
                </div>
            </div>
            <div className={ s.avatar }><img className={ s.avatarChildFriend } src={ '' }/></div>
            <div className={ s.messageFrameFriend } onClick={ () => setFriendSubMenu ( !isFriendSubMenu ) }>
                <div className={ s.cornetFriend }></div>
                <div className={ s.textFrameFriend }>
                    <div className={ s.nameFriend }>{ message.senderName }</div>
                    <div className={ s.textMessageFriend }>{ message.body }</div>
                    <div className={ s.timeFriend }>{ message.addedAt }</div>
                </div>

            </div>
        </div>;
} );