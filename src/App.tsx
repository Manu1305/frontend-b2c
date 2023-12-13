
import {SignUp,Login,Home} from './components'
import { BrowserRouter,Routes ,Router,Route } from 'react-router-dom'
import Navbar from './components/custom-components/NavigationBar/Navbar'
function App() {

  return (
    
    <>
      <BrowserRouter>
   
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App