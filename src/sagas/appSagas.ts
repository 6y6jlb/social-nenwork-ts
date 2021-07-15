import {ActionsTypes} from "../Redux/reduxStore";
import {setUserTC} from "../Redux/auth-reducer";
import {actionsApp} from "../Redux/app-reducer";
import {call, put, takeLatest} from "redux-saga/effects";
import {INITIALIZE_SAGA} from "../Redux/consts";

function* initializeSagaWorker({type}: { type: ActionsTypes }) {

    yield call ( setUserTC, true )
    yield put ( actionsApp.setInitializedSuccess () )
}

export function* initializeSagaWatcher() {
    yield takeLatest ( INITIALIZE_SAGA, initializeSagaWorker )
}