import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Comp from './comp.jsx'
import Error404 from './Error404.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Comp />,
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
