import React, {Component,useEffect,useState}  from 'react';
import styled from "styled-components";
import axios from 'axios';
import swal from 'sweetalert2';
import { Oval } from 'react-loader-spinner';
import { Input ,Submit} from '../components/Footer';
import { UpdateOrder } from '../RouteBackEnd';
import Swal from 'sweetalert2';


const Tmodel = (props) => {

  const [Lat, setlat] = useState("");
  const [Log, setLog] = useState("");
  const [load, setLoad] = useState(false);
 
  const Update = async () => {
       setLoad(true);
       let res = await UpdateOrder(Lat,Log,props.track);
       if(res){
         setLoad(false);
         Swal.fire({title:"info",text:res.message,'icon':"info"});
       }
  }


    

    return(<Container>
                 <Content style={{padding:"20px"}}>
                    <Header>
                    <h2>Update Location</h2>
                    <button  onClick={(e) => props.fun(e)}>X</button>
                    </Header>
                    <CenterElement>
                    <Input>
                     <input placeholder='Latitude' type='number' value={Lat}  onChange={(e) => setlat(e.target.value)} />
                    </Input>
                    <Input>
                        <input placeholder='Logtitude' type='number'  value={Log}  onChange={(e) => setLog(e.target.value)}/>
                    </Input>
                     <Submit onClick={(e) => Update()}> {!load ? "Update" : <Oval color='#fff' height={20} width={20} />}</Submit>
                    </CenterElement>
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
padding:15px;
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


const CenterElement = styled.div`

`;



export default Tmodel;


