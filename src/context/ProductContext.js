import {createContext, useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../FirebaseConfigs/firebaseConfig'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  // console.log(products);


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

  const addToCart = (productItem, id) => {
    const newItem = {...productItem, amount: 1}
    const cartItem = cart.find((item) => item.id === id)
    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item
        }
      });
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item)=> item.id !== id)
    setCart(newCart)
  }

  const incrementAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    addToCart(cartItem, id)
  }

  const decrementAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)
    if(cartItem){
      const newCart = cart.map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount -1}
        }else {
          return item;
        }
      });
      setCart(newCart);
    }
    if(cartItem.amount < 2){
      removeFromCart(id)
    }
  }

  return <ProductContext.Provider value={{
      value1:products,
      value2: addToCart,
      value3: cart,
      value4: removeFromCart,
      value5: incrementAmount,
      value6: decrementAmount,
      }}
    >
      {children}
  </ProductContext.Provider>
}

export default ProductProvider