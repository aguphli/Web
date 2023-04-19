import React,{useState} from 'react'
import {RiAccountCircleFill, RiLockPasswordFill, RiMailFill, RiSendPlaneLine, RiStopLine} from 'react-icons/ri';
import { Form,Input,Submit,Container}  from '../components/Footer';
import styled from 'styled-components';

const Register = () => {

    const [fullname,setFullName]= useState("");  
    const [password,setPassword] = useState("");  


    const   SendRegisteration = () => {

    }

  return (
    <Container>
      <Form ty={true}>
          <Input>
              <RiAccountCircleFill size={35} color='#e1e1e1' values={fullname}  onChange={(e) => setFullName(e.target.value)}/>
              <input placeholder='Fullname'/>
          </Input>
          <Input>
              <RiLockPasswordFill size={35} color='#e1e1e1' values={password}  onChange={(e) => setPassword(e.target.value)}/>
              <input placeholder='Password'/>
          </Input>
          <br/><br/>
          <Submit onClick={(e) => SendRegisteration()}>Register</Submit>
     </Form>
    </Container>
  )
}



export default Register