import User from "@/components/User";
import IUser from "@/types/IUser";
import FormRegister from "@/components/FormRegister";
import Divider from "@/components/ui/Divider";
interface ComponentProps {
    data: Array<IUser>;
    onSuccessRegister?: (user:IUser)=>void;
    onSuccessDeleteUser?: (id:string)=>void;
}

function Users({data,onSuccessRegister,onSuccessDeleteUser}:ComponentProps) {
    return (
      <>
        <div >
          <FormRegister props_notify_parent={onSuccessRegister}/>
          <Divider/>
        <h1 className='w-full text-6xl font-bold text-center'>Users</h1>
        <div className='flex flex-wrap justify-center'>
        {data.map(s=>
          <div className="m-6" key={s.id}>
            <User isInsideRefreshSession={false} user={s} onSuccessDeleteUser={onSuccessDeleteUser}/>
          </div>
        )}
      </div>
       </div>
      </>
    )
  }
export default Users