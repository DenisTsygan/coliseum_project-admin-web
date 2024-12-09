import IPermission from "@/types/IPermission";
import HeaderText from "./ui/HeaderText";
interface ComponentProps {
    permission: IPermission;
}
function Permission({permission}:ComponentProps) {
    return (
      <>
        <div className={"border-2 border-gray-600"}>
          <HeaderText label="Permission"/>
          <div className="text-center flex justify-between p-2">Id:<div className="italic">{permission.id}</div></div>
          <div className="text-center flex justify-between p-2">Name:<div className="italic">{permission.name}</div></div>
        </div>
      </>
    )
  }
export default Permission