import { createSlice } from '@reduxjs/toolkit';

export type ThemeStateType = { dark: boolean };

const initialState: ThemeStateType = {
  dark: false,
};

const themeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    toggleTheme(state): ThemeStateType {
      return { dark: !state.dark };
    },
  },
});

export const { actions } = themeSlice;
export default themeSlice;
