import { useState } from 'react'
import { Login, ForgotPassword, OtpVerify, Register } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="otp" element={<OtpVerify />} />
      <Route path='register' element={<Register/>}/>

    </Routes>


  )
}

export default App
