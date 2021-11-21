import { createReducer, createSlice } from "@reduxjs/toolkit";

import {
  registrationUser,
  loginUser,
  logOutUser,
  refreshUser,
} from "./auth-operation";

const initialState = {
  user: { name: "", email: "" },
  token: null,
  isLoggin: false,
  loading: false,
};

const auth = createReducer(initialState, {
  [registrationUser.fulfilled]: (_, action) => action.payload,
  [loginUser.fulfilled]: (_, action) => action.payload,
  [logOutUser.fulfilled]: () => initialState,
  [refreshUser.fulfilled]: (_, action) => action.payload,
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registrationUser.pending]: (state, action) => (state.loading = true),
    [registrationUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggin = true;
    },
    [registrationUser.rejected]: (state, action) => (state.loading = false),

    [loginUser.pending]: (state) => (state.loading = true),
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggin = true;
    },
    [loginUser.rejected]: (state) => (state.loading = false),

    [logOutUser.pending]: (state) => (state.loading = true),
    [logOutUser.fulfilled]: (state) => {
      state.user = { name: "", email: "" };
      state.token = null;
      state.isLoggin = false;
      state.loading = false;
    },
    [logOutUser.rejected]: (state) => (state.loading = false),
  },
});

// export const { registrationUser, loginUser, logOutUser } = authSlice.actions;
// export default authSlice.reducer;

export default auth;
