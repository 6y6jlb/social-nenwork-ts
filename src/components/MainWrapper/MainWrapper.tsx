import React from "react";
import s from './MainWrapper.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import {FriendList} from "./FriendList/FriendListr";
import {NewsFeed} from "./NewsFeed/NewsFeed";
import {AudioPage} from "./AudioPage/AudioPage";
import {Settings} from "./Settings/Settings";
import DialogsWrapperContainer from "./DialogsWrapper/DialogsWrapper.container";
import ProfileWrapperContainer from "./Profile/ProfileWrapper.container";
import NavigationBarContainer from "./Navigation/NavigationBar.container";



export function MainWrapper() {
    return (
        <BrowserRouter>
            <div className={s.mainWrapper}>
                <NavigationBarContainer/>
                <div className={s.contentWrapper}>

                    <Route path={'/profile'}
                           render={() => <ProfileWrapperContainer
                           />}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsWrapperContainer
                           />}/>
                    <Route path={'/friends'} render={() => <FriendList/>}/>
                    <Route path={'/news'} render={() => <NewsFeed/>}/>
                    <Route path={'/audio'} render={() => <AudioPage/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                   {/* <Route path={'/'}
                           render={() => <ProfileWrapperContainer
                           />}/>*/}
                </div>

            </div>
        </BrowserRouter>
    )
}

