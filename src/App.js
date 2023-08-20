import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import LoginScreen from './Screen/LoginScreen';
import Home from './Screen/Home';
import RegisterScreen from './Screen/RegisterScreen';
import {  useState } from 'react';

function App() {
  const [Verify, setVerify] = useState(localStorage.getItem("user") ? true : false)
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home Verify={Verify} setVerify={setVerify}/>} />
          <Route path='/login' element={<LoginScreen  setVerify={setVerify}/>} />
          <Route path='/register' element={<RegisterScreen setVerify={setVerify}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
