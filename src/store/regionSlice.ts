import { createSlice } from '@reduxjs/toolkit';
import regions, { RegionsType } from '../utils/regions';
import regionalData, { RegionalDataType } from '../utils/regionalData';

export type RegionStateType = {
  coordinates: RegionsType,
  regionalData: RegionalDataType
};

const initialState: RegionStateType = {
  coordinates: regions.India,
  regionalData: regionalData.India,
};

const regionSlice = createSlice({
  name: 'Region',
  initialState,
  reducers: {
    setRegion(state, action): RegionStateType {
      if (!action.payload || !regions[action.payload]) return state;
      return {
        coordinates: regions[action.payload],
        regionalData: regionalData[action.payload],
      };
    },
  },
});

export const { actions } = regionSlice;
export default regionSlice;
