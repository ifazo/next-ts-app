import { IService } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartState {
  cart: IService[];
}

const initialState: ICartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IService>) => {
      state.cart.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<IService>) => {
      state.cart = state.cart.filter((product) => (product.id !== action.payload.id));
    },
    clearProducts: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;

export default cartSlice;
