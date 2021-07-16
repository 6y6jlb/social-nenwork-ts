import {ActionsTypes} from "../Redux/reduxStore";
import {actionsAuth} from "../Redux/auth-reducer";
import {actionsApp} from "../Redux/app-reducer";
import {put, takeLatest} from "redux-saga/effects";
import {INITIALIZE_SAGA} from "../Redux/consts";

function* initializeSagaWorker({type}: { type: ActionsTypes}) {
    yield put ( actionsAuth.setUserFromAuthSaga( true) )
    yield put ( actionsApp.setInitializedSuccess () )
}

export function* initializeSagaWatcher() {
    yield takeLatest ( INITIALIZE_SAGA, initializeSagaWorker )
}