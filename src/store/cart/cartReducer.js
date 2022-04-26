import { createSlice } from '@reduxjs/toolkit';

export const cartReducer = createSlice({
  name: 'counter',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart =  state.cart.filter(item => item != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartReducer.actions;

export default cartReducer.reducer;