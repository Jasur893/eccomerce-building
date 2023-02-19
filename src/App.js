import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import HeaderNav from './Components/HeaderNav'
import Footer from './Components/Footer'
import MainHeader from './Components/MainHeader'
import './App.css'
import CatalogContent from './Components/CatalogContent'
import CatalogItems from './Components/CatalogItems'

function App() {
  return (
    <div className=''>
      <Header />
      <div className='mt-11 lg:mt-14'></div>
      <HeaderNav/>
        <div className='main__section content'>
          <Routes>
            <Route exact path='/' element={<MainHeader />} />
            <Route path='catalog/*' element={<CatalogContent/>}/>
            <Route path='catalog/:catalog1/:catalog2/*' element={<CatalogItems/>} />
          </Routes>
        </div>
      <Footer />
    </div>
  )
}

export default App
