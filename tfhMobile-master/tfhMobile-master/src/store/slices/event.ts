import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseType, EventType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  events: EventType[] | undefined;
  totalResults: number;
  loading: boolean;
} = {
  events: undefined,
  totalResults: 0,
  loading: false,
};

// Actual Slice
export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<ResponseType>) {
      state.events = action.payload.data;
      state.totalResults = action.payload.totalResults;
    },
    setEventLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setEventLoading, setEvents } = eventSlice.actions;

export default eventSlice.reducer;
