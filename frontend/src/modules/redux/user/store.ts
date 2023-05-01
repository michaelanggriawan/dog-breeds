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
    builder.addMatcher(
      authApi.endpoints.getUser.matchFulfilled,
      (state, action) => {
        state.userInfo = {
          ...action.payload.data,
        };
      },
    );
  },
});

export const userReducer = { [reducerName]: slice.reducer };
