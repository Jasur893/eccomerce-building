import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import HeaderNav from './Components/HeaderNav'
import Footer from './Components/Footer'
import MainHeader from './Components/MainHeader'
import './App.css'


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='mt-11 lg:mt-14'>
        <HeaderNav />
        <div className='main__section'>
          <Routes>
            <Route exact path='/' element={<MainHeader />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
