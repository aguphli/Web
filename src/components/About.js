import React,{useEffect} from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

  return (
    <Table>
        <div  data-aos="slide-right">
            <h2>
                KNOW US MORE
            </h2>
        </div>
        <br/>
        <Shades data-aos="slide-right">
            We were founded on 10th of august 1990
            in ohio, USA. For the past 30years we
            have and been know for commitment to
            duty and Efficiency to serve all over
            the world. Our delivery is fast and safe.
        </Shades>
        <div  data-aos="slide-left">
            <h2>
                SERVICES
            </h2>
        </div>
        <br/>
        <Shades data-aos="slide-left">
          We render all type of delivery. Air, land 
          and sea right to your doorstep at an 
          affordable price all around the world
          regardless of the quality and distaace.
          Our delivery is fast and safe.
        </Shades>

        <div  data-aos="flip-up">
            <h2>
                REACH US VIA
            </h2>
        </div>
        <br/>
        <Shades data-aos="flip-up">
          You can contact us via whatsapp
          (+1(513) 443-8067) email
          (mattwardm1980@gmail.com) Our deliver is fast and safe.
        </Shades>
    </Table>
  )
}


const Table = styled.div`
font-family: "Poppins", sans-serif;
display:flex;
flex-flow:column;
justify-content:space-between;
padding-top:70px;
padding-bottom:150px;
div{
margin-top:100px;
margin-left:auto;
margin-right:auto;
h2{
font-size:45px;
margin: 0 auto;
}
}
`;

const Shades = styled.div`
width:400px;
padding:30px;
text-align:center;
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
@media(max-width:768px){
width:80%;
}
`;

export default About