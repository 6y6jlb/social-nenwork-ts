import React from "react";
import s from './MainWrapper.module.css'
import {Route} from "react-router-dom";
import {NewsFeed} from "./NewsFeed/NewsFeed";
import {AudioPage} from "./AudioPage/AudioPage";
import {Settings} from "./Settings/Settings";
import DialogsWrapperContainer from "./DialogsWrapper/DialogsWrapper.container";
import ProfileWrapperContainer from "./Profile/ProfileWrapper.container";
import NavigationBarContainer from "./Navigation/NavigationBar.container";
import UserPageContainer from "./UserPage/UserPage.container";


export function MainWrapper() {
    return (
            <div className={ s.mainWrapper }>
                <NavigationBarContainer/>
                <div className={ s.contentWrapper }>

                    <Route path={ '/profile/:userId?' }
                           render={ () => <ProfileWrapperContainer
                           /> }/>
                    <Route path={ '/dialogs' }
                           render={ () => <DialogsWrapperContainer
                           /> }/>
                    <Route path={ '/friends' }
                           render={ () => <UserPageContainer
                           /> }/>
                    <Route path={ '/news' } render={ () => <NewsFeed/> }/>
                    <Route path={ '/audio' } render={ () => <AudioPage/> }/>
                    <Route path={ '/settings' } render={ () => <Settings/> }/>
                    {/*<Route exact path={ '/' }
                           render={ () => <ProfileWrapperContainer
                           /> }/>*/}
                </div>

            </div>
    )
}

