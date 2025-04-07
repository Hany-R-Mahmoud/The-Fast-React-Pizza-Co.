import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducer: {
    
  }
});

export cartSlice.actions;
export default cartSlice.reducer