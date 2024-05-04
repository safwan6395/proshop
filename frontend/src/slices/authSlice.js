import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userinfo = action.payload;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    destroyCredentials: (state) => {
      state.userinfo = null
      localStorage.removeItem('auth')
    }
  },
});

export const { setCredentials, destroyCredentials } = authSlice.actions;

export default authSlice.reducer;
