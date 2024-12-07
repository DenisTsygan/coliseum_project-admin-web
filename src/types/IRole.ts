import type IPermission from "@/types/IPermission";

export default interface IRole{
    id: number,
    name: string,
    permissions : IPermission[],
}