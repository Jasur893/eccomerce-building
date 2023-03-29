import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../FirebaseConfigs/firebaseConfig'
import { setProductsALL, setTotal } from '../redux/actions'
import { getProducts } from '../productApi'

export const ProductContext = React.createContext()

const ProductProvider = ({children}) => {
  const cart = useSelector((state) => state.cart)
  const total = useSelector((state) => state.total)
  const productAll = getProducts()
  const dispatch = useDispatch()

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