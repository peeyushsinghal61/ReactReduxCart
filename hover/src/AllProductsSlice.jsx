import { createSlice } from "@reduxjs/toolkit";

const AllProductSlice = createSlice({
  name: "allproducts",
  initialState: { products: [], filterProducts: [] },
  reducers: {
    addAllProducts: (state, action) => {
      //console.log("action", action.payload);
      state.products = action.payload;
    },
    addFilteredProducts: (state, action) => {
      //console.log("action", action.payload);
      state.filterProducts = action.payload;
    },
  },
});

export const { addAllProducts, addFilteredProducts } = AllProductSlice.actions;
export default AllProductSlice.reducer;
