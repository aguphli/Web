import React,{useState} from 'react'
import styled from 'styled-components'
import Tmodel from '../Admin/Tmodel'
import Swal from 'sweetalert2';
import { LoadGeoPoints } from '../RouteBackEnd';
import { useNavigate } from 'react-router-dom';

const Model = (props) =>{


  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("User")) ? JSON.parse(localStorage.getItem("User")) : null) 
  const history = useNavigate();


const OpenModel = async () => {
  let res = await LoadGeoPoints(props.v.track_id,isLogin);       
  if(!res.message.toString().includes("disabled")){
     sessionStorage.setItem("remoteOrder",JSON.stringify(res.message));
      history("/pdf");
  }else
      Swal.fire({icon:"info",title:"Info",text:res.message})
}


  return (
    <Container>
      <table>
        <tr>
          <td>
           <button onClick={(e) => OpenModel(e)}>Downlaod PDF</button>
          </td>
        </tr>

        <tr>
          <td>
           TrackID:
           <br/>
           {props.v.track_id}
          </td>
        </tr>
        <tr>
          <td>
           Date: 
           <br/>
           {props.v.date}
          </td>
        </tr>
      </table>
    </Container>
  )
}

const Container = styled.div`
display:flex;
width:60%;
height:auto;
padding:10px;
font-size:12px;
margin-top:30px;
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
@media(max-width:760px){
width:95%;
}
`;

export default Model