import authReducer, {actionsAuth, InitialStateFromAuthType} from "./authReducer";

let initialState: InitialStateFromAuthType;

beforeAll ( () => {
    initialState = {
        captchaURL: null,
        isAuth: false,
        data: {
            id: null,
            email: null,
            login: null
        }
    }
} );
afterEach ( function () {
    initialState = {
        captchaURL: null,
        isAuth: false,
        data: {
            id: null,
            email: null,
            login: null
        }
    }
} );


test ( 'setUserData from authReducer testing', () => {
    const data = {
        id: 123,
        login: 'test',
        email: ' test'
    }

    const action = actionsAuth.setUserData ( true, data )
    const testAuth = authReducer ( initialState, action )

    expect ( testAuth.data.id ).toBe ( 123 )
    expect ( testAuth.data.login ).toBe ( 'test' )

} )



