import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addToCart, deleteFromCart } = Cartslice.actions;

export default Cartslice.reducer;
