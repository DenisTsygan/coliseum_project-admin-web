
import FormLogin from "@/components/FormLogin";
import { LS_KEY_NEXT_PAGE_LOGIN, NAVIGATE_ROUTE_SESSIONS } from "@/const";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const navigateOnPage = ()=>{

        const possibleRoute = localStorage.getItem(LS_KEY_NEXT_PAGE_LOGIN)
        if(possibleRoute){
            localStorage.removeItem(LS_KEY_NEXT_PAGE_LOGIN)
            navigate(possibleRoute)
        }else{
            navigate("/"+NAVIGATE_ROUTE_SESSIONS)
        }
    }
    return (
      <>
        <FormLogin props_notify_parent={navigateOnPage}/>
      </>
    )
  }
export default Login