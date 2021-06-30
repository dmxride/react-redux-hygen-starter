/**
 * App reducers
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 * @format
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: ['a', 'b', 'c'],
};

export default createSlice({
  name: 'Settings',
  initialState,
  reducers: {
    setSettings: (state, { payload }) => {
      state.settings = payload;
    },
    testSettings: () => {},
  },
});
