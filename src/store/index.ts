import { configureStore } from '@reduxjs/toolkit';
import regionSlice, { RegionStateType } from './regionSlice';
import themeSlice, { ThemeStateType } from './themeSlice';

const store = configureStore({
  reducer: { region: regionSlice.reducer, theme: themeSlice.reducer },
});

export type StateType = {
  region: RegionStateType, theme: ThemeStateType
};
export default store;
