import { createSlice } from '@reduxjs/toolkit';
import regions from '../utils/regions';
import regionalData from '../utils/regionalData';

const initialState = {
  coordinates: regions.India,
  regionalData: regionalData.India,
};

const regionSlice = createSlice({
  name: 'Region',
  initialState,
  reducers: {
    setRegion(state, action) {
      // eslint-disable-next-line
        state.coordinates = (action.payload && regions[action.payload]) || regions.India;
      // eslint-disable-next-line
        state.regionalData = (action.payload && regionalData[action.payload]) || regionalData.India;
    },
  },
});

export const { actions } = regionSlice;
export default regionSlice;
