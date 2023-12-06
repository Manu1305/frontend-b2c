import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/pages/Signup/Signup'
import Login from './components/pages/Login/Login'
import { BrowserRouter,Routes ,Router,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
          <>
          <BrowserRouter>
    <Routes>

      <Route path='/' element={ <Login />} />
        <Route path='/signup' element={<SignUp/>}/>
       

        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      
    </Routes>
          </BrowserRouter>
    </>
  );
}

export default App
