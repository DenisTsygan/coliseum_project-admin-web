import IUser from "@/types/IUser";

interface ComponentProps {
    user: IUser;
}

function User({user}:ComponentProps) {
    return (
      <>
        <div >
          <div className=" text-center font-bold">User</div>
          <div className="text-center flex justify-between p-2">Id:<div className="italic">{user.id}</div></div>
          <div className="text-center flex justify-between p-2">Email:<div className="italic">{user.email}</div></div>
          <div className="text-center flex justify-between p-2">UserName:<div className="italic">{user.userName}</div></div>
        </div>
      </>
    )
  }
export default User