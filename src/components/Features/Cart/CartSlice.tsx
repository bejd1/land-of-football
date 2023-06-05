import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  price: number;
  quantity: number;
  name: string;
  url: string;
};

type CartState = {
  cartItems: CartItem[];
  amount: number;
  total: number;
};

export const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: number;
        price: number;
        url: string;
        name: string;
      }>
    ) => {
      const { id, price, url, name } = action.payload;
      const cartItem: CartItem | undefined = state.cartItems.find(
        (item) => item.id === id
      );

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cartItems.push({ id, price, quantity: 1, url, name });
      }
      state.total += price;
      state.amount += 1;
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      const { id, price } = action.payload;
      const cartItemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (cartItemIndex !== -1) {
        const cartItemQuantity = state.cartItems[cartItemIndex].quantity;
        state.total -= price * cartItemQuantity;
        state.amount -= cartItemQuantity;
        state.cartItems.splice(cartItemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    increase: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);

      if (cartItem) {
        cartItem.quantity += 1;
        state.total += cartItem.price;
        state.amount += 1;
      }
    },

    decrease: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const cartItemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (cartItemIndex !== -1) {
        const cartItem = state.cartItems[cartItemIndex];
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
          state.total -= cartItem.price;
          state.amount -= 1;
        } else {
          state.cartItems.splice(cartItemIndex, 1);
          state.total -= cartItem.price;
          state.amount -= 1;
        }
      }
    },
  },
});

const { addToCart, removeFromCart, increase, decrease, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
export { addToCart, removeFromCart, increase, decrease, clearCart };
// export const selectCartItems = (state: RootState) => state.cart.cartItems;
// export const selectCartItemTotals = (state: RootState) => {
//   const cartItems = state.cart.cartItems;
//   const itemTotals = cartItems.map((item) => item.price * item.quantity);
//   const total = itemTotals.reduce((a, b) => a + b, 0);
//   return { itemTotals, total };
// };
