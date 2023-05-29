import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import Login from './Login';
import Swal from 'sweetalert2';

const  Header = () =>{

 const [tab, setTab] = useState(""); 
 const [open, setOpen] = useState(false); 
 const [order, setOrder] = useState(9); 
 const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("User")) ? JSON.parse(localStorage.getItem("User")) : null) 
 const history = useNavigate();


const ScrollPos = (x,y) => {
    window.scrollTo(x,y);
    setOpen(false);
}




const ListOrders = () => {
  setOpen(false);
  console.log(isLogin);
     if(isLogin != null || isLogin != undefined)
         history("/orders")
    else
       Swal.fire({icon:"info",title:"Info",text:"PLs Login to see Orders"})
}


const OpenModel =  async (e,n) => {

  if(e.target.innerText === "SignOut"){
     localStorage.removeItem("User");
      Swal.fire({title:"Signed Out",icon:"success"})
       window.location = window.location.href;
  }
    e.preventDefault();
    setOpen(false);
    setOrder(n);
    switch(tab){
            case "open":
                  setTab("close");
                  break;
            case "close":
                setTab("open");
                  break;
            default:
                setTab("close");
                break;
     }
}


  return (
    <Head>
        <Name>
          MyRapidroute
        </Name>
        <LeftTabs>
           <h4 onClick={(e) => ListOrders()}>List orders</h4> 
           <h4 onClick={(e) => OpenModel(e,1)}>Place order</h4> 
           <h3 onClick={(e) => ScrollPos(600,600)}>About us</h3> 
           <h3 onClick={(e) => ScrollPos(1700,1700)}>Contact us</h3> 
           <h3 onClick={(e) => ScrollPos(1200,1200)}>Services</h3> 
           <h3 onClick={(e) => ScrollPos(2200,2200)}>SignUp</h3> 
           <h3 onClick={(e) => OpenModel(e,0)}>{isLogin ? "SignOut" : "SignIn"}</h3> 
        </LeftTabs>
        
    
        {open ?
          <NavBuild>
              <div id='e1' onClick={(e) => setOpen(false)} >
                <RiCloseLine color='#ffffff' size={30} />
              </div>
            
          
              <div id='e2'>
               <h4 onClick={(e) => ListOrders()}>List orders</h4> 
               <h4 onClick={(e) => OpenModel(e,1)}>Place order</h4> 
                <h3 onClick={(e) => ScrollPos(600,600)}>About us</h3> 
                <h3 onClick={(e) => ScrollPos(1200,1200)}>Services</h3> 
                <h3 onClick={(e) => ScrollPos(1700,1700)}>Contact us</h3> 
                <h3 onClick={(e) => ScrollPos(2200,2200)}>SignUp</h3> 
                <h3 onClick={(e) => OpenModel(e,0)}>{isLogin ? "SignOut" : "SignIn"}</h3> 
              </div>
          </NavBuild>
          : 
          ""
        }

        {tab  === "open" ?
           <Login fun={OpenModel} type={order}/>
           :
           ""}

       <NavBars>
        <RiMenu2Line onClick={(e) => setOpen(true)} color='#ffffff' size={30} />
      </NavBars>
    </Head>
  )
}


const Head = styled.div`
display:flex;
height:auto;
justify-content:space-between;
font-family: "Poppins", sans-serif;
background-color:#000;
`;



const NavBuild = styled.div`
background:#000;
width:100%;
height:100vh;
display:flex;
flex-flow:column;
position:absolute;
z-index:99999999;
font-family: "Poppins", sans-serif;
#e1{
padding:15px;
margin-left:auto;
}
#e2{
margin-left:auto;
padding-right:15px;
font-size:12px;
color:#fff;
h3{
margin-top:30px;
font-size:25px;
}
h4{
text-align:center;
background:blue;
border-radius:5px;
color:#fff;
padding:5px;
width:100px;
margin-top:10px;
}
}
`;

const NavBars = styled.div`
display:none;
@media(max-width:768px){
display:block;
padding:15px;
}
`;


const Name = styled.div`
font-size:30pt;
color:yellow;
padding:10px;
@media(max-width:768px){
font-size:20pt;
}
`;


const LeftTabs = styled.div`
font-size:10.5pt;
color:#fff;
display:flex;
align-items:center;
h3{
margin:20px;
cursor:pointer;
}
h4{
text-align:center;
background:blue;
border-radius:5px;
color:#fff;
padding:5px;
width:100px;
margin-right:10px;
}
@media(max-width:980px){
display:none;
}
`;

export default Header