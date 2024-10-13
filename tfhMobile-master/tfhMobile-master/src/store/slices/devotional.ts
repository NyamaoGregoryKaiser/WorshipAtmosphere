import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseType, DevotionalType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  devotionals: DevotionalType[] | undefined;
  loading: boolean;
} = {
  devotionals: undefined,
  loading: false,
};

// Actual Slice
export const devotionalSlice = createSlice({
  name: 'devotionals',
  initialState,
  reducers: {
    setDevotionals(state, action: PayloadAction<DevotionalType[]>) {
      state.devotionals = action.payload;
    },
    setDevotionalLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setDevotionalLoading, setDevotionals } = devotionalSlice.actions;

export default devotionalSlice.reducer;
