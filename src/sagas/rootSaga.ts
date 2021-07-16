import {all} from "redux-saga/effects";
import {initializeSagaWatcher} from "./appSagas";
import {followSagaWatcher, getUsersSagaWatcher, unfollowSagaWatcher} from "./usersSagas";
import {
    getProfileSagaWatcher,
    getStatusSagaWatcher,
    saveNewProfileSagaWatcher,
    savePhotoFromProfileSagaWatcher,
    updateStatusFromProfileSagaWatcher
} from "./profileSagas";
import {getCaptchaSagaWatcher, loginSagaWatcher, setUserFromAuthSagaWatcher} from "./authSagas";

export default function* rootSaga() {
    yield all ( [
        getUsersSagaWatcher (),
        followSagaWatcher (),
        unfollowSagaWatcher (),
        initializeSagaWatcher (),
        getStatusSagaWatcher (),
        updateStatusFromProfileSagaWatcher (),
        savePhotoFromProfileSagaWatcher (),
        saveNewProfileSagaWatcher (),
        getProfileSagaWatcher (),
        getCaptchaSagaWatcher (),
        setUserFromAuthSagaWatcher (),
        loginSagaWatcher (),


    ] )
}