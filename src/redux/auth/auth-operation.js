import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://connections-api.herokuapp.com";
axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registrationUser = createAsyncThunk(
  "auth/registration",
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const response = await axios.post("/users/signup", credentials);
      token.set(response.data.token);
      console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
      //   return console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await axios.post("/users/login", credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
});

export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
  try {
    const response = await axios.post("/users/logout");
    token.unset(response.data.token);
    // return response.data;
  } catch (error) {
    return console.log(error);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, { getState }) => {
    const state = getState();
    if (!state.auth.token) {
      return;
    }

    try {
      token.set(state.auth.token);
      const response = await axios.get("/users/current");
      console.log(response);

      const initialState = {
        user: response.data,
        token: state.auth.token,
        isLoggin: true,
        loading: false,
      };

      return initialState;
    } catch (error) {
      return console.log(error);
    }
  }
);
