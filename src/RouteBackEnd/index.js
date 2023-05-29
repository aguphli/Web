import axios from "axios"
import Swal from "sweetalert2";





export const SendOut = async (fullname,password,email,address,phoneNumber,city,state) => {
    try{
        let elog = {fullname:fullname,email:email,password:password,address:address,phoneNumber:phoneNumber,city:city,state:state,isDisabled:false};
         let res = await axios.post(process.env.REACT_APP_REGSITER,elog);
          return res.data;
      }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
     }
}






export const SendOutLogin = async (email,pass) => {
    try{
        let elog = {email:email,password:pass};
         let res = await axios.post(process.env.REACT_APP_LOGIN,elog);
          return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}





export const PlaceOrders = async (pick,drop,senderName,senderAddress,recieversName,recieversAddress) => {
    try{
        let node = JSON.parse(localStorage.getItem("User"));
         if(node){
          let elog = {pickUp:pick,desitation:drop,email:node.User.email,name:node.User.fullname,senderName:senderName,senderAddress:senderAddress,recieversName:recieversName,recieversAddress:recieversAddress};
            let res = await axios.post(process.env.REACT_APP_PLACE_ORDER,elog);
            sessionStorage.setItem("order",JSON.stringify([pick,drop,senderName,senderAddress,recieversName,recieversAddress]));
              return res.data;
         }else
            Swal.fire({icon:"info",title:"Info",text:"PLs Login to Place Order"})
         
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}








export const ListOrders = async () => {
    try{
        let res = await axios.post(process.env.REACT_APP_LIST_ORDER,null);
          return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}






export const ListUserOrders = async (use) => {
    try{
           let user = {email:use.User.email}  
            let res = await axios.post(process.env.REACT_APP_LIST_USER_ORDERS,user);
              return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}










export const UpdateOrder = async (lat,log,status,mode,amount,weight,courier,parcel_id,address,track) => {
    try{
        let pay = {track_id:track,lat:lat,log:log,mode:mode,status:status,weight:weight,amount:amount,courier:courier,parcel_id:parcel_id,currentLocation:address};
          //console.log(pay);
          let res = await axios.post(process.env.REACT_APP_EDIT_ORDERS,pay);
            return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}







export const DeleteOrder = async (track) => {
    try{
        let pay = {track_id:track};
        let res = await axios.post(process.env.REACT_APP_DELETE_ORDER,pay);
        return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}






export const LoadGeoPoints = async (track,email) => {
    try{
        let pay =  email !== null ? {track_id:track,email:email.User.email} : {track_id:track,email:null};
        let res = await axios.post(process.env.REACT_APP_GET_LOCATION,pay);
        return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}






export const EditUser = async (email,n) => {
    try{
        let pay = {email:email,n:n};
        let res = await axios.post(process.env.REACT_APP_EDIT_USER,pay);
        return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}






export const ListUser = async (pick,drop) => {
    try{
        let res = await axios.post(process.env.REACT_APP_LIST_ACCOUNT ,null);
        return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}


export const  CheckResponse = (res) => {
    if(JSON.stringify(res.message) !== null && JSON.stringify(res.message) !== undefined && !JSON.stringify(res.message).includes("{}"))
         if(res.message.length <= 0)
            MessagePop("No data Yet","List is Empty","info") 
        else
           if(res.message.includes("disabled"))
                MessagePop("Autenticat issues.",res.message,"error");
           else
              return true;
    else
      return false;
}


function MessagePop(info,text,icon){
    Swal.fire({title:info,text:text,icon:icon})
}