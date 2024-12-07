import { LS_KEY_ACCESS_TOKEN,  } from "@/const"//TEST_SESSIONS
import $api, { $apiLogin } from "@/plugins/axiosPlugin"
import IResponceLogin from "@/types/IResponceLogin"
import type ISession from "@/types/ISession"

export const fetchSessions = async():Promise<ISession[] | undefined>=>{
    //TODO test 
    try {
        var responce  = await $api.get("sessions")
        console.log("🚀 ~ fetchSessions ~ responce:")
        console.log(responce)
        console.log(responce.data)
        return responce.data as ISession[]
    } catch (error) {
        console.error(error)
        console.log(error)
    }
    //return TEST_SESSIONS
}

export const loginRequest = async(email:string, password:string, fingerprint:string):Promise<boolean | undefined>=>{
    try {
        var responce  = await $apiLogin.post("login",{
            email:email,
            password:password,
            fingerPrint:fingerprint
        })
        console.log("🚀 ~ loginRequest ~ responce:")
        console.log(responce)
        let tokens = responce.data as IResponceLogin
        localStorage.setItem(LS_KEY_ACCESS_TOKEN, tokens.accessToken)
        return true
    } catch (error) {
        console.error(error)
        console.log(error)
    }

}

export const logoutByIdRequest = async(rsid:string):Promise<string | undefined>=>{
    try {
        var responce  = await $api.post("logout",{
            rsid:rsid,
        })
        return responce.data as string
    } catch (error) {
        console.error(error)
    }

}