import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";
import Tmodel from './Tmodel';
import { LoadGeoPoints } from '../RouteBackEnd';
import Swal from 'sweetalert2';
import { Oval } from 'react-loader-spinner';


const Hero = () => {

 const [show, setShow] = useState("");  
 const [status, setStatus] = useState("Track");  
 const [serial, setSerial] = useState("");    
 const [showModel, setShowModel] = useState("");  
 const [local, setLocal] = useState({lat:0,log:0});
 const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("User")) ? JSON.parse(localStorage.getItem("User")) : null) 


 const OpenModel =  async (e) => {
      e.preventDefault();
      switch(showModel){
          case "open":
                setShowModel("close");
                break;
          case "close":
                setShowModel("open");
                break;
          default:
               setShowModel("close");
               break;
      }
}




const GetLocation = async () => {
    if(serial.trim().length > 0){
        let res = await LoadGeoPoints(serial,isLogin);
        console.log(res.message)
        if(res){
          setShow(false);
          if(JSON.stringify(res.message).includes("GeoPoint")){
            if(res.message.GeoPoint.lat !== "0" && res.message.GeoPoint.log !== "0" && res.message.GeoPoint.lat != 0 && res.message.GeoPoint.log != 0){
                local.lat = res.message.GeoPoint.lat;
                local.log = res.message.GeoPoint.log;
                setStatus("View")
            }else
               Swal.fire({title:"Order status",text:"Order is not Live Yet.",icon:"info"})
          }else
                Swal.fire({title:"Order Status",text: res.message, icon:"info"});
        }
    }
}




const Send = async (e) => {
    if(serial.trim().length <= 0)
       Swal.fire({title:"Form Validation",text:"Pls fill the Order ID or Login.",icon:"info"});
    else{
        OpenModel(e); 
        GetLocation();
    }
    setShow(true);
}




useEffect(() => {
    AOS.init();
    AOS.refresh();
    console.log(isLogin);
    sessionStorage.removeItem("remoteOrder");
}, [])

  return (
    <Banner>
        <Left>
            <WriteUp>
                    <b> 
                        Search no more MyRapidroute is here to serve you best despite
                        the distance and quality. We have been know for efficiency
                        and commitment for the past ten years, and we have expert in
                        our various departments. Who has at list 5 years expricence
                        in their field. We deliver our goods through Air, Land and Sea
                        to your door step at affordable prices.
                        So what are you waiting for?, Put an end to your search today!!!.
                    </b> 
                    <h3 style={{textTransform:"uppercase"}}>think delivery, think MyRapidroute</h3>
            </WriteUp>
            <Logo>
                <div  data-aos="slide-right">
                    <img src='../assets/logo.png'></img>
                </div>
            </Logo>
        </Left>
         <Input>
            <input placeholder='Tracking Id' value={serial} onChange={(e) => setSerial(e.target.value)}/>
            <button onClick={(e)=>{isLogin ? Send(e) : Swal.fire({title:"Login", text:"Pls Login to Track.",icon:"info"})}}> {show ? <Oval  color='#fff' height={12}  width={12}/> : status}</button>
         </Input>
         {showModel === "open"  &&  local.lat !== 0 && local.log !== 0 ? <Tmodel local={local} fun={OpenModel}/> : ""}
    </Banner>
  )
}



const Banner = styled.div`
background:url('../assets/received_609474817772386.jpeg');
background-repeat:no-repeat;
height:95vh;
width:100%;
display:flex;
flex-flow:column;
@media(max-width:768px){
overflow:hidden;
height:115vh;
}
`;



const Left = styled.div`
width:100%;
height:80%;
display:flex;
@media(max-width:768px){
flex-direction:column;
}
`;


const WriteUp = styled.div`
margin-left:50px;
width:50%;
color:white;
margin-top:150px;
font-size:20px;
@media(max-width:980px){
width:90%;
font-size:15px;
margin-top:70px;
margin-left:auto;
margin-right:auto;
display:flex;
flex-flow:column;
justify-content:center;
align-items:center;
text-align:center;
}
`;



const Logo = styled.div`
margin-left:auto;
padding-right:100px;
img{
width:500px;
height:400px;
object-fit:contain;
}
@media(max-width:980px){
display:flex;
justify-content:center;
align-items:center;
text-align:center;
width:100%;
height:200px;
img{
width:300px;
height:300px;
}
}
`;



const Input= styled.div`
width:50%;
height:100px;
margin-top:50px;
justify-content:space-evenly;
input{
width:70%;
height:30px;
margin-left:50px;
padding-left:5px;
background-color:#fff;
}
button{
background:red;
color:white;
height:35px;
width:50px;
border:none;
cursor:pointer;
}
@media(max-width:980px){
width:90%;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin-left:auto;
margin-right:auto;
margin-top:20px;
input{
margin-left:0px;
}
}
`;


export default Hero