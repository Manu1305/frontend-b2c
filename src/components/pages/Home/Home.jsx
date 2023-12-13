import React, { useEffect } from 'react'
import { decodeToken, useJwt } from "react-jwt";
import {useNavigate} from 'react-router-dom'
// import { isTokenExpired } from 'react-jwt';
function Home() {
  const navigate =useNavigate()
  useEffect(()=>{
const token  =localStorage.getItem('token')
if(token){
  const myDecodedToken = decodeToken(token);
 console.log("myDecodedToken", myDecodedToken);
}
if(!token){
  localStorage.removeItem('token')
 navigate('/login')
}
  },[])



  return (
    <div>
      <h2>Hello world</h2>
    </div>
  )
}

export default Home
