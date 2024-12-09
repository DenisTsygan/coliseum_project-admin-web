import HeaderText from "./ui/HeaderText";
import IPermission from "@/types/IPermission";
import Permission from "./Permission";
interface ComponentProps {
    permissions: Array<IPermission>;
}

function Permissions({permissions}:ComponentProps) {
    return (
      <>
      <div className="m-3">
        <HeaderText label="Permissions"/>
        {
            permissions.map(el=>
                <Permission key={el.id} permission={el}/>
            )
        }
      
      </div>
      </>
    )
  }
export default Permissions