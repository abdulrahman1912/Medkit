import { useState } from 'react'
import {Login,ForgotPassword,OtpVerify} from './pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <OtpVerify/>
    </div>
  )
}

export default App
