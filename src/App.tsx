
import {SignUp,Login,Home} from './components'
import { BrowserRouter,Routes ,Router,Route } from 'react-router-dom'
import Navbar from './components/custom-components/NavigationBar/Navbar'
import Footer from './components/custom-components/Footer/Footer';
import { useEffect, useState } from 'react';
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
          <Route path="/" element={<Home />} />
        </Routes>
        {status ? <Footer /> : null}
      </BrowserRouter>
    </>
  );
}
export default App