import { createSlice, configureStore } from '@reduxjs/toolkit';
import regions from '../utils/regions';
import regionalData from '../utils/regionalData';

const initialState = {
  region: regions.India,
  regionalData: regionalData.India,
};

const regionSlice = createSlice({
  name: 'Region',
  initialState,
  reducers: {
    setRegion(state, action) {
      // eslint-disable-next-line
      state.region = (action.payload && regions[action.payload]) || regions.India;
      // eslint-disable-next-line
      state.regionalData = (action.payload && regionalData[action.payload]) || regionalData.India;
    },
  },
});

export const { actions } = regionSlice;

const store = configureStore({
  reducer: regionSlice.reducer,
});

export default store;
