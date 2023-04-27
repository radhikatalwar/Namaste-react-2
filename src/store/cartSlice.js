import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item = action.payload;
    },
    clearCart: (state) => {
      state.item = [];
    },
  },
});

export const { clearCart, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer; // IT WILL CREATE ON REDUCE AND WILL EXPORT IT

// It is maintained something like this:

// CartSlice = {
//     actions :{
//         clearCart,
//         addItem,
//         removeItem
//     },
//     reducer:reducers
// }
