import { sendCatchFeedback } from './../../functions/feedback';
import { appAxios } from './../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DevotionalType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  todayDevotional: DevotionalType | undefined;
  loading: boolean;
} = {
  todayDevotional: undefined,
  loading: false,
};

// Actual Slice
export const todayDevotionalSlice = createSlice({
  name: 'todayDevotional',
  initialState,
  reducers: {
    setTodayDevotional(state, action: PayloadAction<DevotionalType>) {
      state.todayDevotional = action.payload;
    },
    setTodayDevotionalLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setTodayDevotionalLoading, setTodayDevotional } =
  todayDevotionalSlice.actions;

export default todayDevotionalSlice.reducer;
