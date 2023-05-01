import { combineReducers } from '@reduxjs/toolkit';

import api from '@/common/services/local';

import { userReducer } from './user/store';

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  ...userReducer,
});

export default reducer;
