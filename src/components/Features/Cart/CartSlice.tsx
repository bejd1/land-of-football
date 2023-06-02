import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../App/Store";
import axios from "axios";

export interface Product {
  id: string;
  title: string;
  category: string;
  url: string;
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

export const fetchProductsList = createAsyncThunk(
  "cart/fetchProductsList",
  async () => {
    const response = await axios.get(
      "https://land-of-football-9167d-default-rtdb.firebaseio.com/productsList.json"
    );
    return response.data;
  }
);

console.log(fetchProductsList());

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
    clearCart(state) {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemId);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        // state.quanti ty -= existingItem.quantity;
        // state.total -= existingItem.quantity * existingItem.price;
      }
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
