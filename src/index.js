import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './context/ProductContext'
import AuthProvider from './context/AuthContext'
import './FirebaseConfigs/firebaseConfig'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <BrowserRouter>
    <AuthProvider>
    <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
  </AuthProvider>
  </BrowserRouter>

  
)
