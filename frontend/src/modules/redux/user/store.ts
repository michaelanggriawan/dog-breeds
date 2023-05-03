import { createSlice } from '@reduxjs/toolkit';

import { authApi } from '@/features/auth/auth';

const initialState = {
  userInfo: {
    username: '',
    email: '',
    userId: '',
  },
};

const reducerName = 'user';

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.getUser.matchFulfilled, (state, action) => {
        state.userInfo = {
          ...action.payload.data,
        };
      })
      .addMatcher(authApi.endpoints.signUp.matchFulfilled, (state, action) => {
        state.userInfo = {
          username: action.payload.data.username,
          userId: action.payload.data.userId,
          email: action.payload.data.email,
        };
      });
  },
});

export const userReducer = { [reducerName]: slice.reducer };
