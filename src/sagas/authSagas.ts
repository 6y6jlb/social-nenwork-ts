import {ActionsTypes} from "../Redux/reduxStore";
import {actionsAuth} from "../Redux/authReducer";
import {call, put, takeLatest} from "redux-saga/effects";
import {AUTH} from "../Redux/consts";
import {securityAPI} from "../api/securityAPI";
import {AuthAPI} from "../api/authAPI";
import {ProfileAPI} from "../api/profileAPI";
import {actionsProfile} from "../Redux/profileReducer";
import {stopSubmit} from "redux-form";
import {jsonMacros} from "../utils/json-helper";

//workers
export function* getCaptchaSagaWorker({type}: { type: ActionsTypes }) {
    try {
        const data = yield call ( securityAPI.getCaptchaUrl )
        yield put ( actionsAuth.getCaptchaUrlSuccess ( data.url ) )
    } catch (e) {
        throw new Error ( e )
    }

}

export function* setUserFromAuthSagaWorker({
                                               type,
                                               payload
                                           }: { type: ActionsTypes, payload: { isAuth: boolean } }) {
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
            yield put ( actionsAuth.setError ( jsonMacros('network.error')  ))
        }
    }

}

export function* loginSagaWorker({type, payload}: {
    type: ActionsTypes, payload: {
        email: string, password: string, rememberMe: boolean, captcha?: string
    }
}) {
    try {
        const response = yield call ( AuthAPI.login, payload.email, payload.password, payload.rememberMe, payload.captcha )

        if (response.data.resultCode === 0) {
            yield put ( actionsAuth.setUserFromAuthSaga ( true ) )
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
    type: ActionsTypes
}) {
    const response = yield call ( AuthAPI.logout )
    try {
        if (response.data.resultCode === 0) {
            yield put ( actionsAuth.setUserData ( false, {email: null, login: null, id: null} ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
}


//watchers
export function* getCaptchaSagaWatcher() {
    yield takeLatest ( AUTH.GET_CAPTCHA_SAGA, getCaptchaSagaWorker )
}

export function* loginSagaWatcher() {
    yield takeLatest ( AUTH.LOGIN_SAGA, loginSagaWorker )
}


export function* logoutSagaWatcher() {
    yield takeLatest ( AUTH.LOGOUT_SAGA, logoutSagaWorker )
}

export function* setUserFromAuthSagaWatcher() {
    yield takeLatest ( AUTH.SET_USER_FROM_AUTH_SAGA, setUserFromAuthSagaWorker )
}