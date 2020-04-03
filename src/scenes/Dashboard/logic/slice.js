/**
 * App reducers
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 * @format
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Press one of the buttons bellow',
  welcome: 'Welcome'
}

export default createSlice({
  name: 'Dashboard',
  initialState,
  reducers: {
    onMount: (state, { payload }) => { },
    onUnmount: (state, { payload }) => { },
    setValue: (state, { payload }) => {
      state.value = payload
    },
    updateValue: (state, { payload }) => { }
  }
})
