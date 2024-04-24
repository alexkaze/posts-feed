import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  currentId: 0,
};

const postCompactSlice = createSlice({
  name: 'post-compact',
  initialState,
  reducers: {
    setCurrentPostId: (state, action: PayloadAction<number>) => {
      state.currentId = action.payload;
    },
  },
});

export const { setCurrentPostId } = postCompactSlice.actions;
export default postCompactSlice.reducer;
