const initialState = {
  productsAll: [],
  cart: [],
  total: 0,
  comparision: [],
}

export function products(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_TO_CART': {
      const newItem = { ...payload.prodItem, amount: 1, isAdded: true }
      const cartItem = state.cart.find((item) => item.id === payload.id)
      let newCart = null
      if (cartItem) {
        newCart = [...state.cart].map((item) => {
          if (item.id === payload.id) {
            return { ...item, isAdded: true }
          } else {
            return item
          }
        })
      } else {
        newCart = [...state.cart, newItem]
      }
      return {
        ...state,
        cart: newCart,
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      }

    case 'INCREMENT_AMOUNT': {
      const newItem = { ...payload.prodItem, amount: 1 }
      const cartItem = state.cart.find((item) => item.id === payload.id)
      let newCart = null
      if (cartItem) {
        newCart = [...state.cart].map((item) => {
          if (item.id === payload.id) {
            return { ...item, amount: cartItem.amount + 1 }
          } else {
            return item
          }
        })
      } else {
        newCart = [...state.cart, newItem]
      }
      return {
        ...state,
        cart: newCart,
      }
    }

    case 'DECREMENT_AMOUNT': {
      const cartItem = state.cart.find((item) => item.id === payload.id)
      let newCart = null
      if (cartItem) {
        newCart = state.cart.map((item) => {
          if (item.id === payload.id) {
            return { ...item, amount: cartItem.amount - 1 }
          } else {
            return item
          }
        })
      }
      if (cartItem.amount < 2) {
        newCart = state.cart.filter((item) => item.id !== payload.id)
      }
      return {
        ...state,
        cart: newCart,
      }
    }

    case 'SHOW_FAVORITE': {
      const cartItemLike = state.productsAll.find(
        (item) => item.id === payload.id
      )
      let newItemlike = null
      if (cartItemLike) {
        newItemlike = [...state.productsAll].map((item) => {
          if (item.id === payload.id) {
            return { ...item, isLiked: true }
          } else {
            return item
          }
        })
      }
      return {
        ...state,
        productsAll: newItemlike,
      }
    }

    case 'HIDE_FAVORITE': {
      const cartItemLike = state.productsAll.find(
        (item) => item.id === payload.id
      )
      let newItemlike = null
      if (cartItemLike) {
        newItemlike = [...state.productsAll].map((item) => {
          if (item.id === payload.id) {
            return { ...item, isLiked: false }
          } else {
            return item
          }
        })
      }
      return {
        ...state,
        productsAll: newItemlike,
      }
    }

    case 'SET_PRODUCTS_ALL':
      return {
        ...state,
        productsAll: payload || [],
      }

    case 'SET_TOTAL':
      let total = state.cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount
      }, 0)
      return {
        ...state,
        total: total,
      }

    case 'ADD_COMPARISION': {
      const newItem = { ...payload.prodItem, amount: 1, isAdded: true }
      const cartItem = state.comparision.find((item) => item.id === payload.id)
      let newCart = null
      if (cartItem) {
        newCart = [...state.comparision].map((item) => {
          if (item.id === payload.id) {
            return { ...item, isAdded: true }
          } else {
            return item
          }
        })
      } else {
        newCart = [...state.comparision, newItem]
      }
      return {
        ...state,
        comparision: newCart,
      }
    }

    default:
      return state
  }
}
