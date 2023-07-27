import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dark: false,
};

const themeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      // eslint-disable-next-line
      state.dark = !state.dark;
    },
  },
});

export const { actions } = themeSlice;
export default themeSlice;
