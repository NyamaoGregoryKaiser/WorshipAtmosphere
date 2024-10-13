import { sendFeedback } from './../../functions/feedback';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../types/types';

// Define the initial state using that type
const initialState: { user: UserType | undefined; token: string | undefined } =
  {
    user: undefined,
    token: undefined,
  };

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(
      state,
      action: PayloadAction<{ user: UserType; token: string }>,
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    signOut(state) {
      state.user = undefined;
      state.token = undefined;
      sendFeedback('Logout successful', 'success');
    },
  },
});

export const { updateUser, signOut } = userSlice.actions;

export default userSlice.reducer;
