import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import "./layout.scss"

import './App.css'
import HomePage from './routes/homePage/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="content">
      <HomePage/>
    </div>
  </div>
  )
}

export default App
