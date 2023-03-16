import {createContext, useCallback, useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../FirebaseConfigs/firebaseConfig'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [productsAll, setProductsALL] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // console.log(cart);
  // console.log(productsAll);

  useEffect(() => {
    const getFilter = async() => {
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
    getFilter()
  },[])

  useEffect(()=> {
    const total = cart.reduce((accumulator, currentItem)=> {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  },[cart]) 

  const addToCart = useCallback((productItem, id) => {
    const newItem = {...productItem, amount: 1, isAdded: true}
    const cartItem = cart.find((item) => item.id === id)
    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, isAdded: true}
        } else {
          return item
        }
      });
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
    // console.log('render addtocart');
  },[cart])

  // const addToCartReverse = (productItem, id) => {
  //   const newItem = {...productItem, isAdded: false}
  //   const cartItem = cart.find((item) => item.id === id)
  //   if(cartItem) {
  //     const newCart = [...cart].map((item) => {
  //       if(item.id === id) {
  //         return {...item, isAdded: false}
  //       } else {
  //         return item
  //       }
  //     });
  //     setCart(newCart)
  //   } else {
  //     setCart([...cart, newItem])
  //   }
  // }

  const showFavorite = useCallback((idItem) => {
    // const newItemlike = {...prodItem, isLiked: true}
    const cartItemLike = productsAll.find((item) => item.id === idItem)
    if(cartItemLike){
      const newItemlike = [...productsAll].map((item) => {
        if(item.id === idItem){
          return {...item,  isLiked: true}
        } else {
          return item
        }
      });
      setProductsALL(newItemlike)
    }
    // console.log('render showFavorite');
  },[productsAll])

  const hideFavorite = (idItem) => {
    // const newItemlike = {...prodItem, isLiked: false}
    const cartItemLike = productsAll.find((item) => item.id === idItem)
    if(cartItemLike){
      const newItemlike = [...productsAll].map((item) => {
        if(item.id === idItem){
          return {...item,  isLiked: false}
        } else {
          return item
        }
      });
      setProductsALL(newItemlike)
      // console.log('render hideFavorite');
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item)=> item.id !== id)

    setCart(newCart)
    // console.log('render removeFromCart');
  }

  const incrementAmount = (productItem, id) => {
    const newItem = {...productItem, amount: 1}
    const cartItem = cart.find(item => item.id === id);
    // addToIncrement(cartItem, id)
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
    // console.log('render incrementAmount');
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
    // console.log('render decrementAmount');
  }

  

  return <ProductContext.Provider value={{
      value1: productsAll,
      value2: addToCart,
      value3: cart,
      value4: removeFromCart,
      value5: incrementAmount,
      value6: decrementAmount,
      value7: total,
      value8: showFavorite,
      value9: hideFavorite,
      }}
    >
      {children}
  </ProductContext.Provider>
}

export default ProductProvider