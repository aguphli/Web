import React,{useState} from 'react'
import styled from 'styled-components'
import Tmodel from './Tmodel'
import Swal from 'sweetalert2';
import { DeleteOrder, EditUser } from '../RouteBackEnd';

const UserModel = (props) =>{


const updateUser = () => {
    Swal.fire({
      icon:"warning",
      title: `Are you sure you want to  ${!props.v.isDisabled ? 'disable' : 'enable' } user ?`,
      showCancelButton: true,
      confirmButtonText: ` ${!props.v.isDisabled ? 'Disable' : 'Enable' }`,
      denyButtonText: `Cancel`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        let res = await EditUser(props.v.email,props.v.isDisabled ? 1 : 0); 
         Swal.fire(` ${res.message} !`, '', 'success');
         setTimeout(()=> window.location.href = window.location.href,2000)
      } 
    })
}


  return (
    <Container>
      <table>
        <tr>
          <td>
           <button onClick={(e) => updateUser(e)}>Update</button>
          </td>
        </tr>

        <tr>
          <td>
           Fullname:
           <br/>
           {props.v.fullname}
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
           Account Status:
           <br/>
           {props.v.isDisabled != undefined  ? props.v.isDisabled.toString() : ""}
          </td>
        </tr>
        <tr>
          <td>
           Phone number:
           <br/>
            {props.v.phoneNumber} 
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

export default UserModel