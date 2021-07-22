import {ActionsTypes} from "../Redux/reduxStore";
import {actionsAuth} from "../Redux/auth-reducer";
import {call, put, select, takeLatest} from "redux-saga/effects";
import {GET_CAPTCHA_SAGA, LOGIN_SAGA, LOGOUT_SAGA, SET_USER_FROM_AUTH_SAGA} from "../Redux/consts";
import {securityAPI} from "../api/securityAPI";
import {AuthAPI} from "../api/authAPI";
import {ProfileAPI} from "../api/profileAPI";
import {actionsProfile} from "../Redux/profileReducer";
import {stopSubmit} from "redux-form";

//workers
function* getCaptchaSagaWorker({type}: { type: ActionsTypes }) {
    const response = yield call ( securityAPI.getCaptchaUrl )
    try {
        yield put ( actionsAuth.getCaptchaUrlSuccess ( response.data.url ) )
    } catch (e) {
        throw new Error ( e )
    }

}

function* setUserFromAuthSagaWorker({
                                        type,
                                        payload
                                    }: { type: ActionsTypes, payload: { isAuth: boolean} }) {
    const response = yield call ( AuthAPI.me )
    try {
        if (response.data.resultCode === 0) {
            yield put ( actionsAuth.setUserData ( payload.isAuth, {...response.data.data} ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
    if (response.data.userId) {
         yield call ( ProfileAPI.setUserProfile, response.data.userId )
        try {
            yield put ( actionsProfile.setUserProfile ( response.data ) )
        } catch (e) {
            throw new Error ( e )
        }
    }

}

function* loginSagaWorker({type, payload}: {
    type: ActionsTypes, payload: {
        email: string, password: string, rememberMe: boolean, captcha?: string} }) {
    const response = yield call ( AuthAPI.login, payload.email, payload.password, payload.rememberMe, payload.captcha )
    try {
        if (response.data.resultCode === 0) {
            yield put ( actionsAuth.setUserFromAuthSaga ( true) )
        } else {
            if (response.data.resultCode === 10) {
                yield put ( actionsAuth.getCaptchaSaga () )
            }
            yield put ( stopSubmit ( 'login', {_error: 'shit shit shit'} ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
}

function* logoutSagaWorker({type}: {
    type: ActionsTypes}) {
    const response = yield call(AuthAPI.logout)
    try {
        if (response.data.resultCode === 0) {
            yield put( actionsAuth.setUserData ( false, {email: null, login: null, id: null} ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
}


//watchers
export function* getCaptchaSagaWatcher() {
    yield takeLatest ( GET_CAPTCHA_SAGA, getCaptchaSagaWorker )
}
export function* loginSagaWatcher() {
    yield takeLatest ( LOGIN_SAGA, loginSagaWorker )
}
export function* logoutSagaWatcher() {
    yield takeLatest ( LOGOUT_SAGA, logoutSagaWorker )
}
export function* setUserFromAuthSagaWatcher() {
    yield takeLatest ( SET_USER_FROM_AUTH_SAGA, setUserFromAuthSagaWorker )
}