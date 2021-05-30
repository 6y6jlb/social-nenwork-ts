import React from "react";
import {Route, Switch} from "react-router-dom";
import ProfileWrapperContainer from "../../MainWrapper/Profile/ProfileWrapper.container";
import DialogsWrapperContainer from "../../MainWrapper/DialogsWrapper/DialogsWrapper.container";
import UserPageContainer from "../../MainWrapper/Users/UserPage.container";
import {NewsFeed} from "../../MainWrapper/NewsFeed/NewsFeed";
import {AudioPage} from "../../MainWrapper/AudioPage/AudioPage";
import {Settings} from "../../MainWrapper/Settings/Settings";
import Login from "../login/LoginContainer";
import {Error_404} from "../errors/Error_404/Error_404";

export const PATH = {
    SLASH: '/',
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    FRIENDS: '/friends',
    NEWS: '/news',
    AUDIO: '/audio',
    SETTINGS: '/settings',
    LOGIN: '/login',
    ERROR_UNKNOWN_PAGE: '',
}


const Routes: React.FC = React.memo(() => {
    return (
        <Switch>
            {/*<Route exact path={ PATH.SLASH }
                   render={ () => <ProfileWrapperContainer
                   /> }/>*/}
            <Route path={ PATH.PROFILE + ':userId?' }
                   render={ () => <ProfileWrapperContainer
                   /> }/>
            <Route path={ PATH.DIALOGS }
                   render={ () => <DialogsWrapperContainer
                   /> }/>
            <Route path={ PATH.FRIENDS }
                   render={ () => <UserPageContainer
                   /> }/>
            <Route path={ PATH.NEWS } render={ () => <NewsFeed/> }/>
            <Route path={ PATH.AUDIO } render={ () => <AudioPage/> }/>
            <Route path={ PATH.AUDIO } render={ () => <Settings/> }/>
            <Route path={ PATH.LOGIN } render={ () => <Login/> }/>
            <Route  render={ () => <Error_404/> }/>

        </Switch>
    )
})
export default Routes;