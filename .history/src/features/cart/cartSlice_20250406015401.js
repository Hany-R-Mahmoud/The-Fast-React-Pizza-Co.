import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducer: {
    addItem(state, action) {},
    deleteItem(state, action) {},    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  }
});

export {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart}= cartSlice.actions;
export default cartSlice.reducer