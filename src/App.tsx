
import {SignUp,Login,Home,ViewProduct,Forgotpassword} from './components'
import { BrowserRouter,Routes ,Router,Route } from 'react-router-dom'
import Navbar from './components/custom-components/NavigationBar/Navbar'
import Footer from './components/custom-components/Footer/Footer';
import { useEffect, useState } from 'react';
import ShoppingMain from './components/pages/Shopping/Shoppingmain/ShoppingMain';
import { motion, useScroll } from "framer-motion";
import Cart from './components/pages/cart/Cart';
import ForgotPassword from './components/pages/Forgotpassword/Forgotpassword';


function App() {
const [status,setStatus]=useState<boolean>()
useEffect(() => {
  let token = localStorage.getItem("token");
  if (token) {
    setStatus(true);
  } else {
    setStatus(false);
  }
}, [Route]);
  return (
    <>
      <BrowserRouter>
        {status ? <Navbar /> : null}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<ShoppingMain />} />
          <Route path="/viewproduct" element={<ViewProduct/>}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {status ? <Footer /> : null}
      </BrowserRouter>
    </>
  );
}
export default App