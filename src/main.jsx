import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './components/shop/shop.jsx'
import Home from './components/home/home.jsx'
const router = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children: [
    {
      path: "shop",
      element: <Shop/>
    },
    {path: "home",
      element: <Home/>
    }
  ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
