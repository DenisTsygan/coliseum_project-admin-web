import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import {  loginRequest } from '@/services/admin'
import {  useState } from 'react';

function FormLogin({ props_notify_parent }: { props_notify_parent: Function }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = async()=>{
    let res = await loginRequest(email,password,"123123123tests")//TODO fingerprint generate
    if(res){
      props_notify_parent();
    }
  }
    return (
      <>
        <div className=' flex justify-center'>
          <div>
            <h1 className="text-3xl font-bold underline">
              Login as Admin!
            </h1>
            <Input label="email" updateValue={(value: string) => setEmail(value)}/>
            <Input label='password' updateValue={(value: string) => setPassword(value)}/>
            <Button props_notify_parent={login}  label='login' ></Button>
          </div>
        </div>
      </>
    )
  }
export default FormLogin