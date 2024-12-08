import { Link, Outlet } from "react-router-dom";
import Divider from "@/components/ui/Divider";

function Loyout() {
    return (
      <>
        <div className="flex justify-center my-2">
          <div className=" border-solid border-4 border-amber-600 mx-3">
            <Link to="/sessions">Sessions</Link>
          </div>
          <div className=" border-solid border-4 border-amber-600 mx-3">
            <Link to="/users">Users</Link>
          </div>
        </div>
        <Divider/>
        <Outlet/>
      </>
    )
  }
export default Loyout