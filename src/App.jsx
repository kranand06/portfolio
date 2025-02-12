import { Outlet } from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
