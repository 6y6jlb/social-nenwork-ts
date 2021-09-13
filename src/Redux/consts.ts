//users
export enum USERS {
    FOLLOW = 'users/FOLLOW'
    , UN_FOLLOW = 'users/UN_FOLLOW'
    , ADD_MORE_USERS = 'users/ADD_MORE_USERS'
    , CHANGE_CURRENT_PAGE = 'users/CHANGE_CURRENT_PAGE'
    , CHANGE_TOTAL_COUNT = 'users/CHANGE_TOTAL_COUNT'
    , CHANGE_IS_FETCHING_FROM_USERS = 'users/CHANGE_IS_FETCHING_FROM_USERS'
    , SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW = 'users/SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW'
    , SET_CURRENT_PAGE_FROM_USERS = 'users/SET_CURRENT_PAGE_FROM_USERS'
    , SET_PORTION_PAGE_FROM_USERS = 'users/SET_PORTION_PAGE_FROM_USERS'
    , GET_USERS_SAGA = 'users/GET_USERS_SAGA'
    , FOLLOW_UNFOLLOW_SAGA = 'users/FOLLOW_UNFOLLOW_SAGA'
    , UNFOLLOW_SAGA = 'users/UNFOLLOW_SAGA'
    , FOLLOW_SAGA = 'users/FOLLOW_SAGA'

}


//app
export enum APP {
    INITIALIZE_SAGA = 'app/INITIALIZE_SAGA'
    , SET_INITIALIZED = 'app/SET_INITIALIZED'
}


//profile
export enum PROFILE {
    ADD_POST = 'profile/ADD_POST'
    , SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
    , CHANGE_IS_FETCHING_FROM_PROFILE = 'profile/CHANGE_IS_FETCHING_FROM_PROFILE'
    , CHANGE_STATUS = 'profile/CHANGE_STATUS'
    , SAVE_PHOTO_FROM_PROFILE = 'profile/SAVE_PHOTO_FROM_PROFILE'
    , IS_OPEN_MENU_FROM_PROFILE = 'profile/IS_OPEN_MENU_FROM_PROFILE'
    , GET_STATUS_FROM_PROFILE_SAGA = 'profile/GET_STATUS_FROM_PROFILE_SAGA'
    , UPDATE_STATUS_FROM_PROFILE_SAGA = 'profile/UPDATE_STATUS_FROM_PROFILE_SAGA'
    , SAVE_PHOTO_FROM_PROFILE_SAGA = 'profile/SAVE_PHOTO_FROM_PROFILE_SAGA'
    , SAVE_NEW_PROFILE_SAGA = 'profile/SAVE_NEW_PROFILE_SAGA'
    , GET_PROFILE_SAGA = 'profile/GET_PROFILE_SAGA'
    , FRIENDLY_CHECK_SAGA = 'users/FRIEND_CHECK'
    , SET_IS_FRIEND_PROFILE_SAGA = 'users/FRIEND_CHECK_PROFILE_SAGA'
    , SET_FRIENDLY_FROM_PROFILE_SAGA = 'users/SET_FRIENDLY_FROM_PROFILE_SAGA'
}


//auth
export enum AUTH {
    GET_CAPTCHA_SAGA = 'auth/GET_CAPTCHA_SAGA'
    , SET_AUTH_NETWORK_ERROR = 'auth/SET_AUTH_NETWORK_ERROR'
    , SET_USER_FROM_AUTH_SAGA = 'auth/SET_USER_FROM_AUTH_SAGA'
    , LOGOUT_SAGA = 'auth/LOGOUT_SAGA'
    , LOGIN_SAGA = 'auth/LOGIN_SAGA'
    , SET_USER_DATA = 'auth/SET_USER_DATA'
    , GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

}

//news
export enum NEWS {
    GET_NEWS_SAGA = 'news/GET_NEWS_SAGA'
    , SET_NEWS = 'news/SET_NEWS'
    , SET_IS_FETCHING = 'news/SET_IS_FETCHING'
    , SET_PAGE = 'news/SET_PAGE'
    , SET_PAGE_SIZE = 'news/SET_PAGE_SIZE'
    , SET_PORTION_NUMBER = 'news/SET_PORTION_NUMBER'
}


//dialogs
export enum DIALOGS {
    ADD_DIALOGS_MESSAGE = 'dialogs/ADD_DIALOGS_MESSAGE'
    , SET_DIALOGS = 'dialogs/SET_DIALOGS'
    , SET_MESSAGES = 'dialogs/SET_MESSAGES'
    , START_DIALOG_SAGA = 'dialogs/START_DIALOG_SAGA'
    , GET_DIALOGS_SAGA = 'dialogs/GET_DIALOGS_SAGA'
    , GET_MESSAGES_SAGA = 'dialogs/GET_MESSAGES_SAGA'
    , POST_MESSAGE_SAGA = 'dialogs/POST_MESSAGE_SAGA'
    , DELETE_MESSAGE_SAGA = 'dialogs/DELETE_MESSAGE_SAGA'
    , IS_MESSAGE_VIEWED_SAGA = 'dialogs/IS_MESSAGE_VIEWED_SAGA'
    , TO_SPAM_MESSAGE_SAGA = 'dialogs/SPAM_MESSAGE_SAGA'
    , SET_IS_FETCHING = 'dialogs/SET_IS_FETCHING'
    , SET_PAGE = 'dialogs/SET_PAGE'
    , SET_PAGE_SIZE = 'dialogs/SET_PAGE_SIZE'
    , SET_PORTION_NUMBER = 'dialogs/SET_PORTION_NUMBER'
    , SET_SELECTED_FRIEND = 'dialogs/SET_SELECTED_FRIEND'
}

//websocket
export enum WEBSOCKET {
    SET_MESSAGES = 'websocket/SET_MESSAGES'
    , GET_MESSAGES = 'websocket/GET_MESSAGES'
    , POST_MESSAGE = 'websocket/POST_MESSAGE'
    , DELETE_MESSAGE = 'websocket/DELETE_MESSAGE'
    , SET_IS_FETCHING = 'websocket/SET_IS_FETCHING'

}
