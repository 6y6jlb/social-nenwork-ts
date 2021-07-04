import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer, {ProfileActionsTypes} from "./profileReducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import usersReducer, {UsersActionsTypes} from "./usersReducer";
import authReducer, {AuthActionsTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer, {AppActionsTypes} from "./app-reducer";
import newsReducer from "./news-reducer";


export type ActionsTypes =
    | AuthActionsTypes
    | ProfileActionsTypes
    | UsersActionsTypes
    | DialogsActionsTypes
    | AppActionsTypes


const rootReducer = combineReducers ( {
    profileReducer,
    dialogsReducer,
    navBarReducer,
    usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    news: newsReducer

} );


export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>


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
