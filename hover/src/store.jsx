import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import AllProductsSlice from "./AllProductsSlice";

export const store = configureStore({
  reducer: { cart: CartSlice, products: AllProductsSlice },
});
