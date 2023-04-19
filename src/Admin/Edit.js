import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Model from './Model'
import Header from './Header';
import { ListOrders, ListUsers } from '../RouteBackEnd';

const  Edit = () => {
  const [list, setList] = useState([])  

  const loadOrders =  async() => {
   let res = await ListOrders();
   console.log(res);
   if (res.message)
      setList(res.message);
  }


  const loadUsers = async() => {
    let res = await ListUsers();
    if (res.message)
      setList(res.message);
  }
  

  useEffect(() => {
     loadOrders();
  },[])

  return (
    <Container>
        <Body>
           {list.map((v,i) => <Model v={v}/>)}
        </Body>
    </Container>
  )
}


const Container = styled.div`
width:100%;
height:100vh;
background:#fff;
`;


const Body = styled.div`
width:90%;
height:80vh;
margin-left:auto;
margin-right:auto;
background:#fff;
display:flex;
flex-flow:column;
overflow-x:hidden;
overflow-y:scroll;
padding-top:50px;
::-webkit-scrollbar {
display: none;
}
`;

export default Edit