import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnnouncementType, ResponseType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  announcements: AnnouncementType[] | undefined;
  loading: boolean;
  totalResults: number;
} = {
  announcements: undefined,
  loading: false,
  totalResults: 0,
};

// Actual Slice
export const announcementSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {
    setAnnouncements(state, action: PayloadAction<ResponseType>) {
      state.announcements = action.payload.data;
      state.totalResults = action.payload.totalResults;
    },
    setAnnouncementLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setAnnouncementLoading, setAnnouncements } =
  announcementSlice.actions;

export default announcementSlice.reducer;
