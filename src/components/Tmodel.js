import React, {Component,useEffect,useState}  from 'react';
import styled from "styled-components";
import axios from 'axios';
import swal from 'sweetalert2';
import Map, {GeolocateControl, Marker} from 'react-map-gl';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const Tmodel = (props) => {

  const [url, setUrl] = useState(process.env.REACT_APP_LOCATION);    

    return(<Container>
                 <Content>
                    <Header>
                    <h2>Track Location</h2>
                    <button  onClick={(e) => props.fun(e)}>X</button>
                    </Header>
                    <CenterElement>
                        <div style={{ height: '100vh', width: '100%' }}>
                          <Map mapboxAccessToken={url} 
                              initialViewState={{ 
                                latitude: props.local.lat,
                                longitude: props.local.log,
                                zoom: 7.5,
                              }}
                              mapStyle="mapbox://styles/mapbox/streets-v11">
                               <Marker
                                 latitude={props.local.lat}
                                 longitude={props.local.log}
                                 onClick={(e) => {
                                  alert(e);
                                 }}
                                 />
                           </Map>
                        </div>
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


