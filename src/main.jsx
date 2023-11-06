import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import routes from './routes/index.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider><RouterProvider router={routes}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
