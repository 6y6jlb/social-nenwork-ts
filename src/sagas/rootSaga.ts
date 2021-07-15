import { all } from "redux-saga/effects";
import getUsersSagaWatcher from "./sagas";

export default function* rootSaga() {
    yield all([
        getUsersSagaWatcher(),

    ])
}