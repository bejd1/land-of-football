import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../Store/Store";

export interface CartState {
  cartItems: string[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
    },
  },
});

console.log(cartSlice);

export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export const selectCount = (state: RootState) => state.cart.amount;

export default cartSlice.reducer;
