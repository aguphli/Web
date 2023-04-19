import axios from "axios"
import Swal from "sweetalert2";



export const SendOut = async (fullname,password,email,address,phoneNumber,city,state) => {
    try{
        let elog = {fullname:fullname,email:email,password:password,address:address,phoneNumber:phoneNumber,city:city,state:state};
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



export const PlaceOrders = async (pick,drop) => {
    try{
        let node = JSON.parse(localStorage.getItem("User"));
         if(node){
          let elog = {pickUp:pick,desitation:drop,email:node.User.email,name:node.User.fullname};
            let res = await axios.post(process.env.REACT_APP_PLACE_ORDER,elog);
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




export const ListUsers = async (pick,drop) => {
    try{
        let res = await axios.post(process.env.REACT_APP_LIST_ACCOUNT,null);
        return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}



export const UpdateOrder = async (lat,log,track) => {
    try{
        let pay = {track_id:track,lat:lat,log:log};
        console.log(pay);
        let res = await axios.post(process.env.REACT_APP_EDIT_ORDERS,pay);
        return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}


export const LoadGeoPoints = async (track) => {
    try{
        let pay = {track_id:track};
        console.log(pay);
        let res = await axios.post(process.env.REACT_APP_GET_LOCATION,pay);
        return res.data;
    }catch(err){
        Swal.fire({title:"Error",text:err,icon:"error"})
    }
}


