import React, { useState } from 'react'
import styled from 'styled-components'
import {RiAccountCircleFill, RiCommunityLine, RiGlobeLine, RiLockPasswordFill, RiMailFill, RiMap2Line, RiMapFill, RiPhoneLine} from 'react-icons/ri';
import Marquee from "react-fast-marquee";
import { SendOut } from '../RouteBackEnd';
import {Oval} from 'react-loader-spinner'
import Swal from 'sweetalert2';

const Footer = () => {

  const [fullname,setFullName]= useState("");  
  const [password,setPassword] = useState("");  
  const [email,setEmail]= useState("");  
  const [address,setAddress]= useState("");  
  const [phoneNumber,setPhoneNumber]= useState("");  
  const [city,setCity]= useState("");  
  const [state,setState]= useState("");  
  const [load, setLoad] = useState(false);



  const Trim = (name) => {
    return name.trim().length > 0 ? true : false; 
  }


  const SendRegisteration = async () => {
    if(Trim(fullname) && Trim(password) && Trim(email) && Trim(address) && Trim(phoneNumber) && Trim(city) && Trim(state)){
        setLoad(true);
        let res = await SendOut(fullname,password,email,address,phoneNumber,city,state); 
        if(res.message){
                setLoad(false);
                Swal.fire({icon:"info",title:"Info",text:res.message});
                setEmail(""); setFullName(""); setPassword(""); setAddress(""); setPhoneNumber("");  setCity(""); setState("");
            }
        }else
           Swal.fire({title:"Info",text:"Fill out all fields",icon:"info"});
  }
  return (
    <Container>
        <Form ty={true}>
            <Input> 
                <RiAccountCircleFill size={35} color='#e1e1e1' />
                <input placeholder='Fullname' type='text' value={fullname}  onChange={(e) => setFullName(e.target.value)} />
            </Input>
            <Input>
                <RiLockPasswordFill size={35} color='#e1e1e1' />
                <input placeholder='Password' type='password' value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </Input>
            <Input>
                <RiMailFill size={35} color='#e1e1e1'/>
                <input placeholder='Email' type='email' value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </Input>
            <Input>
                <RiMap2Line size={35} color='#e1e1e1'/>
                <input placeholder='Address'  type='text' value={address}  onChange={(e) => setAddress(e.target.value)}/>
            </Input>
            <Input>
                <RiPhoneLine size={35} color='#e1e1e1' />
                <input placeholder='PhoneNumber'   type='number' value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)}/>
            </Input>
            <Input>
                <RiCommunityLine size={35} color='#e1e1e1' />
                <input placeholder='City' type='text' value={city}  onChange={(e) => setCity(e.target.value)} />
            </Input>
            <Input>
                <RiGlobeLine size={35} color='#e1e1e1' />
                <input placeholder='State' type='text'  value={state}  onChange={(e) => setState(e.target.value)}/>
            </Input>
            <Submit onClick={(e) => SendRegisteration()}> {!load ? "Register" : <Oval color='#fff' height={20} width={20} />}</Submit>
        </Form>
        <Marquee style={{backgroundColor:"#000",color:"yellow",height:"60px", marginTop:"10px"}} gradient={false}>
           You can contact us via email (mattwardm1980@gmail.com) or call on (+447561093654) Our deliver is fast and safe.
        </Marquee>
    </Container>
  )
}

export const Container = styled.div`
width:100%;
height:auto;
`;

export const Form = styled.div`
display:flex;
width:70%;
padding:40px;
height:auto;
flex-flow:column;
margin: 0 auto;
background:${(props) => props.ty ? "gray" : "#fff"};
border-radius:10px;
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;


export const Submit = styled.div`
width:80%;
height:25px;
color:#fff;
margin-left:auto;
margin-right:auto;
margin-top:50px;
padding:10px;
display:flex;
justify-content:center;
text-align:center;
align-items:center;
border-radius:10px;
background:blue;
cursor:pointer;
`;


export const Input = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
input{
width:100%;
height:30px;
border:1px solid #e1e1e1;
border-radius:2px;
margin-left:10px;
padding-left:10px;
}
`;

export default Footer