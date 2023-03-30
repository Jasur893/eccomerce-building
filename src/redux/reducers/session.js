const initialState = {
  userSession: null
}

export function session(state = initialState, {type, payload}){
  switch(type) {
    case 'SET_USER_SESSION':
      return {
        ...state,
        userSession: payload.currentUser
      }
    default:
      return state
  }
}