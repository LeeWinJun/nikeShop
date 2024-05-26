import { createSlice } from "@reduxjs/toolkit";

//이건 장바구니를 사용할 때 사용? /

interface CartState {
  items: any[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

//사용할 곳에서 사용할 액션
export const addItemAction = cartSlice.actions;

//reducer를 합칠 곳에 넣어야 할 것
export default cartSlice.reducer;
