export const  setProductsALL = (data) => {
  return {
    type: 'SET_PRODUCTS_ALL',
    payload: data
  }
}

export const setTotal = (sum) => {
  return {
    type: 'SET_TOTAL',
    payload: sum
  }
}

export const addToCart = (productItem, itemId) => {
  return {
    type: 'ADD_TO_CART',
    payload: {prodItem: productItem, id: itemId}
  }
}

export const removeFromCart = (itemId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {id: itemId}
  }
}

export const incrementAmount = (productItem, itemId) => {
  return {
    type: 'INCREMENT_AMOUNT',
    payload: {prodItem: productItem, id: itemId}
  }
}

export const decrementAmount = (itemId) => {
  return {
    type: 'DECREMENT_AMOUNT', 
    payload: {id: itemId}
  }
}

export const showFavorite = (idItem) => {
  return {
    type: 'SHOW_FAVORITE', 
    payload: {id: idItem}
  }
}

export const hideFavorite = (idItem) => {
  return {
    type: 'HIDE_FAVORITE', 
    payload: {id: idItem}
  }
}