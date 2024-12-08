import ISession from "@/types/ISession"
import Button from "@/components/ui/Button"
import Divider from "@/components/ui/Divider"
interface ComponentProps {
    session: ISession;
    funcOnSuccessLogout?: (id: string) => void
}
import User from "@/components/User"
import { logoutByIdRequest } from "@/services/admin";


function Session({session, funcOnSuccessLogout}:ComponentProps) {
    
    const logoutSession =async ()=>{
      const res = await logoutByIdRequest(session.id)
      console.log("🚀 ~ logoutSession ~ res:", res)
      if(funcOnSuccessLogout){
        funcOnSuccessLogout(session.id)
      }
    }
    return (
      <>
        <div className=" justify-center w-[400px] border-solid border-4 border-indigo-600 m-5">
          <div className=" text-center flex justify-between p-2">Id:<div className="italic">{session.id}</div></div>
          <Divider/>
          <div className="text-center flex justify-between p-2">RefreshToken:<div className="italic">{session.refreshToken}</div></div>
          <Divider/>
          <div className="text-center flex justify-between p-2">FingerPrint:<div className="italic">{session.fingerPrint}</div></div>
          <Divider/>
          <div className="text-center flex justify-between p-2">Ip:<div className="italic">{session.ip}</div></div>
          <Divider/>
          <div className="text-center flex justify-between p-2">UserAgent:<div className="italic">{session.userAgent}</div></div>
          <Divider/>
          <div>
            <User user={session.user}/>
          </div>
          <Divider/>
          <div className="flex justify-center p-2"><Button props_notify_parent={logoutSession} label="Logout" color="bg-red-400"></Button></div>
        </div>
      </>
    )
  }
//TODO add hover on btn logout (Logout - user ave no access when expired access token)
export default Session