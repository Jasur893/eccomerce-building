import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import FilterNew from './FilterNew'
import FilterStock from './FilterStock'
import FilterHitSale from './FilterHitSale'
import { collectionGroup, query, where, getDocs, collection } from "firebase/firestore"; 
import { db } from '../FirebaseConfigs/firebaseConfig'; 
import { useEffect, useState } from 'react'
 
export default function FilterSlider() {
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



  return (
      <div className='bg-black'>
        <Tabs
          variant='pills'
          defaultActiveKey='home'
          id='uncontrolled-tab-example'
          className='borderTab container_content py-1 gap-x-1 md:gap-x-10'
        >
          <Tab
            className='borderTab bg-dark border-t-0'
            eventKey='home'
            title='Новинки'
          >
            <div className='container_content'>
              <FilterNew data={products} />
            </div>
          </Tab>
          <Tab className='borderTab bg-dark' eventKey='profile' title='Акции'>
            <div className='container_content'>
              <FilterStock data={products} />
            </div>
          </Tab>
          <Tab
            className='borderTab bg-dark'
            eventKey='contact'
            title='Хиты продаж'
          >
            <div className='container_content'>
              <FilterHitSale data={products} />
            </div>
          </Tab>
        </Tabs>
      </div>
    )
}


