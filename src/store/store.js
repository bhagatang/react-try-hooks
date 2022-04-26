import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartReducer';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});