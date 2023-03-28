import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../FirebaseConfigs/firebaseConfig'
import { setProductsALL, setTotal } from '../redux/actions'

export const ProductContext = React.createContext()

const ProductProvider = ({children}) => {
  // const [value, dispatch] = useReducer(reducer, initialState)
  const cart = useSelector((state) => state.cart)
  const total = useSelector((state) => state.total)

  const dispatch = useDispatch()

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
      dispatch(setProductsALL(productsArray))
    }
    getAllProduct()
  },[dispatch])

  useEffect(()=> {
    const total = cart.reduce((accumulator, currentItem)=> {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    dispatch(setTotal(total))
  },[cart, dispatch])

  //buyProducts
  const handleBuyProducts = (delivery, deliveryMoney) => {
    const newCartPayment = []
    const totalPrice = total + delivery ? delivery : 0
    const deliverService = deliveryMoney
    const elemArr = [...cart]
    if(cart) {
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
      return cart
    }
    return {newCartPayment, totalPrice, deliverService}
  }

  return <ProductContext.Provider value={{
      value1: handleBuyProducts
    }}
  >
    {children}
  </ProductContext.Provider>
}

export default ProductProvider