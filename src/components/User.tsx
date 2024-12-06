import IUser from "@/types/IUser";

interface ComponentProps {
    user: IUser;
}

function User({user}:ComponentProps) {
    return (
      <>
        <div>
          <p>User</p>
          <p>Id: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>UserName: {user.userName}</p>
        </div>
      </>
    )
  }
export default User