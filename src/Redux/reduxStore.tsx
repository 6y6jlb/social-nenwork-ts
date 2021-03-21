import {combineReducers, createStore} from 'redux'
import profileReducer, {addPostActionCreator, changePostInputActionCreator} from "./profileReducer";
import dialogsReducer, {addDialogsMessageActionCreator, changeDialogsInputActionCreator} from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addDialogsMessageActionCreator>
    | ReturnType<typeof changePostInputActionCreator>
    | ReturnType<typeof changeDialogsInputActionCreator>

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    navBarReducer

});

export type RootReducersType = typeof rootReducer
export type AppStateType = ReturnType<RootReducersType>

let store = createStore(rootReducer);


export default store;
