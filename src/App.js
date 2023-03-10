import { Routes, Route } from 'react-router-dom'
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
import { createContext, useEffect, useMemo, useState } from 'react'
import { query, where, getDocs, collection } from "firebase/firestore"; 
import { auth, db } from './FirebaseConfigs/firebaseConfig'; 
import Login from './Components/auth/Login'
import SignUp from './Components/auth/SignUp'

const UserContext = createContext()

const  App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getFilter = async() => {
      const productsArray = []
      await getDocs(collection(db, 'products-ГРУНТОВКА')).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            productsArray.push({...doc.data(), id: doc.id})
          })
        }).catch((error)=> {
          console.log(error.message);
        })
      await getDocs(collection(db, 'products-ДРЕЛИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-КРАСТЕЛИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-МОНТАЖНЫЙ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-НАСОСЫ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-ПЕРФОРАТОРЫ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-ПЕРЧАТКИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-ПОЛИВОЧНЫЙ ИНВЕНТАРЬ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-СЛЕСАРНЫЙ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-СПЕЦ ОДЕЖДА')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-СУХИЕ СМЕСИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-ШЛИФОВАЛЬНЫЕ МАШИНКИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      setProducts(productsArray)
    }
    getFilter()
  },[])

  function GetCurrentUser() {
    
    const [user, setUser] = useState('')
    const userCollectionRef = collection(db, 'users')

    useMemo(() => {
      console.log('render')
      auth.onAuthStateChanged(userlogged => {
        ;
        if(userlogged){
          const getUsers = async() => {
            const q = query(collection(db, "users"),where("uid", "==", userlogged.uid))
            const data = await getDocs(q)
            // console.log(data);
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
  const loggeduser =  GetCurrentUser()
  if(loggeduser){console.log(loggeduser[0].email)}
 

  return (
    <UserContext.Provider value={products}>
      <Header userdata={loggeduser}/>
      <div className='realtive mt-11 lg:mt-14'></div>
      <HeaderNav/>
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
              <Route path='/lichniy-kabinet/*' element={<PersonalArea/>}/>
            ) : (
              <>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
              </>
            )}
          </Routes>
        </div>
      <Footer />
    </UserContext.Provider>
  )
}

export {App, UserContext}



            