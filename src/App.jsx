import { Outlet } from 'react-router-dom'
import './index.css'
import Comp from './comp'
import Navbar from './Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
