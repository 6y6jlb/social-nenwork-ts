import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {Error_404} from "../errors/Error_404/Error_404";
import Preloader from "../preloader/Preloader";

const Profile = React.lazy ( () => import('../../MainWrapper/Profile/ProfileContainer') );
const Dialogs = React.lazy ( () => import('../../MainWrapper/DialogsContainer/DialogsContainer') );
const Users = React.lazy ( () => import('../../MainWrapper/Users/UserPage.container') );
const NewsFeed = React.lazy ( () => import('../../MainWrapper/NewsFeed/NewsFeedContainer') );
const AudioPage = React.lazy ( () => import('../../MainWrapper/AudioPage/AudioPage') );
const Settings = React.lazy ( () => import('../../MainWrapper/Settings/Settings') );
const Login = React.lazy ( () => import('../login/LoginContainer') );

export const PATH = {
    SLASH: '/',
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    USERS: '/users',
    NEWS: '/news',
    AUDIO: '/audio',
    SETTINGS: '/settings',
    LOGIN: '/login',
    ERROR_UNKNOWN_PAGE: '/abracadabra',
}


const Routes: React.FC = React.memo ( () => {
    return (
        <Suspense fallback={ <Preloader/> }>
            <Switch>
                <Route exact path={ PATH.SLASH } render={ () => <Profile/> }/>
                <Route path={ PATH.PROFILE + ':userId?' } render={ () => <Profile/> }/>
                <Route path={ PATH.DIALOGS + ':userId?' } render={ () => <Dialogs/> }/>
                <Route path={ PATH.DIALOGS } render={ () => <Dialogs/> }/>
                <Route path={ PATH.USERS } render={ () => <Users/> }/>
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