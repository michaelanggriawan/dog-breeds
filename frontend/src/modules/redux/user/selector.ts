import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../reducer';

export const selectUser = createSelector(
  (state: RootState) => state.user,
  (user) => user.userInfo,
);
