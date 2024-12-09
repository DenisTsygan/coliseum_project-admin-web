import IRole from "@/types/IRole";
import HeaderText from "./ui/HeaderText";
import Divider from "./ui/Divider";
import Permissions from "./Permissions";
interface ComponentProps {
    role: IRole;
}
//TODO components (User , permission , Role) in new fodlder "@/components/entity"
function Role({role}:ComponentProps) {
    return (
      <>
        <div className={"border-2 border-gray-600 m-3"}>
        <HeaderText label="Role"/>
          <div className="text-center flex justify-between p-2">Id:<div className="italic">{role.id}</div></div>
          <div className="text-center flex justify-between p-2">Name:<div className="italic">{role.name}</div></div>
        </div>
        <Divider/>
        <Permissions permissions={role.permissions}/>
      </>
    )
  }
export default Role