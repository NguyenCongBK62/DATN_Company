import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: false,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setIsLoginStatus: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

const getIsLogin = (state) => {
  return state.Auth.isLogin;
};

export { getIsLogin };

export const { setIsLoginStatus } = AuthSlice.actions;

export default AuthSlice.reducer;
