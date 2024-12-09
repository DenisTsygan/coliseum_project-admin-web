import IRole from "@/types/IRole";
import HeaderText from "./ui/HeaderText";
import Role from "./Role";
import Divider from "./ui/Divider";
interface ComponentProps {
    roles: Array<IRole>;
}

function Roles({roles}:ComponentProps) {
    console.log(roles)
    return (
      <>
      <div>
      <HeaderText label="Roles"/>

      <div className="border-orange-800 border-4 m-5 flex">
        {
            roles.map((el,index)=>
             
              <><div className="p-10">
                <Role key={el.id} role={el} />
              </div>
              {
                (index+1)%2 !== 0 ?
                <Divider/>
                :<></>
              }
              </>
              
            )
        }
      
      </div>
      </div>
      </>
    )
  }
export default Roles