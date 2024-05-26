import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//로그인 유무를 확인

interface loginType {
  userInfo: {
    id: string;
    pw: string;
    birth: string;
  } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
  isLogin: boolean;
}

export const fetchLoginData = createAsyncThunk("user/fetchUserData", async () => {
  try {
    const response = await fetch("/api/usercheck", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return data;
    } else {
      throw new Error("서버에 연결을 실패했습니다.");
    }
  } catch (error) {
    throw new Error("서버 연결 중에 오류가 발생했습니다.");
  }
});

const initialState: loginType = {
  userInfo: null,
  status: "idle",
  error: "다시 시도하세요",
  isLogin: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoginData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
        state.isLogin = true;
      })
      .addCase(fetchLoginData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
