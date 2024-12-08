import User from "@/components/User";
import IUser from "@/types/IUser";
import FormRegister from "@/components/FormRegister";
import Divider from "@/components/ui/Divider";
interface ComponentProps {
    data: Array<IUser>;
    onSuccessRegister?: (user:IUser)=>void
}

function Users({data,onSuccessRegister}:ComponentProps) {
    return (
      <>
        <div>
          <FormRegister props_notify_parent={onSuccessRegister}/>
          <Divider/>
        <h1 className='w-full text-6xl font-bold text-center'>Users</h1>
        <div className='flex flex-wrap justify-center'>
        {data.map(s=>
          <div key={s.id}>
            <User user={s} />
          </div>
        )}
      </div>
       </div>
      </>
    )
  }
export default Users