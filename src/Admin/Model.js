import React,{useState} from 'react'
import styled from 'styled-components'
import Tmodel from '../Admin/Tmodel'

const Model = (props) =>{

 const [tab, setTab] = useState(""); 
  
 const OpenModel =  async (e) => {
  e.preventDefault();
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
    <Container>
      <table>

        <tr>
          <td>
           <button onClick={(e) => OpenModel(e)}>Update</button>
          </td>
        </tr>

        <tr>
          <td>
           Destination:
           <br/>
           {props.v.desitation}
          </td>
        </tr>
        <tr>
          <td>
           Pickup: 
           <br/>
           {props.v.pickUp}
          </td>
        </tr>
        <tr>
          <td>
           Name:
           <br/>
           {props.v.name}
          </td>
        </tr>
        <tr>
          <td>
           Email:
           <br/>
           {props.v.email}
          </td>
        </tr>
        <tr>
          <td>
           TrackID:
           <br/>
            {props.v.track_id} 
          </td>
          </tr>
      </table>
      {tab === "open" ? <Tmodel track={props.v.track_id}  fun={OpenModel}/> : ""}
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