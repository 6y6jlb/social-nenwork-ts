import {initializeSagaWatcher, initializeSagaWorker} from "../appSagas";
import {GET_CAPTCHA_SAGA, INITIALIZE_SAGA, SET_USER_FROM_AUTH_SAGA} from "../../Redux/consts";
import {call, put, takeLatest} from "redux-saga/effects";
import {getCaptchaSagaWorker, setUserFromAuthSagaWorker} from "../authSagas";
import {securityAPI} from "../../api/securityAPI";
import {actionsAuth} from "../../Redux/auth-reducer";
import {AuthAPI} from "../../api/authAPI";


test ( 'initialize saga watcher test', () => {
    const gen = initializeSagaWatcher ();
    let result = gen.next ();
    expect ( result.value ).toEqual ( takeLatest ( INITIALIZE_SAGA, initializeSagaWorker ) );

    result = gen.next ();
    expect ( result.done ).toBeTruthy ();
} )


test ( 'getCaptchaSagaWorker saga worker success test', () => {
    const gen = getCaptchaSagaWorker ( {type: GET_CAPTCHA_SAGA} );
    expect ( gen.next ().value ).toEqual ( call ( securityAPI.getCaptchaUrl ) )
    const data = {url: 'emptyString'}
    expect ( gen.next ( data ).value ).toEqual ( put ( actionsAuth.getCaptchaUrlSuccess ( data.url ) ) )
    expect ( gen.next ().done ).toBeTruthy ();
} );

test ( 'getCaptchaSagaWorker saga worker bad answer test', () => {
    const gen = getCaptchaSagaWorker ( {type: GET_CAPTCHA_SAGA} );
    expect ( gen.next ().done ).toBeFalsy();

} );

test ( 'setUserFromAuthSagaWorker saga worker success test', () => {
    const payload = {isAuth:true}
    const gen = setUserFromAuthSagaWorker ( {type: SET_USER_FROM_AUTH_SAGA,payload} );
    expect ( gen.next ().value ).toEqual ( call ( AuthAPI.me ))
    const data = {resultCode: 0,id:123,login:'123',email:'123'}

} );