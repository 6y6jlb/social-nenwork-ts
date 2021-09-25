import {call, put, takeLatest} from "redux-saga/effects";
import {actionsApp} from "../../Redux/appReducer";
import {actionsAuth} from "../../Redux/authReducer";
import {ActionsTypes} from "../../Redux/reduxStore";
import {APP, WEBSOCKET} from "../../Redux/consts";
import {ChatAPI} from "../../api/chatAPI";
import {actionsChat} from "../../Redux/chatReducer";
import {reset} from "redux-form";
import {Dispatch} from "redux";

// workers
export function* initializeSagaWorker({type}: { type: ActionsTypes }) {
    yield put ( actionsAuth.setUserFromAuthSaga ( true ) );
    yield put ( actionsApp.setInitializedSuccess () );
}

export function* startMessageListeningWorker({type,dispatch}: { type: ActionsTypes,dispatch:Dispatch }) {
    yield call ( ChatAPI.start );
    yield call ( ChatAPI.subscribe, (messages) => {
        dispatch ( actionsChat.setMessages ( messages ) );
    } );
}

export function* stopMessageListeningWorker({type,dispatch}: { type: ActionsTypes,dispatch:Dispatch  }) {
    yield call ( ChatAPI.unSubscribe, (messages) => {
        dispatch ( actionsChat.setMessages ( messages ) );
    } );
}

export function* sendMessageWorker({type, payload}: { type: ActionsTypes, payload: { message: string } }) {
    yield call ( ChatAPI.sendMessage, payload.message );
    yield put ( reset ( 'websocketPostMessageForm' ) );
}


// watchers
export function* initializeSagaWatcher() {
    yield takeLatest ( APP.INITIALIZE_SAGA, initializeSagaWorker );
}

export function* startMessageListeningWatcher() {
    yield takeLatest ( WEBSOCKET.START_MESSAGE_LISTENING, startMessageListeningWorker );
}

export function* stopMessageListeningWatcher() {
    yield takeLatest ( WEBSOCKET.STOP_MESSAGE_LISTENING, stopMessageListeningWorker );
}

export function* sendMessageWatcher() {
    yield takeLatest ( WEBSOCKET.SEND_MESSAGE, sendMessageWorker );
}