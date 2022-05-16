import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

// Reducers
import { authReducer } from './reducers/AuthReducers'
import { cartReducer } from "./reducers/CartReducers"
import { getProductsReducer, getProductDetailsReducer } from "./reducers/ProductReducers"

const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
})

const middleware = [thunk]

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : []

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
