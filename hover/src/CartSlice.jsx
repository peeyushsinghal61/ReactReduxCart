import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemToadd = action.payload.title;
      let flag = true;
      state.cartitems.map((item) => {
        if (item.title === itemToadd) {
          item.quantity += 1;
          flag = false;
        }
      });
      if (flag) {
        state.cartitems = [...state.cartitems, action.payload];
      }
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      const items = state.cartitems.filter(
        (item) => item.title !== action.payload
      );
      state.cartitems = items;
    },
    increaseItemQuantity: (state, action) => {
      const itemToadd = action.payload;
      state.cartitems.map((item) => {
        if (item.title === itemToadd) {
          item.quantity += 1;
        }
      });
    },
    decreaseItemQuantity: (state, action) => {
      const itemToRemove = action.payload;
      state.cartitems.map((item) => {
        if (item.title === itemToRemove && item.quantity > 1) {
          item.quantity -= 1;
        } else if (item.title === itemToRemove && item.quantity <= 1) {
          console.log(itemToRemove);
          item = null;
        }
      });
      state.cartitems.filter(
        (item) => !(item.title === itemToRemove && item.quantity === 1)
      );
      // console.log("updatedItem", updatedItem);
      // state.cartitems = updatedItem;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
