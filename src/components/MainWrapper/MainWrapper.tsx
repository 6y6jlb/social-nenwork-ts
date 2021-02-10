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

export function MainWrapper() {
    return (
        <BrowserRouter>
            <div className={s.mainWrapper}>
                <NavigationBar/>
                <div className={s.contentWrapper}>
                    <Route path={'/profilePage'} render={() => <ProfileWrapper/>}/>
                    <Route path={'/dialogsPage'} render={() => <DialogsWrapper/>}/>
                    <Route path={'/friendList'} render={() => <FriendList/>}/>
                    <Route path={'/newsFeed'} render={() => <NewsFeed/>}/>
                    <Route path={'/audioPage'} render={() => <AudioPage/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

