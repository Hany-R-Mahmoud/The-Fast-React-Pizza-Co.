import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducer: {
    addItem(state, action) {}
    addItem(state, action) {}
    addItem(state, action) {}
    addItem(state, action) {}
  }
});

export cartSlice.actions;
export default cartSlice.reducer