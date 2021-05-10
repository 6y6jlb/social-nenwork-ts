import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer, {addPost, changeIsFetchingFromProfile, setStatusAC, setUserProfile} from "./profileReducer";
import dialogsReducer, {addDialogsMessage} from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import usersReducer, {
    addMoreUsersActionCreator,
    changeCurrentPageActionCreator,
    changeIsFetchingActionCreator,
    changeTotalCountActionCreator,
    followActionCreator,
    sendRequestFromFollowUnFollowActionCreator,
    unFollowActionCreator
} from "./usersReducer";
import authReducer, {setUserData, setUserTC} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof addDialogsMessage>
    | ReturnType<typeof followActionCreator>
    | ReturnType<typeof unFollowActionCreator>
    | ReturnType<typeof addMoreUsersActionCreator>
    | ReturnType<typeof changeCurrentPageActionCreator>
    | ReturnType<typeof changeTotalCountActionCreator>
    | ReturnType<typeof changeIsFetchingActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof sendRequestFromFollowUnFollowActionCreator>
    | ReturnType<typeof changeIsFetchingFromProfile>
    | ReturnType<typeof setStatusAC>


const rootReducer = combineReducers ( {
    profileReducer,
    dialogsReducer,
    navBarReducer,
    usersReducer,
    auth: authReducer,
    form: formReducer

} );



export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

const composeEnhancers =
    typeof window === 'object' &&
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ( {
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    } ) : compose;

const enhancer = composeEnhancers (
    applyMiddleware ( thunkMiddleware ),
    // other store enhancers if any
);
const store = createStore ( rootReducer, enhancer );
//let store = createStore ( rootReducer,applyMiddleware(thunkMiddleware));
//(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(), need to fix
//@ts-ignore
window.store = store

export default store;
