import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../Store/Store";
// import { useState } from "react";

export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface CartState {
  cartItems: Product[];
  amount: number;
  total: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  status: "idle",
  error: null,
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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProductsList.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchProductsList.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.cartItems = action.payload;
  //     })
  //     .addCase(fetchProductsList.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message ?? "Something went wrong";
  //     });
  // },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCount = (state: RootState) => state.cart.amount;

export default cartSlice.reducer;
