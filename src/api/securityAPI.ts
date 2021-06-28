import {instanceSamuraiAPI} from "./instance";

export const securityAPI = {
    getCaptchaUrl() {
        return instanceSamuraiAPI.get ( `/security/get-captcha-url`, {} )
    }

}