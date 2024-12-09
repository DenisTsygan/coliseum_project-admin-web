import { LS_KEY_ACCESS_TOKEN, LS_KEY_NEXT_PAGE_LOGIN, NAVIGATE_ROUTE_LOGIN, NAVIGATE_ROUTES } from "@/const"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Spiner from "@/components/ui/Spiner"
import IData from "@/types/IData"

interface ComponentProps<T extends IData> {
    Component: React.ComponentType<{
      data: T[], 
      onSuccessLogout?: (id: string) => void ,
      onSuccessDeleteUser?: (id: string) => void ,
      onSuccessRegister?: (user:T)=>void
    }>,
    funcFetch: Function,
    nextNavigateRoute: NAVIGATE_ROUTES
}


function WrapperFetch<T extends IData>( {
    Component, 
    funcFetch, 
    nextNavigateRoute,
  }:ComponentProps<T>) {
    const [data, setData] = useState<T[]>([])
    const [isLoading , setIsLoading] = useState(true)
    const navigate = useNavigate()
    const showLogin = ()=>{
        navigate("/"+NAVIGATE_ROUTE_LOGIN)
      }
      const onSuccessLogout = (id:string)=>{//TODO rename func
        console.log("DELETED onSuccessLogout")
        const filteredData  = data.filter((el)=>el.id !== id)
        setData(filteredData)
      }
      const onSuccessRegister = (user:T)=>{
        console.log("🚀 ~ onSuccessRegister ~ onSuccessRegister:")
        console.log(user)
        const updatedData = [...data , user];
        setData(updatedData)
      }
    useEffect(()=>{
        const f = async()=>{
          return await funcFetch()
        }
        if(localStorage.getItem(LS_KEY_ACCESS_TOKEN)){
          let data = f()
          data.then(res=>{
            if(res){
                setData(res);
                setIsLoading(false)
            }else{
                showLogin()
                localStorage.setItem(LS_KEY_NEXT_PAGE_LOGIN, "/"+nextNavigateRoute)
            }
          })
        }
      },[])
    return (
      <>
      {
        isLoading?
        <Spiner/>:
        <Component 
          data={data} 
          onSuccessLogout={onSuccessLogout} 
          onSuccessRegister={onSuccessRegister}
          onSuccessDeleteUser={onSuccessLogout}
        />
      }
      </>
    )
  }

  export default WrapperFetch