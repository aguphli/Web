import React, {useEffect,useRef, useState} from 'react'
import styled from 'styled-components';
import * as htmlToImage from "html-to-image";
import JsBarcode from 'jsbarcode';
import {jsPDF} from 'jspdf';
import {useNavigate} from 'react-router-dom';
const Receipt = () => {

const refs = useRef();
const [track_id,setTrackId] = useState("");
const [email, setEmail] = useState("one");
const [fullname, setFullname] = useState("");
const [current, setCurrent] = useState("");
const [date, setDate] = useState("");
const [from, setFrom] = useState("");
const [to, setTo] = useState("");
const history = useNavigate();


useEffect(() => {

  var element = document.getElementById("barcode");
        JsBarcode(element, {track_id}, {  
        lineColor: "#000000",
        background: "#ffffff",
        width: 2,
        height: 100,
        displayValue: false
    });
	  SaveNav();
 },[]);



 function SaveNav() {
	htmlToImage.toPng(refs.current)
	.then(function(dataUrl){
	   var doc = new jsPDF();
	   doc.addImage(dataUrl, 'PNG',15,40,180,180);
	   doc.save(`Receipt_${Date.now()}.pdf`);
	   history("/");
	}).catch((err) => console.log(err))
 }

    
  return (<Container  ref={refs}>
		  <div  className="main">
             <h3 id="text">Your Parcel Information</h3>
			  <img  src="assets/logo.png" /> 
		  </div>

		  <div className="second_main">
			<h3 id="text">
			  Parcel Id:  {JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).Parcel_id : "Yet to be assigned."}
			</h3>
		  </div>

		 <div className="third_main">
           <div className="ft">
			 FROM
		   </div>
		    <div className="ft">
			 SHIP TO
		   </div>
		  </div>
		  <div id="fouth_main">
            <table>
			   <tr>
					<td style={{padding:"5px"}}>
						Email 
					</td>
					<td style={{fontSize:"13px",padding:"10px"}}>
						{ JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).email : JSON.parse(localStorage.getItem("User")).User.email}
					</td>
				</tr>


				<tr>
					<td style={{padding:"5px"}}>
				      Sender Name 
					</td>
					<td style={{fontSize:"13px",padding:"10px"}}>
						{ JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).senderName : JSON.parse(sessionStorage.getItem("order"))[2]}
					</td>
				</tr>

				<tr>
					<td style={{padding:"5px"}}>
					   Sender Address 
					</td>
					<td style={{fontSize:"13px",padding:"10px"}}>
						{ JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).senderAddress : JSON.parse(sessionStorage.getItem("order"))[3]}
					</td>
				</tr>


				<tr>
					<td style={{padding:"5px"}}>
					 Receiver's Name
					</td>
					<td style={{fontSize:"13px",padding:"10px"}}>
						{ JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).recieversName : JSON.parse(sessionStorage.getItem("order"))[4]}
					</td>
				</tr>


				<tr>
					<td style={{padding:"5px"}}>
					 Receiver's Address
					</td>
					<td style={{fontSize:"13px",padding:"10px"}}>
						{ JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).recieversAddress : JSON.parse(sessionStorage.getItem("order"))[5]}
					</td>
				</tr>
  
				<tr>
					<td style={{padding:"5px"}}>
						Source Location 
					</td>
					<td style={{fontSize:"13px",padding:"10px"}}>
						{JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).pickUp : JSON.parse(sessionStorage.getItem("order"))[0]}
					</td>
				</tr>
				<tr>
					<td  style={{padding:"5px"}}>
						Destination Location  
					</td>
					<td style={{fontSize:"13px",padding:"10px"}}>
				  	 {JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).desitation : JSON.parse(sessionStorage.getItem("order"))[1]}
					</td>
				</tr>
				<tr>
					<td style={{padding:"5px"}}>
						Present Location 
					</td>
					<td style={{fontSize:"13px",padding:"10px"}}>
						{JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).currentLocation : "Pending assessment."}
					</td>
				</tr>
				<tr>
					<td style={{padding:"5px"}}>
						Date 
					</td>
					<td style={{fontSize:"12px",padding:"10px"}}>
						{JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).date : new Date().toLocaleDateString()}
					</td>
				</tr>
				<tr>
					<td style={{fontWeight:"bold"}}>
						Tracking Code 
					</td>
					<td style={{fontSize:"10px",padding:"10px"}}>
					{JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).track_id : sessionStorage.getItem("tid")}
					</td>
				</tr>				
				 <tr>
					<td style={{padding:"5px"}}>
						Status 
					</td>
					<td style={{fontSize:"10px",padding:"10px"}}>
					 {JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).Status : "Pending assessment."}
					</td>
				</tr>
				<tr>
					<td style={{padding:"5px"}}>
						Weight 
					</td>
					<td style={{fontSize:"10px",padding:"10px"}}>
					  {JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).Weight : "Pending assessment."}
					</td>
				</tr>
				<tr>
					<td style={{padding:"5px"}}>
						Courier 
					</td>
					<td style={{fontSize:"10px",padding:"10px"}}>
					  {JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).Courier : "Yet to be assigned."}
					</td>
				</tr>

				<tr>
					<td style={{padding:"5px"}}>
						Amount 
					</td>
					<td style={{fontSize:"10px",padding:"10px"}}>
					  {JSON.parse(sessionStorage.getItem("remoteOrder")) ? JSON.parse(sessionStorage.getItem("remoteOrder")).amount : "Pending assessment."}
					</td>
				</tr>
				
			</table>
		  </div>
		  <div id="cen">
			Thank you for your patronage. Please contact us with any questions regarding the delivery
		  </div>
		  <div id="cen2">
			  <br/>
		 	  TRACKING #
			   <br/>
			   <img id="barcode"/>
             <br/>
		  </div>
		</Container>
  )
}



const Container = styled.div`
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400);

.main{
display: flex;
flex-direction: row;
justify-content: space-between;
height: 15vh;
width: 100%;
}

.second_main{
display: flex;
font-size:11px;
flex-direction: row;
justify-content: space-between;
height: 10vh;
width: 100%;
}

#text{
margin-top: 40px;
margin-left: 50px;
font-size:12px;
}

#imgs{
width: 150px;
height: 70px;
margin-right: 30px;
margin-top: 30px;
}

.third_main{
height: 10vh;
width: 97%;
margin:20px;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #ffffff;
}

.ft{
background-color:#057d98;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color:#ffffff;
width: 49.8%;
height: 100%;
}


table{
width: 95%;
margin: 0 auto;
font-family: "calibri";
}


td{
width: 50%;
padding: 10px;
border: 0.5px solid #c1c1c1
}

#cen{
width: 80%;
height: 80px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}

#cen2{
width: 80%;
height: 120px;
margin: 0 auto;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
text-align: center;
}



@media(max-width: 600px) {
.third_main{
height: 10vh;
width: 98%;
background:red;
margin-left:5px;
}

.ft{
justify-content: left;
padding-left: 5px;
align-items: left;
text-align: left;
width: 50%;
}


#text{
margin-top: 40px;
margin-left: 5px;
font-size:11px;
}

#imgs{
width: 150px;
height: 70px;
margin-right: 10px;
margin-top: 30px;
}

#barcode{
width:90%;
margin-left:20px;
}

#cen{
width:90%;
font-size:9px;
padding-left:0px;
}
#cen2{
width:90%;
margin-left:3px;
}
td{
padding: 0px;
}


table{
width: 100%;
margin: 0 auto;
}
}
`;

export default Receipt