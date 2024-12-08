import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { registerUserRequest } from '@/services/admin'
import {  useState } from 'react';
import IUser from '@/types/IUser';

function FormRegister({ props_notify_parent }: { props_notify_parent?: (user:IUser)=>void }) {// TODO new form component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [roleId, setRoleId] = useState('');//TODO options

  const register = async()=>{
    let res = await registerUserRequest(email,password,userName,+roleId)
    if(res){
      if(props_notify_parent){
        props_notify_parent(res);
      }
    }
  }
    return (
      <>
        <div className=' flex justify-center'>
          <div>
            <h1 className="text-3xl font-bold underline">
              Create user 
            </h1>
            <Input label="email" updateValue={(value: string) => setEmail(value)}/>
            <Input label='password' updateValue={(value: string) => setPassword(value)}/>
            <Input label='userName' updateValue={(value: string) => setUserName(value)}/>
            <Input label='roleId' updateValue={(value: string) => setRoleId(value)}/>

            <Button props_notify_parent={register}  label='Register' ></Button>
          </div>
        </div>
      </>
    )
  }
export default FormRegister