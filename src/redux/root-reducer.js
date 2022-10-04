import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoriesReducer from './categories/categories-reducer';
import recommendedReducer from './recommended/recommended-reducer';
import productsReducer from './products/products-reducer';
import cartReducer from './cart/cart-reducer';
import userReducer from './user/user-reducer';


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart','user'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  recommended: recommendedReducer,
  cart: cartReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
