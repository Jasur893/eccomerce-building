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
import { useMemo, useState } from 'react'
import { query, where, getDocs, collection } from "firebase/firestore"; 
import { auth, db } from './FirebaseConfigs/firebaseConfig'; 
import Login from './Components/auth/Login'
import SignUp from './Components/auth/SignUp'

const  App = () => {
  const navigate = useNavigate()
  const [errosMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  // const [cartData, setCartData] = useState([])
 

  function GetCurrentUser() {
    
    const [user, setUser] = useState('')
    const userCollectionRef = collection(db, 'users')

    useMemo(() => {
      auth.onAuthStateChanged(userlogged => {
        if(userlogged){
          const getUsers = async() => {
            const q = query(collection(db, "users"),where("uid", "==", userlogged.uid))
            const data = await getDocs(q)
            setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
          }
          getUsers()
        } else {
          setUser(null)
        }
      })
    },[])
    return user
  }

  const handleLogOut = () => {
    auth.signOut()
      .then(() => {
        navigate("/")
      })
  }

  const loggeduser =  GetCurrentUser()
  
  
  //  if(loggeduser) {
  //   const  getCardData = () => {
  //     const cartArray = []
  //     const path = `cart-${loggeduser[0].uid}`

  //   getDocs(collection(db, path)).then((querySnapshot) => {
  //       console.log(querySnapshot);
  //       querySnapshot.forEach((doc) => {
  //         cartArray.push({...doc.data(), id: doc.id})
  //         console.log(doc.id);
  //       })
  //       setCartData(cartArray)
  //   })
  //   .catch('Error error, error')
    
  //    }
  //  }


  return (
    <>
      <Header userdata={loggeduser}/>
      <HeaderNav  />
        <div className='main__section content'>
          <div>
            <p>{loggeduser ? loggeduser[0].email : 'No data'} </p>
          </div>
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
            <Route path='*' element={<NotFound />} />

            {loggeduser ? (
              <Route path='/lichniy-kabinet/*' element={<PersonalArea handleLogOut={handleLogOut} userId={loggeduser}/>}/>
            ) : (
              <>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
              </>
            )}
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App



            