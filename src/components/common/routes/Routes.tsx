import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {Error_404} from "../errors/Error_404/Error_404";
const ProfileWrapperContainer = React.lazy ( () => import('../../MainWrapper/Profile/ProfileWrapper.container') );
const DialogsWrapperContainer = React.lazy ( () => import('../../MainWrapper/DialogsWrapper/DialogsWrapper.container') );
const UserPageContainer = React.lazy ( () => import('../../MainWrapper/Users/UserPage.container') );
const NewsFeed = React.lazy ( () => import('../../MainWrapper/NewsFeed/NewsFeed') );
const AudioPage = React.lazy ( () => import('../../MainWrapper/AudioPage/AudioPage') );
const Settings = React.lazy ( () => import('../../MainWrapper/Settings/Settings') );
const Login = React.lazy ( () => import('../login/LoginContainer') );

export const PATH = {
    SLASH: '/',
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    FRIENDS: '/friends',
    NEWS: '/news',
    AUDIO: '/audio',
    SETTINGS: '/settings',
    LOGIN: '/login',
    ERROR_UNKNOWN_PAGE: '/abracadabra',
}


const Routes: React.FC = React.memo ( () => {
    return (
        <Suspense fallback={ <div>Загрузка...</div> }>
            <Switch>
                <Route exact path={ PATH.SLASH }
                   render={ () => <ProfileWrapperContainer
                   /> }/>
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
                <Route path={ PATH.SETTINGS } render={ () => <Settings/> }/>
                <Route path={ PATH.LOGIN } render={ () => <Login/> }/>
                <Route render={ () => <Error_404/> }/>
            </Switch>
        </Suspense>
    )
} )
export default Routes;