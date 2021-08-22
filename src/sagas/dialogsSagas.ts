import {call, put, takeLatest} from "redux-saga/effects";
import {GET_DIALOGS_SAGA, GET_MESSAGES_SAGA, POST_MESSAGE_SAGA, START_DIALOG_SAGA} from "../Redux/consts";
import {ActionsTypes} from "../Redux/reduxStore";
import {DialogsAPI} from "../api/dialogsAPI";
import {actionsDialogs} from "../Redux/dialogsReducer";


//workers
export function* startDialogSagaWorker({type, payload}: { type: ActionsTypes, payload: { id: number } }) {
    //yield put(actionsDialogs.toDialogSaga(payload.id))
    try {
        const response = yield call ( DialogsAPI.startDialog, payload.id );
    } catch (e) {
        console.log ( e );
    } finally {
    }
};

export function* getDialogsSagaWorker({type, payload}: { type: ActionsTypes, payload: {} }) {

    try {
        const response = yield call ( DialogsAPI.getDialogs );
        const { data } = response
        yield put(actionsDialogs.setDialogs(data))
    } catch (e) {
        console.log ( e );
    } finally {
    }
};
export function* getMessagesSagaWorker({type, payload}: { type: ActionsTypes, payload: { id: number } }) {

    try {
        const response = yield call ( DialogsAPI.getMessages,payload.id );

    } catch (e) {
        console.log ( e );
    } finally {
    }
};
export function* postMessageSagaWorker({type, payload}: { type: ActionsTypes, payload: { id: number ,message:string} }) {

    try {
        const response = yield call ( DialogsAPI.sendMessage,payload.id,payload.message );

    } catch (e) {
        console.log ( e );
    } finally {
    }
};

//watchers

export function* postMessageSagaWatcher() {
    yield takeLatest ( POST_MESSAGE_SAGA, postMessageSagaWorker );
};
export function* startDialogSagaWatcher() {
    yield takeLatest ( START_DIALOG_SAGA, startDialogSagaWorker );
};

export function* getMessagesSagaWatcher() {
    yield takeLatest ( GET_MESSAGES_SAGA, getMessagesSagaWorker );
};
export function* getDialogsSagaWatcher() {
    yield takeLatest ( GET_DIALOGS_SAGA, getDialogsSagaWorker );
};
