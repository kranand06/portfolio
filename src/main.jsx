import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Comp from './Components/comp.jsx'
import Error404 from './Components/Error404.jsx'
import Page from './Components/Page.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element:<Page />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={route} />
  // </StrictMode>,
)
