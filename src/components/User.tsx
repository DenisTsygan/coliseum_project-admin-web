import IUser from "@/types/IUser";
import Button from "@/components/ui/Button";
import { deleteByIdRequest } from "@/services/admin";
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
          <div className=" text-center font-bold">User</div>
          <div className="text-center flex justify-between p-2">Id:<div className="italic">{user.id}</div></div>
          <div className="text-center flex justify-between p-2">Email:<div className="italic">{user.email}</div></div>
          <div className="text-center flex justify-between p-2">UserName:<div className="italic">{user.userName}</div></div>
          {
            !isInsideRefreshSession?
            <Button label="Delete" props_notify_parent={deleteUser} />
            :
            <></>
          }
        </div>
      </>
    )
  }
export default User