export const setProductsALL = (data) => {
  return {
    type: 'SET_PRODUCTS_ALL',
    payload: data,
  }
}

export const setTotal = () => {
  return {
    type: 'SET_TOTAL',
  }
}

export const addToCart = (productItem, itemId) => {
  return {
    type: 'ADD_TO_CART',
    payload: { prodItem: productItem, id: itemId },
  }
}

export const removeFromCart = (itemId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: { id: itemId },
  }
}

export const incrementAmount = (productItem, itemId) => {
  return {
    type: 'INCREMENT_AMOUNT',
    payload: { prodItem: productItem, id: itemId },
  }
}

export const decrementAmount = (itemId) => {
  return {
    type: 'DECREMENT_AMOUNT',
    payload: { id: itemId },
  }
}

export const showFavorite = (idItem) => {
  return {
    type: 'SHOW_FAVORITE',
    payload: { id: idItem },
  }
}

export const hideFavorite = (idItem) => {
  return {
    type: 'HIDE_FAVORITE',
    payload: { id: idItem },
  }
}

export const setUserSession = (user) => {
  return {
    type: 'SET_USER_SESSION',
    payload: { currentUser: user },
  }
}

export const addComparision = (productItem, itemId) => {
  return {
    type: 'ADD_COMPARISION',
    payload: { prodItem: productItem, id: itemId },
  }
}

export const removeComparision = (itemId) => {
  return {
    type: 'REMOVE_COMPARISION',
    payload: { id: itemId },
  }
}
