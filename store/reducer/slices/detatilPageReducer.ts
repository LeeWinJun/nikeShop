import { createSlice } from "@reduxjs/toolkit";

interface productType {
  id: number;
  title: string;
  best: boolean;
  jender: string;
  price: number;
  code: string;
  color: string;
  brand: string;
  menu: string;
  src_1_1: string;
  src_1_2: string;
  src_1_3: string;
  src_1_4: string;
}
interface initData {
  products: productType[];
}

const initialState: initData = {
  products: [],
};

const detailPageProductsSlice = createSlice({
  name: "detailProducts",
  initialState,
  reducers: {
    initProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const detailAction = detailPageProductsSlice.actions;
export default detailPageProductsSlice.reducer;
