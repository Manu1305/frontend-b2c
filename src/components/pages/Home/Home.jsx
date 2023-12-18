import React, { useEffect } from 'react'
import { decodeToken, useJwt } from "react-jwt";
import {useNavigate} from 'react-router-dom'
// import { isTokenExpired } from 'react-jwt';
import LogoSlider from './logoSlider/LogoSlider'
import Products from '../../custom-components/Products/Products'
import Hero from './HeroSection/Hero'
import Banner from '../../custom-components/Banner/Banner';
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
      <Banner />
      <LogoSlider />
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
  );
}

export default Home
