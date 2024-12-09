import IUser from "@/types/IUser";
import Button from "@/components/ui/Button";
import { deleteByIdRequest } from "@/services/admin";
import Roles from "@/components/Roles";
import Divider from "@/components/ui/Divider";
import HeaderText from "./ui/HeaderText";

interface ComponentProps {
    user: IUser;
    isInsideRefreshSession: boolean
    onSuccessDeleteUser? : (id: string) => void
}

function User({user , isInsideRefreshSession,onSuccessDeleteUser}:ComponentProps) {

  const deleteUser =async ()=>{
    const res = await deleteByIdRequest(user.id)
    console.log("🚀 ~ deleteUser ~ res:", res)
    if(onSuccessDeleteUser){
      onSuccessDeleteUser(user.id)
    }
  }
    return (
      <>
        <div className={!isInsideRefreshSession ? "border-4 border-red-400":""}>
          <HeaderText label="User"/>
          <div className="text-center flex justify-between p-2">Id:<div className="italic">{user.id}</div></div>
          <div className="text-center flex justify-between p-2">Email:<div className="italic">{user.email}</div></div>
          <div className="text-center flex justify-between p-2">UserName:<div className="italic">{user.userName}</div></div>
          <Divider/>
          <Roles roles={user.roles}/>
          <Divider/>
          {
            !isInsideRefreshSession?
            <div className=" flex justify-center my-2">
              <Button label="Delete" props_notify_parent={deleteUser} />
            </div>
            :
            <></>
          }
        </div>
      </>
    )
  }
export default User