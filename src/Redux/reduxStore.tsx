import {combineReducers, createStore} from 'redux'
import profileReducer, {addPostActionCreator, changePostInputActionCreator} from "./profileReducer";
import dialogsReducer, {addDialogsMessageActionCreator, changeDialogsInputActionCreator} from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import usersReducer, {addMoreUsersActionCreator, followActionCreator, unFollowActionCreator} from "./usersReducer";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addDialogsMessageActionCreator>
    | ReturnType<typeof changePostInputActionCreator>
    | ReturnType<typeof changeDialogsInputActionCreator>
    | ReturnType<typeof followActionCreator>
    | ReturnType<typeof unFollowActionCreator>
    | ReturnType<typeof addMoreUsersActionCreator>

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    navBarReducer,
    usersReducer

});

export type RootReducersType = typeof rootReducer
export type AppStateType = ReturnType<RootReducersType>

let store = createStore(rootReducer);


export default store;
