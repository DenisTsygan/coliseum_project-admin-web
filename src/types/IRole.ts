import type IPermission from "@/types/IPermission";

export default interface IRole{
    id: string,
    name: string,
    permissions : IPermission[],
}