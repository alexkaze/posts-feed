import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsLimit: 7,
};

const postsListSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    increasePostsLimit: state => {
      state.postsLimit =
        state.postsLimit + 7 > 100 ? 100 : state.postsLimit + 7;
    },
  },
});

export const { increasePostsLimit } = postsListSlice.actions;
export default postsListSlice.reducer;
