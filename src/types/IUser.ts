import type IRole from "@/types/IRole"
import IData from "@/types/IData"

export default interface IUser extends IData{
    userName: string,
    email : string,
    roles : IRole[]
}
