import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseType, TestimonyType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  testimonies: TestimonyType[] | undefined;
  totalResults: number;
  loading: boolean;
} = {
  testimonies: undefined,
  totalResults: 0,
  loading: false,
};

// Actual Slice
export const testimonySlice = createSlice({
  name: 'testimonies',
  initialState,
  reducers: {
    setTestimonyLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setTestimonies(state, action: PayloadAction<ResponseType>) {
      state.testimonies = action.payload.data;
      state.totalResults = action.payload.totalResults;
    },
  },
});

export const { setTestimonyLoading, setTestimonies } = testimonySlice.actions;

export default testimonySlice.reducer;
