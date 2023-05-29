import React, { useEffect, useState } from 'react'
import { CheckResponse, ListUser, ListUserOrders } from '../RouteBackEnd'
import styled from 'styled-components';
import Header from './Header';
import Model from '../components/Model';
import { Oval } from 'react-loader-spinner';
import UserModel from './UserModel';

const ListUsers = ()  => {

const [List, setList] = useState([]);

useEffect(() => {
    Open();
 },[])

 
 const  Open  = async () => {
      let res = await ListUser();
      if(CheckResponse(res) === true)
            setList(res.message);
 }

  return (
    <Container>
       <Header/>
       <Scroll>
        
         {
          List.length <= 0 ?
           <Spin>
             <Oval height={90} width={90} color='navy' strokeWidth={5} />
           </Spin>
             :
            List.reverse().map((v,i) => <UserModel v={v} key={i} />)
          }
       </Scroll>
    </Container>
  )
}


const Container = styled.div`
width:100%;
height:100vh;
`;


const Scroll = styled.div`
display:flex;
flex-flow:column;
align-items:center;
overflow-x:scroll;
height:100vh;
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

export default ListUsers