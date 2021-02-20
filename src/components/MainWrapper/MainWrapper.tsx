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
import { AppStatePropsType } from "../../App";

export function MainWrapper(props:AppStatePropsType) {
    return (
        <BrowserRouter>
            <div className={s.mainWrapper}>
                <NavigationBar navLinkBar={props.state.navBarObj.navLinkBar} />
                <div className={s.contentWrapper}>
                    <Route path={'/profile'}
                           render={() => <ProfileWrapper myPostArray={props.state.profileWrapperObj.myPostArray}
                                                         profileSelfPhotoImgUrl={props.state.profileWrapperObj.profileSelfPhotoImgUrl}
                                                         profileInfoText={props.state.profileWrapperObj.profileInfoText}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsWrapper messages={props.state.dialogWrapperObj.messages}/>}/>
                    <Route path={'/friends'} render={() => <FriendList/>}/>
                    <Route path={'/news'} render={() => <NewsFeed/>}/>
                    <Route path={'/audio'} render={() => <AudioPage/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

