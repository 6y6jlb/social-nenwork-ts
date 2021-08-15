import {initializeSagaWatcher, initializeSagaWorker} from "../appSagas";
import {INITIALIZE_SAGA} from "../../Redux/consts";
import {put, takeLatest} from "redux-saga/effects";
import {actionsAuth} from "../../Redux/auth-reducer";
import {actionsApp} from "../../Redux/app-reducer";


test('initialize saga watcher test',()=>{
    const gen = initializeSagaWatcher();
    let result = gen.next();
    expect(result.value).toEqual(takeLatest ( INITIALIZE_SAGA, initializeSagaWorker ));

    result = gen.next();
    expect(result.done).toBeTruthy();
})


test('initialize saga worker test',()=>{
    const gen = initializeSagaWorker({type:INITIALIZE_SAGA});
    let result = gen.next();
    expect(result.value).toEqual(put ( actionsAuth.setUserFromAuthSaga( true) ));

    result = gen.next();
    expect(result.value).toEqual(put ( actionsApp.setInitializedSuccess () ));

    result = gen.next();
    expect(result.done).toBeTruthy();
})
