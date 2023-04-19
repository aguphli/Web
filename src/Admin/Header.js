import React, { useState } from 'react'
import styled from 'styled-components';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import Login from './Login';

const  Header = () =>{


 const [open, setOpen] = useState(false); 
 const [tab, setTab] = useState(""); 
 const [order, setOrder] = useState(9); 

const ScrollPos = (x,y) => {
    window.scrollTo(x,y);
    setOpen(false);
}


const OpenModel =  async (e,n) => {
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
          MyRapidroute CPanel
        </Name>
        <LeftTabs>
           <h4 onClick={(e) => OpenModel(e,1)}>List Users</h4> 
        </LeftTabs>
        
    
        {open ?
          <NavBuild>
              <div id='e1' onClick={(e) => setOpen(false)} >
                <RiCloseLine color='#ffffff' size={30} />
              </div>
            
              <div id='e2'>
              <h4 onClick={(e) => OpenModel(e,1)}>List Users</h4> 
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
z-index:999999999999;
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
#e2{
padding:15px;
margin-left:auto;
}
h4{
color:#fff;
padding:5px;
width:100px;
text-align:center;
background:blue;
border-radius:5px;
margin-right:25px;
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
h4{
text-align:center;
background:blue;
border-radius:5px;
color:#fff;
padding:5px;
width:100px;
margin-right:25px;
}
@media(max-width:980px){
display:none;
}
`;

export default Header