import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate} from 'react-router-dom'
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
import New from './Components/New'
import Stock from './Components/Stock'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './FirebaseConfigs/firebaseConfig'
import { setProductsALL, setUserSession } from './redux/actions'
import { getProducts } from './productApi'
import { getSession } from './session'

const  App = () => {
  const userSession = useSelector((state) => state.session2.userSession)
  const productAll = getProducts()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    let session = getSession();
    dispatch(setUserSession(session))
    //eslint-disable-next-line
  },[navigate])

  useEffect(() => {
    const getAllProduct = async() => {
      const productsArray = []
      for (let index = 0; index < productAll.length; index++) {
        await getDocs(collection(db, `${productAll[index]}`)).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
          })
        }).catch((error)=> {
          console.log(error.message);
        })
      }
      dispatch(setProductsALL(productsArray))
    }
    getAllProduct()
  },[dispatch, productAll])

  return (
    <>
      <Header className='min-h-[56px]'/>
      {/* <div className='h-[56px]'></div> */}
      <HeaderNav  />
        <div className='main__section content'>
          <Routes>
            <Route exact path='/' element={<MainHeader />} />
            <Route path='catalog/*' element={<CatalogContent/>}/>
            <Route path='catalog/:catalog1/:catalogId/:catlogName' element={<CatalogItems/>} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='/about-card/:nameId' element={<AboutCardItem />} />
            <Route path='/comparison/*' element={<ComparisonProduct/>} />
            <Route path='/news' element={<News />} />
            <Route path='/basket' element={<Basket/>} />
            <Route path='/ordering/*' element={<Ordering />} />
            <Route path='/new' element={<New />} />
            <Route path='/stock' element={<Stock />} />
            {userSession?.uid !== null ? (
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
