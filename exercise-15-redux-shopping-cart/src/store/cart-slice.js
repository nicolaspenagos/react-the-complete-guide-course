import { createSlice } from "@reduxjs/toolkit";

const initialCart = { cartItems: [], toggleCart: false, changed:false };

const increment = (existingItem) => {
  existingItem.quantity++;
  existingItem.total = existingItem.quantity * existingItem.price;
};

const decrement = (existingItem) => {
  existingItem.quantity--;
  existingItem.total = existingItem.quantity * existingItem.price;
};

const findItemByTitle = (items, title) => {
  return items.find((item) => item.title === title);
};



const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = findItemByTitle(state.cartItems, newItem.title);

      if (existingItem) increment(existingItem);
      else state.cartItems.push({ ...newItem, total: newItem.price });
      state.changed=true;
    },
    incrementItem(state, action) {
      const itemTitle = action.payload.title;
      increment(findItemByTitle(state.cartItems, itemTitle));
      state.changed=true;
    },
    decrementItem(state, action) {
      const existingItemindex = state.cartItems.findIndex(
        (item) => item.title ===action.payload.title
      );
      const existingItem = state.cartItems[existingItemindex];
      if (existingItem.quantity > 1) decrement(existingItem);
      else state.cartItems.splice(existingItemindex, 1);
      state.changed=true;
    },
    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    },
    replaceCart(state, action){
      state.cartItems = action.payload;
    }
  },
});



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
