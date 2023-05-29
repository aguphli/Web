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
  const [status,setStatus] = useState("");
  const [mode,setMode] = useState("");
  const [amount,setAmount] = useState("");
  const [weight,setWeight] = useState("");
  const [courier,setCourier] = useState("");
  const [parcel_id, setParcel_id] = useState("");
  const [address, setAddress] = useState("");
  const [load, setLoad] = useState(false);
 
  const Update = async () => {
     if(Is(Lat) && Is(Log) && Is(status) && Is(mode) && Is(amount) && Is(weight) && Is(courier) && Is(parcel_id) && Is(address)){
       setLoad(true);
       let res = await UpdateOrder(Lat,Log,status,mode,amount,weight,courier,parcel_id,address,props.track);
       if(res){
         setLoad(false);
         Swal.fire({title:"Info",text:res.message,icon:"info"});
       }
    }else
      Swal.fire({title:"From validation",text:"Pls fill out all fields !",icon:"info"});
  }


  function Is(v){
    return v.trim().length > 0 ? true : false;
  }
    

    return(<Container>
                 <Content style={{padding:"20px"}}>
                    <Header>
                    <h2>Order Id: {props.track}</h2>
                    <button  onClick={(e) => props.fun(e)}>X</button>
                    </Header>
                    <CenterElement>
                    <Input>
                     <input placeholder='Latitude' type='number' value={Lat}  onChange={(e) => setlat(e.target.value)} />
                    </Input>
                    <Input>
                        <input placeholder='Longtitude' type='number'  value={Log}  onChange={(e) => setLog(e.target.value)}/>
                    </Input>
                    <Input>
                        <input placeholder='Status (Transit or Arrived)' type='text'  value={status}  onChange={(e) => setStatus(e.target.value)}/>
                    </Input>
                    <Input>
                        <input placeholder='Mode (Air Freight, Land Freight, Sea Freight)' type='text'  value={mode}  onChange={(e) => setMode(e.target.value)}/>
                    </Input>
                    <Input>
                        <input placeholder='Weight (10kg, 20kg etc...)' type='text'  value={weight}  onChange={(e) => setWeight(e.target.value)}/>
                    </Input>
                    <Input>
                        <input placeholder='Courier name' type='text'  value={courier}  onChange={(e) => setCourier(e.target.value)}/>
                    </Input>
                    <Input>
                        <input placeholder='Parcel Id' type='text'  value={parcel_id}  onChange={(e) => setParcel_id(e.target.value)}/>
                    </Input>
                    <Input>
                        <input placeholder='Amount' type='text'  value={amount}  onChange={(e) => setAmount(e.target.value)}/>
                    </Input>
                    <Input>
                        <input placeholder='Current Location (Address)' type='text'  value={address}  onChange={(e) => setAddress(e.target.value)}/>
                    </Input>
                     <Submit h={"20px"} onClick={(e) => Update()}> {!load ? "Update" : <Oval color='#fff' height={20} width={20} />}</Submit>
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
max-height:88%;
overflow:initial;
border-radius: 5px;
position: relative;
display: flex;
flex-direction: column;
top:32px;
margin: 0 auto;
padding-bottom:20px;
@media(max-width: 768px){
top:5%;
max-width:100%;
padding:15px;
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
@media(max-width:768px){
font-size:11px;
}
`;


const CenterElement = styled.div`

`;



export default Tmodel;


