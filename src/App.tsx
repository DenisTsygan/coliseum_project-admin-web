import { useEffect, useState } from 'react'

import { fetchSessions } from '@/services/admin'
import FormLogin from "@/components/FormLogin"
import ISession from './types/ISession'
import Session from '@/components/Session'
import { LS_KEY_ACCESS_TOKEN } from '@/const'

function App() {
  useEffect(()=>{
    const f = async()=>{
      return await fetchSessions()
    }
    if(localStorage.getItem(LS_KEY_ACCESS_TOKEN)){
      setIsAuth(true)
      let sessions = f()
      sessions.then(res=>{
        if(res){
          setSessions(res);
        }
      })
    
    }
    
  },[])
  const [sessions, setSessions] = useState<Array<ISession>>([])
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const fetchData =  async ()=>{
    let sessions = await fetchSessions()
    if(sessions){
      setSessions(sessions);
    }
  }

  const hideFormLogin = ()=>{
    setIsAuth(true)
    fetchData()
  }
  const onSuccessLogout = (id:string)=>{
    console.log("DELETED onSuccessLogout")
    const filteredSessns  = sessions.filter((el)=>el.id !== id)
    setSessions(filteredSessns)
  }
  return (
    <>
    {!isAuth?
       <FormLogin props_notify_parent={hideFormLogin}/>
       :
       <div>
        <h1 className='w-full text-6xl font-bold text-center'>Sessions</h1>
      <div className='flex flex-wrap justify-center'>
        {sessions.map(s=>
          <div key={s.id}>
            <Session session={s} funcOnSuccessLogout={onSuccessLogout}/>
          </div>
        )}
      </div>
       </div>
    }
    </>
  )
}

export default App

/*
TEST VIEW SESSIONS

Sessions
[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
Id: 0ee18bce-7bd8-4a7d-9400-ea6f92f3a908

RefreshToken: 1872471c-59f2-483f-b48b-f5a084dca890

FingerPrint: loploplop

Ip: ::1

UserAgent: PostmanRuntime/7.43.0

User

Id: e1dd880a-4561-48f7-827b-0ec3096bfbdc

Email: lol

UserName: haha

Id: 2c7972f7-207c-4895-83e2-f1c13b53f3a2

RefreshToken: 219893e9-2adb-45b5-9561-248c7f4b2900

FingerPrint: 123123123tests

Ip: ::1

UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36

User

Id: 00000000-0000-0000-0000-000000000001

Email: admin

UserName: admin

Id: 3c03db4c-7058-4594-b08a-45a8f262b08a

RefreshToken: 839d4851-bb26-42e8-8aaf-be2378dc6989

FingerPrint: loploplop

Ip: ::1

UserAgent: PostmanRuntime/7.43.0

User

Id: 00000000-0000-0000-0000-000000000001

Email: admin

UserName: admin

Id: 5af00b1f-cb24-467d-bd69-1b97bb028fd0

RefreshToken: 61fd4fb2-c219-44ea-8adc-7a510296916e

FingerPrint: loploplop

Ip: ::1

UserAgent: PostmanRuntime/7.43.0

User

Id: 00000000-0000-0000-0000-000000000001

Email: admin

UserName: admin

Id: 5cfe20d0-98af-4481-a2d0-7009025f9de5

RefreshToken: dd37bb2b-0423-49a8-ac0b-1b66e65770ea

FingerPrint: loploplop

Ip: ::1

UserAgent: PostmanRuntime/7.43.0

User

Id: 00000000-0000-0000-0000-000000000001

Email: admin

UserName: admin

Id: 8577d5a6-b0d6-4382-99be-420a751e74b6

RefreshToken: cceb3112-96bb-4792-b9c4-69c541084174

FingerPrint: loploplop

Ip: ::1

UserAgent: PostmanRuntime/7.43.0

User

Id: 00000000-0000-0000-0000-000000000001

Email: admin

UserName: admin

Id: b9811da5-ee2d-4ec7-9c0d-7975dec4221d

RefreshToken: 40c3e183-af65-4ab9-a26e-15201b53ba89

FingerPrint: 123123123tests

Ip: ::1

UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36

User

Id: 00000000-0000-0000-0000-000000000001

Email: admin

UserName: admin

Id: ce60df96-3bd8-4177-afba-544cdb6d6a33

RefreshToken: b4e51602-8792-4c3f-8267-94b1d086b482

FingerPrint: 123123123tests

Ip: ::1

UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36

User

Id: 00000000-0000-0000-0000-000000000001

Email: admin

UserName: admin



*/
