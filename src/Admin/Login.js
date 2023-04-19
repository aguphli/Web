import React,{useState} from 'react'
import {RiAccountCircleFill, RiLockPasswordFill, RiMailFill, RiSendPlaneLine, RiStopLine} from 'react-icons/ri';
import { Form,Input,Submit,Container} from '../components/Footer';

function Login() {

const [fullname,setFullName]= useState("");  
const [password,setPassword] = useState("");  


const   SendRegisteration = () => {

}

  return (
    <Container>
        <Form ty={true}>
            <Input>
                <RiAccountCircleFill size={35} color='#e1e1e1' values={fullname}  onChange={(e) => setFullName(e.target.value)}/>
                <input placeholder='Email'/>
            </Input>
            <Input>
                <RiLockPasswordFill size={35} color='#e1e1e1' values={password}  onChange={(e) => setPassword(e.target.value)}/>
                <input placeholder='Password'/>
            </Input>
            <br/><br/>
            <Submit onClick={(e) => SendRegisteration()}>Login</Submit>
        </Form>
    </Container>
  )
}

export default Login