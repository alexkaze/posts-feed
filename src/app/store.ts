import { configureStore } from '@reduxjs/toolkit';
import { PostsReducer, postsApi } from '@/widgets/PostsList';
import { PostCompactReducer } from '@/entities/PostCompact';

export const store = configureStore({
  reducer: {
    posts: PostsReducer,
    postCompact: PostCompactReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
