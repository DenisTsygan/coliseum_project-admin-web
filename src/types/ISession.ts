import type User from "@/types/IUser"

export default interface ISession{
    id: string,
    user: User,
    refreshToken : string,
    userAgent : string,
    fingerPrint : string,
    ip: string,
    expiresIn: Date
}

