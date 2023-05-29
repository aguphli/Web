import React, {Component,useEffect,useState,useRef}  from 'react';
import styled from "styled-components";
import axios from 'axios';
import Swal from 'sweetalert2';
import {Oval} from 'react-loader-spinner'
import GoogleMapReact from 'google-map-react';
import {RiAccountCircleFill, RiLockPasswordFill, RiMailFill, RiSendPlaneLine, RiStopLine} from 'react-icons/ri';
import { Form,Input,Submit} from './Footer';
import {SendOutLogin,PlaceOrders} from '../RouteBackEnd'
import ReactDOMServer from 'react-dom/server';
import {useNavigate} from 'react-router-dom';





const Login = (props) => {

  const [email,setEmail]= useState("");  
  const [password,setPassword] = useState("");  
  const [sessionId,setsessionId] = useState("");  
  const [pickUp,setpickUp] = useState("");  
  const [dropoff,setdropoff] = useState("");  
  const [trackID,settrackID] = useState("");  
  const [senderName,setsenderName] = useState("");  
  const [senderAddress,setsenderAddress] = useState("");  
  const [recieversName,setrecieversName] = useState("");  
  const [view,setView] = useState("");  
  const [recieversAddress, setrecieversAddress] = useState("");
  const [load, setLoad] = useState(false);
  const [openPdf, setopenPdf] = useState(false);
  let history = useNavigate();





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
             Swal.fire({icon:"info",title:"Info",text:"Login successfully."})
              window.location.href = window.location.href;
            }
     }
  }




  const PlaceOrder = async () => {
    if(pickUp.trim().length > 0 && dropoff.trim().length > 0 &&  senderName.trim().length > 0  &&  senderAddress.trim().length > 0  &&  recieversName.trim().length > 0  &&  recieversAddress.trim().length > 0 ) {
        setLoad(true)
        let res = await PlaceOrders(pickUp,dropoff,senderName,senderAddress,recieversName,recieversAddress);
          if(!res.message.includes("disabled")){
              setLoad(false);
              setView("none");
              settrackID(res.message)
              sessionStorage.setItem("tid",res.message);
              Swal.fire({icon:"info",title:"Info",text:"Order has been place"});
          }else{
            setLoad(false);
            Swal.fire({icon:"info",title:"Info",text:res.message});
          }
     }else
         Swal.fire({icon:"info",title:"Info",text:"Pls fill out both fields !"})
  }




  useEffect(() => {
  },[])


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
                            <RiSendPlaneLine size={35} color='#e1e1e1' />
                            <input placeholder='Drop off address' value={dropoff}  onChange={(e) => setdropoff(e.target.value)}/>
                        </Input>

                        <Input>
                            <RiStopLine size={35} color='#e1e1e1' />
                            <input placeholder="Receiver's name" value={recieversName}  onChange={(e) => setrecieversName(e.target.value)}/>
                        </Input>

                        <Input>
                            <RiStopLine size={35} color='#e1e1e1' />
                            <input placeholder="Receiver's address" value={recieversAddress}  onChange={(e) => setrecieversAddress(e.target.value)}/>
                        </Input>


                        <Input>
                            <RiStopLine size={35} color='#e1e1e1' />
                            <input placeholder="Sender's name" value={senderName}  onChange={(e) => setsenderName(e.target.value)}/>
                        </Input>

                        <Input>
                            <RiStopLine size={35} color='#e1e1e1' />
                            <input placeholder="Sender's address" value={senderAddress}  onChange={(e) => setsenderAddress(e.target.value)}/>
                        </Input>

                        <Submit show={view}  onClick={(e) => PlaceOrder()}> {!load ? "Place order" : <Oval color='#fff' height={20} width={20} />}</Submit>
                         {
                          trackID.trim().length > 0 ?
                          <div>
                            <br/>
                              <TextDisplay>Please Download receipt.</TextDisplay>
                              <TextDisplay style={{color:"blue",fontSize:"12px"}}>Tracking ID: {trackID}</TextDisplay>                 
                              <div style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",marginLeft:"auto",width:"100%",height:"50px",marginRight:"auto"}} >
                                <button onClick={(e) => history("/pdf")}>Download PDF receipt</button>
                              </div>
                           </div> 
                          :
                          ""
                         }
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
max-height:90%;
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
overflow-y:scroll;
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


const TextDisplay = styled.div`
text-align:center;
font-weight:900;
color:#000;
`;




export default Login;


