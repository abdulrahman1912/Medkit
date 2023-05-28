import { useState } from 'react'
import {Login,ForgotPassword} from './pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ForgotPassword/>
    </div>
  )
}

export default App
