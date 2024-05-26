import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  [key: string]: string | number | boolean;
}

interface cartType {
  filteredItemsList: productType[];
  products: productType[];
  filterCheckbox: any[];
}

const initialState: cartType = {
  filteredItemsList: [],
  products: [],
  filterCheckbox: [],
};

const selectSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    initProducts(state, action: PayloadAction<productType[]>) {
      state.products = action.payload;
      state.filteredItemsList = action.payload;
    },

    filteredItems(state, action) {
      //selectCheckbox
      const selectedbox = action.payload;

      // 선택된 체크박스가 이미 filterCheckbox 배열에 있는지 확인합니다.
      const index = state.filterCheckbox.indexOf(selectedbox);

      if (index !== -1) {
        // 이미 선택된 체크박스가 있는 경우, 해당 값을 배열에서 제거합니다.
        state.filterCheckbox.splice(index, 1);
      } else {
        // 선택된 체크박스가 배열에 없는 경우, 해당 값을 배열에 추가합니다.
        state.filterCheckbox.push(selectedbox);
      }

      // 필터링된 상품 목록을 업데이트합니다.
      if (state.filterCheckbox.length === 0) {
        // filterCheckbox가 빈 배열인 경우, 전체 상품을 보여줍니다.
        state.filteredItemsList = state.products;
      } else {
        // 선택된 체크박스의 값들을 포함하는 상품을 필터링합니다.
        state.filteredItemsList = state.products.filter((item) => {
          // 각 속성에 대해 선택된 체크박스의 값들 중 하나라도 포함되는지 확인합니다.
          for (const key in item) {
            if (state.filterCheckbox.includes(item[key])) {
              return true; // 선택된 값이 포함되어 있으면 해당 상품을 유지합니다.
            }
          }
          return false; // 선택된 값이 포함되어 있지 않으면 해당 상품을 필터링합니다.
        });
      }
    },
  },
});

export const filterAction = selectSlice.actions;
export default selectSlice.reducer;
