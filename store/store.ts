import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer/slices/menuReducer";
import cartReducer from "./reducer/slices/cartReducer";
import selectReducer from "./reducer/slices/selectReducer";
import detailReducer from "./reducer/slices/detatilPageReducer";
import authReducer from "./reducer/slices/authReducer";
//1. configureStore로 store를 생성한다. 리덕스 툴킷에선 createStore가 아닌 저것을 사용한다.
//2. reducer를 지정하기 위해 store폴더에 슬라이스를 만들어서 보관한다.
const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    filtered: selectReducer,
    detail: detailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
