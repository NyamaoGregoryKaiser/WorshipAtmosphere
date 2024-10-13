import { youtubeVideoSlice } from './slices/youtubeVideos';
import { testimonySlice } from './slices/testimony';
import { devotionalSlice } from './slices/devotional';
import { configureStore } from '@reduxjs/toolkit';
import { todayDevotionalSlice } from './slices/todayDevotional';
import { userSlice } from './slices/user';
import { announcementSlice } from './slices/announcement';
import { eventSlice } from './slices/event';

export const store = configureStore({
  reducer: {
    [devotionalSlice.name]: devotionalSlice.reducer,
    [todayDevotionalSlice.name]: todayDevotionalSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [announcementSlice.name]: announcementSlice.reducer,
    [testimonySlice.name]: testimonySlice.reducer,
    [eventSlice.name]: eventSlice.reducer,
    [youtubeVideoSlice.name]: youtubeVideoSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
