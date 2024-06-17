import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slices/cart-slice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
