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
import {getCaptchaSagaWatcher, loginSagaWatcher, logoutSagaWatcher, setUserFromAuthSagaWatcher} from "./authSagas";
import {getNewsSagaWatcher} from "./newsSagas";

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
        logoutSagaWatcher(),
        getNewsSagaWatcher(),


    ] )
}