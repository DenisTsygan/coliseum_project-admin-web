import ISession from "@/types/ISession"
import Button from "@/components/ui/Button"
interface ComponentProps {
    session: ISession;
    funcOnSuccessLogout: Function
}
import User from "@/components/User"
import { logoutByIdRequest } from "@/services/admin";


function Session({session, funcOnSuccessLogout}:ComponentProps) {
    
    const logoutSession =async ()=>{
      const res = await logoutByIdRequest(session.id)
      console.log("🚀 ~ logoutSession ~ res:", res)
      funcOnSuccessLogout(session.id)
    }
    return (
      <>
        <div className=" justify-center w-[400px] border-solid border-4 border-indigo-600 m-5">
          <div className=" text-center flex justify-between p-2">Id:<div className="italic">{session.id}</div></div>
          <div className=" w-full p-1  bg-slate-600"></div>
          <div className="text-center flex justify-between p-2">RefreshToken:<div className="italic">{session.refreshToken}</div></div>
          <div className=" w-full p-1  bg-slate-600"></div>
          <div className="text-center flex justify-between p-2">FingerPrint:<div className="italic">{session.fingerPrint}</div></div>
          <div className=" w-full p-1  bg-slate-600"></div>
          <div className="text-center flex justify-between p-2">Ip:<div className="italic">{session.ip}</div></div>
          <div className=" w-full p-1  bg-slate-600"></div>
          <div className="text-center flex justify-between p-2">UserAgent:<div className="italic">{session.userAgent}</div></div>
          <div className=" w-full p-1  bg-slate-600"></div>
          <div>
            <User user={session.user}/>
          </div>
          <div className=" w-full p-1  bg-slate-600"></div>
          <div className="flex justify-center p-2"><Button props_notify_parent={logoutSession} label="Logout" color="bg-red-400"></Button></div>
        </div>
      </>
    )
  }
//TODO add hover on btn logout (Logout - user ave no access when expired access token)
export default Session