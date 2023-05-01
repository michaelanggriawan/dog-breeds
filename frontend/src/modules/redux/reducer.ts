import { combineReducers } from '@reduxjs/toolkit';

import api from '@/common/services/local';

import { userReducer } from './user/store';

export type RootState = ReturnType<typeof reducer>;

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  ...userReducer,
});

export default reducer;
