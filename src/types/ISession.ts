import type User from "@/types/IUser"
import IData from "@/types/IData"

export default interface ISession extends IData{
    user: User,
    refreshToken : string,
    userAgent : string,
    fingerPrint : string,
    ip: string,
    expiresIn: Date
}

