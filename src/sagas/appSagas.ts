import {ActionsTypes} from "../Redux/reduxStore";
import {actionsAuth} from "../Redux/authReducer";
import {actionsApp} from "../Redux/appReducer";
import {put, takeLatest} from "redux-saga/effects";
import {APP} from "../Redux/consts";


export function* initializeSagaWorker({type}: { type: ActionsTypes}) {
    yield put ( actionsAuth.setUserFromAuthSaga( true) )
    yield put ( actionsApp.setInitializedSuccess () )
}

export function* initializeSagaWatcher() {
    yield takeLatest ( APP.INITIALIZE_SAGA, initializeSagaWorker )
}