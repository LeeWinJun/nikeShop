import { createSlice } from "@reduxjs/toolkit";

//메뉴 선택 해당 메뉴에 맞는 데이터 로드

interface menuState {
  menu: any;
}

const initialState: menuState = {
  menu: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectedMenu(state, action) {
      state.menu = action.payload;
    },
  },
});

//사용할 곳에서 사용
export const menuAction = menuSlice.actions;
export default menuSlice.reducer;
