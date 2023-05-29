import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Model from './Model'
import Header from './Header';
import { Oval } from 'react-loader-spinner';
import { ListOrders, ListUserOrders, ListUsers } from '../RouteBackEnd';

const  Edit = () => {
  const [list, setList] = useState([])  


  const loadOrders =  async() => {
   let res = await ListOrders();
   if (res.message)
      setList(res.message);
  }

  

  useEffect(() => {
     loadOrders();
  },[])

  return (
    <Container>
        <Body>
           {
           list.length <= 0 ?
           <Spin>
             <Oval height={90} width={90} color='navy' strokeWidth={5} />
           </Spin>
             :
            list.reverse().map((v,i) => <Model v={v}/>)
           }
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


const Spin = styled.div`
width:100px;
height:100px;
margin-left:auto;
margin-right:auto;
margin-top:20%;
`;

export default Edit