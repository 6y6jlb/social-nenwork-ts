import s from "./Message.module.css";
import React, {useState} from "react";
import {IMessage} from "../../../../../../api/dialogsAPI";
import bin from '../../../../../../images/dustbin.png';
import spam from '../../../../../../images/spam.png';
import viewed from '../../../../../../images/viewWhite.png';
import visibility from '../../../../../../images/visibilityWhite.png';
import {dateFormat} from "../../../../../../utils/dateFormatHelper";


interface IProps {
    message: IMessage;
    isSelf: boolean;
    deleteMessage: (messageId: string) => void;
    toSpamMessage: (messageId: string) => void;
    toViewedMessage: (messageId: string) => void;

}

export const Message: React.FC<IProps> = React.memo ( ({
                                                           message,
                                                           deleteMessage,
                                                           isSelf,
                                                           toSpamMessage,
                                                           toViewedMessage,
                                                       }) => {
    const [isSelfSubMenu, setSelfSubMenu] = useState ( false );
    const [isFriendSubMenu, setFriendSubMenu] = useState ( false );
    const eye = message.viewed ? viewed : visibility;


    const date = dateFormat ( message.addedAt ).map ( item => <span>{ item }</span> );

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
                    <div className={ s.time }>{ date }</div>
                    <div className={ s.viewed }><img src={ eye } alt="eye"/></div>
                </div>
                <div className={ s.cornet }></div>
            </div>
        </div>
        :
        <div className={ s.messageFriend } onLoad={ () => toViewedMessage ( message.id ) }>
            <div className={ `${ s.subMenuFriend } ${ isFriendSubMenu && s.activeSubMenuFriend }` }>
                <div className={ s.imgFriend }
                     onClick={ () => deleteMessage ( message.id ) }>
                    <img src={ spam } alt="spam"/>
                </div>
                <div className={ s.imgFriend }
                     onClick={ () => toSpamMessage ( message.id ) }>
                    <img src={ bin } alt="spam"/>
                </div>
            </div>
            <div className={ s.avatar }><img className={ s.avatarChildFriend } src={ '' }/></div>
            <div className={ s.messageFrameFriend } onClick={ () => setFriendSubMenu ( !isFriendSubMenu ) }>
                <div className={ s.cornetFriend }></div>
                <div className={ s.textFrameFriend }>
                    <div className={ s.nameFriend }>{ message.senderName }</div>
                    <div className={ s.textMessageFriend }>{ message.body }</div>
                    <div className={ s.timeFriend }>{ date }</div>
                </div>

            </div>
        </div>;
} );