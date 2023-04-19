import React, {Component,useEffect,useState}  from 'react';
import styled from "styled-components";
import axios from 'axios';
import Swal from 'sweetalert2';
import {Oval} from 'react-loader-spinner'
import GoogleMapReact from 'google-map-react';
import {RiAccountCircleFill, RiLockPasswordFill, RiMailFill, RiSendPlaneLine, RiStopLine} from 'react-icons/ri';
import { Form,Input,Submit} from './Footer';
import {SendOutLogin,PlaceOrders} from '../RouteBackEnd'

const Login = (props) => {

  const [email,setEmail]= useState("");  
  const [password,setPassword] = useState("");  
  const [sessionId,setsessionId] = useState("");  
  const [pickUp,setpickUp] = useState("");  
  const [dropoff,setdropoff] = useState("");  
  const [trackID, settrackID] = useState("");
  const [load, setLoad] = useState(false);
   
  const SendLogin = async (e) => {
    setLoad(true)
    let res = await SendOutLogin(email,password);
     if(res){
      let us = JSON.stringify(res.message);
       setLoad(false);
       if(!us.includes("User"))
           Swal.fire({icon:"info",title:"Info",text:res.message})
        else{
          props.fun(e);
           localStorage.setItem("User",us); 
             Swal.fire({icon:"info",title:"info",text:"Login successfully."})
              window.location.href = window.location.href;
            }
     }
  }


  const PlaceOrder = async () => {
    setLoad(true)
    let res = await PlaceOrders(pickUp,dropoff);
    if(res){
      setLoad(false);
      settrackID(res.message)
      Swal.fire({icon:"info",title:"Info",text:"Order has been place"})
    }
  }

    return(<Container>
                 <Content>
                    <Header>
                    <h2> {props.type === 0 ? "Login" : "Place order"}</h2>
                    <button  onClick={(e) => props.fun(e)}>X</button>
                    </Header>
                      {props.type === 0 ?
                      <Form>
                          <Input>
                              <RiMailFill size={35} color='#e1e1e1' />
                              <input placeholder='Email' type='email' value={email}  onChange={(e) => setEmail(e.target.value)}/>
                          </Input>
                          <Input>
                              <RiLockPasswordFill size={35} color='#e1e1e1'/>
                              <input placeholder='Password' type='password' value={password}  onChange={(e) => setPassword(e.target.value)}/>
                          </Input>
                          <Submit onClick={(e) => SendLogin(e)}>{!load ? "Login" : <Oval color='#fff' height={20} width={20} />}</Submit>
                      </Form>
                      :
                      <Form>
                        <Input>
                            <RiSendPlaneLine size={35} color='#e1e1e1' />
                            <input placeholder='Pickup address' value={pickUp}  onChange={(e) => setpickUp(e.target.value)}/>
                        </Input>

                        <Input>
                            <RiStopLine size={35} color='#e1e1e1' />
                            <input placeholder='Destination address' value={dropoff}  onChange={(e) => setdropoff(e.target.value)}/>
                        </Input>

                        <Submit onClick={(e) => PlaceOrder()}> {!load ? "Place order" : <Oval color='#fff' height={20} width={20} />}</Submit>
                         <br/><br/>
                         <Text>Please Save your tracking ID for later purpose.</Text>
                         <Text style={{color:"blue",fontSize:"12px"}}>{trackID}</Text>
                     </Form>
                      }
                  </Content> 
        </Container>
        )

}






const Container = styled.div `
position:fixed;
top:0;
left:0;
bottom:0;
color:black;
width:100%;
z-index:999;
background-color: rgba(0,0,0,0.8);
`;



const Content  =  styled.div`
max-width:45%;
background-color: white;
max-height:80%;
overflow:initial;
border-radius: 5px;
position: relative;
display: flex;
flex-direction: column;
top:32px;
margin: 0 auto;
padding-bottom:20px;
@media(max-width: 768px){
top:10%;
max-width:100%;
}
`;



const Header  =  styled.div`
display:  block;
padding : 16px 20px;
border-bottom: 1px solid rgba(0,0,0,0.15);
font-size:16px;
line-height: 1.5;
color: rgba(0,0,0,0.6);
font-weight: 400;
display:flex;
justify-content: space-between;
align-items:center;
button{
height:40px;
width:40px;
min-width:auto;
}
`;


const Text = styled.div`
text-align:center;
font-weight:900;
color:#000;
`;




export default Login;


