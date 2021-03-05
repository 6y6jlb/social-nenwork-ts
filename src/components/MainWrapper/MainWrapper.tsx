import {NavigationBar} from "./Navigation/NavigationBar";
import {ProfileWrapper} from "./Profile/ProfileWrapper";
import React from "react";
import s from './MainWrapper.module.css'
import {DialogsWrapper} from "./DialogsWrapper/DialogsWrapper";
import {BrowserRouter, Route} from "react-router-dom";
import {FriendList} from "./FriendList/FriendListr";
import {NewsFeed} from "./NewsFeed/NewsFeed";
import {AudioPage} from "./AudioPage/AudioPage";
import {Settings} from "./Settings/Settings";
import {ActionsTypes, RootStateType} from "../../Redux/State";


type MainWrapperPropsType= {
    state: RootStateType
    dispatch: (action:ActionsTypes)=>void
}




export function MainWrapper(props: MainWrapperPropsType) {
    return (
        <BrowserRouter>
            <div className={s.mainWrapper}>
                <NavigationBar friendsIcons={props.state.navBarObj.friendsIcons}
                               navLinkBar={props.state.navBarObj.navLinkBar}/>
                <div className={s.contentWrapper}>
                    <Route path={'/profile'}
                           render={() => <ProfileWrapper dispatch={props.dispatch}
                                                         profileWrapperObj={props.state.profileWrapperObj}
                           />}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsWrapper dispatch={props.dispatch}
                                                         currentInputMessageString={props.state.dialogWrapperObj.currentInputMessageString}
                                                         messages={props.state.dialogWrapperObj.messages}
                                                         />}/>
                    <Route path={'/friends'} render={() => <FriendList/>}/>
                    <Route path={'/news'} render={() => <NewsFeed/>}/>
                    <Route path={'/audio'} render={() => <AudioPage/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

