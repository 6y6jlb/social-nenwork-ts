import {initializeSagaWorker} from "../appSagas";
import {actionsApp} from "../../Redux/app-reducer";
import {SET_USER_FROM_AUTH_SAGA} from "../../Redux/consts";



    const genObject = initializeSagaWorker ( actionsApp.initializeSaga () );

    it ( 'should increment click counter (behaviour test)', () => {
        /*const saga = genObject

        expect ( saga.next ().value ).toEqual ( {type: SET_USER_FROM_AUTH_SAGA, payload: {isAuth: true}} )
*/
    } )



