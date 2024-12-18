import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
export const Store = configureStore({
  reducer: {
    cart: Cartslice,
  },
  devTools: true,
});
