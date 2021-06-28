import {instanceSamuraiAPI, ResponseHeaderContainerType} from "./instance";

export const AuthAPI = {
    me() {
        return instanceSamuraiAPI.get<ResponseHeaderContainerType> ( `auth/me`, {} )
    },
    login(email: string, password: string, rememberMe: boolean = false,captcha:string|null = null) {
        const model = {
            email, password, rememberMe,captcha
        }
        return instanceSamuraiAPI.post ( '/auth/login', model )
    },
    logout() {
        return instanceSamuraiAPI.delete ( '/auth/login' )
    },
}