import { useState } from 'react'
import { Login, ForgotPassword, OtpVerify, Register, Dashboard, Main, Customer, Product, Transaction,Prescription } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="otp" element={<OtpVerify />} />
      <Route path='register' element={<Register />} />
      <Route path='dashboard' element={<Dashboard />}>
        <Route path='main' element={<Main />} />
        <Route path='customer' element={<Customer />} />
        <Route path='product' element={<Product />} />
        <Route path='transaction' element={<Transaction/>} />
        <Route path='prescribtion' element={<Prescription/>} />
      </Route>

    </Routes>


  )
}

export default App
