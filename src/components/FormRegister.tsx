import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { fetchRoles, registerUserRequest } from '@/services/admin'
import {  useEffect, useState } from 'react';
import IUser from '@/types/IUser';
import IRole from '@/types/IRole';
import Roles from './Roles';
import HeaderText from './ui/HeaderText';
import Divider from './ui/Divider';

function FormRegister({ props_notify_parent }: { props_notify_parent?: (user:IUser)=>void }) {// TODO new form component
  const [roles, setRoles] = useState<IRole[]>([])
  
  useEffect(()=>{
    const f = async()=>{
      return await fetchRoles()
    }
      let data = f()
      data.then(res=>{
        if(res){
            setRoles(res);
        }
      })
  },[])
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [roleId, setRoleId] = useState('');

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
            <h1 className="text-3xl font-bold underline text-center">
              Create user 
            </h1>
            <Input label="email" updateValue={(value: string) => setEmail(value)}/>
            <Input label='password' updateValue={(value: string) => setPassword(value)}/>
            <Input label='userName' updateValue={(value: string) => setUserName(value)}/>
            <Divider/>
            <HeaderText label='AvaibleRoles'/>
            <Roles roles={roles}/>
            <div className='flex justify-center'>
            <label className=' border-2 border-green-400 rounded-md my-2 p-2'>
              Pick a Role 
              <select className='border-2 border-purple-500 ml-2' value={roleId} onChange={(e)=>setRoleId(e.target.value)}>
              <option value="" disabled>
                Select a role
              </option>
                {
                  roles.map(r=>
                    (<option key={r.id} value={r.id}>{r.name}</option>)
                  )
                }
              </select>
            </label>
            </div>
            
            <Divider/>
            <div className='flex justify-center my-3'>
              <Button props_notify_parent={register}  label='Register' ></Button>
            </div>
          </div>
        </div>
      </>
    )
  }
export default FormRegister