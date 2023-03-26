import React, {useEffect, useReducer} from 'react'
import { reducer } from '../redux/reducer'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../FirebaseConfigs/firebaseConfig'

export const ProductContext = React.createContext()

const initialState = {
  productsAll: [],
  cart: [],
  total: 0
}

const ProductProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getAllProduct = async() => {
      const productsArray = []
      await getDocs(collection(db, 'products-ГРУНТОВКА')).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
          })
        }).catch((error)=> {
          console.log(error.message);
        })
      await getDocs(collection(db, 'products-ДРЕЛИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-КРАСТЕЛИ')).then((querySnapshot, ) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-МОНТАЖНЫЙ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-НАСОСЫ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-ПЕРФОРАТОРЫ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-ПЕРЧАТКИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-ПОЛИВОЧНЫЙ ИНВЕНТАРЬ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-СЛЕСАРНЫЙ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-СПЕЦ ОДЕЖДА')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-СУХИЕ СМЕСИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      await getDocs(collection(db, 'products-ШЛИФОВАЛЬНЫЕ МАШИНКИ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      })
      await getDocs(collection(db, 'products-ОБУВЬ')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      })
      .catch((error)=> {
        console.log(error.message);
      })
      setProductsALL(productsArray)
    }
    getAllProduct()
  },[])

  useEffect(()=> {
    const total = value.cart.reduce((accumulator, currentItem)=> {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  },[value.cart])

  function setProductsALL(data) {
    dispatch({type: 'SET_PRODUCTS_ALL', payload: data})
  }

  function setTotal(sum) {
    dispatch({type: 'SET_TOTAL', payload: sum})
  }
  
  const addToCart = (productItem, itemId) => {
    dispatch({type: 'ADD_TO_CART', payload: {prodItem: productItem, id: itemId}})
  }

  const removeFromCart = (itemId) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemId}})
  }

  const incrementAmount = (productItem, itemId) => {
    dispatch({type: 'INCREMENT_AMOUNT', payload: {prodItem: productItem, id: itemId}})
  }

  const decrementAmount = (itemId) => {
    dispatch({type: 'DECREMENT_AMOUNT', payload: {id: itemId}})
  }

  const showFavorite = (idItem) => {
    dispatch({type: 'SHOW_FAVORITE', payload: {id: idItem}})
  }

  const hideFavorite = (idItem) => {
    dispatch({type: 'HIDE_FAVORITE', payload: {id: idItem}})
  }

  //buyProducts
  const handleBuyProducts = (delivery, deliveryMoney) => {
    const newCartPayment = []
    const totalPrice = value.total + delivery ? delivery : 0
    const deliverService = deliveryMoney
    const elemArr = [...value.cart]
    if(value.cart) {
      // eslint-disable-next-line
      elemArr.map(item => {
        const newItemObj = {
          img: item.productImage,
          title: item.productTittle,
          price: item.price,
          amount: item.amount,
          sum: +item.price * item.amount,
        }
        newCartPayment.push(newItemObj)
      })
    }else {
      return value.cart
    }
    return {newCartPayment, totalPrice, deliverService}
  }

  return <ProductContext.Provider value={{
      value1: value.productsAll,
      value2: addToCart,
      value3: value.cart,
      value4: removeFromCart,
      value5: incrementAmount,
      value6: decrementAmount,
      value7: value.total,
      value8: showFavorite,
      value9: hideFavorite,
      value10: handleBuyProducts
      }}
    >
      {children}
  </ProductContext.Provider>
}

export default ProductProvider