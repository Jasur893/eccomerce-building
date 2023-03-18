import { Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import HeaderNav from './Components/HeaderNav'
import Footer from './Components/Footer'
import MainHeader from './Components/MainHeader'
import CatalogContent from './Components/CatalogContent'
import CatalogItems from './Components/CatalogItems'
import Favorites from './Components/Favorites'
import AboutCardItem from './Components/AboutCardItem'
import ComparisonProduct from './Components/ComparisonProduct'
import News from './Components/News'
import PersonalArea from './Components/PersonalArea'
import Basket from './Components/Basket'
import Ordering from './Components/Ordering'
import NotFound from './Components/NotFound'
import './App.css'
import Login from './Components/auth/Login'
import SignUp from './Components/auth/SignUp'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'


const  App = () => {
  const {userValue4} = useContext(AuthContext)
  const userSession = userValue4

  return (
    <>
      <Header/>
      <div className='mt-14'></div>
      <HeaderNav  />
        <div className='main__section content'>
          <Routes>
            <Route exact path='/' element={<MainHeader />} />
            <Route path='catalog/*' element={<CatalogContent/>}/>
            <Route path='catalog/:catalog1/:catalogId/:catlogName' element={<CatalogItems/>} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='/about-card/:nameId/:typeId/*' element={<AboutCardItem />} />
            <Route path='/comparison/*' element={<ComparisonProduct/>} />
            <Route path='/news' element={<News />} />
            <Route path='/basket' element={<Basket/>} />
            <Route path='/ordering/*' element={<Ordering />} />
            {userSession ? (
              <Route path='/lichniy-kabinet/*' element={<PersonalArea/>}/>
            ): (
              <>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
              </>
            )}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
