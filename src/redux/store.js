import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux'
import { products } from './reducers/products'
import { session } from './reducers/session'

export const store = createStore(combineReducers({products1: products, session2: session}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())