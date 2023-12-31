import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials) => {
    const request = await axios.post(`${apiUrl}/auth/login`, userCredentials, {withCredentials:true});
    const response = await request.data.data;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
    isLoggedIn: false,
  },
  //   reducers: {
  //     login: (state, action) => {
  //       state.user = action.payload;
  //       state.isLoggedIn = true;
  //     },
  //   },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Acces Denied ! Invalid Credentials";
        } else {
          state.error = action.error.message;
        }
        // state.error = null;
      });
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;


