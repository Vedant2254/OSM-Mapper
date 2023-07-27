import { configureStore } from '@reduxjs/toolkit';
import regionSlice from './regionSlice';
import themeSlice from './themeSlice';

const store = configureStore({
  reducer: { region: regionSlice.reducer, theme: themeSlice.reducer },
});

export default store;
