import React from "react";
import s from './MainWrapper.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import {NewsFeed} from "./NewsFeed/NewsFeed";
import {AudioPage} from "./AudioPage/AudioPage";
import {Settings} from "./Settings/Settings";
import DialogsWrapperContainer from "./DialogsWrapper/DialogsWrapper.container";
import ProfileWrapperContainer from "./Profile/ProfileWrapper.container";
import NavigationBarContainer from "./Navigation/NavigationBar.container";
import UserPageContainer from "./UserPage/UserPage.container";


export function MainWrapper() {
    return (
        <BrowserRouter>
            <div className={s.mainWrapper}>
                <NavigationBarContainer/>
                <div className={s.contentWrapper}>

                    <Route exact path={'/profile'}
                           render={() => <ProfileWrapperContainer
                           />}/>
                    <Route exact path={'/dialogs'}
                           render={() => <DialogsWrapperContainer
                           />}/>
                    <Route exact path={'/friends'}
                           render={() => <UserPageContainer
                    />}/>
                    <Route exact path={'/news'} render={() => <NewsFeed/>}/>
                    <Route exact path={'/audio'} render={() => <AudioPage/>}/>
                    <Route exact path={'/settings'} render={() => <Settings/>}/>
                    <Route exact path={'/'}
                           render={() => <ProfileWrapperContainer
                           />}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

