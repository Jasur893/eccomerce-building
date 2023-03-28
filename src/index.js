import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './context/ProductContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AuthProvider from './context/AuthContext'
import './FirebaseConfigs/firebaseConfig'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <AuthProvider>
        <Provider store={store}>
          <ProductProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
        </ProductProvider>
        </Provider>
    </AuthProvider>
  </BrowserRouter>
)
