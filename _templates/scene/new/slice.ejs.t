---
to: "<%= logic ? 'src/scenes/'+h.inflection.camelize(name.toLowerCase())+'/logic/slice.js' : null %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> scene slice
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export default createSlice({
  name: '<%= h.inflection.camelize(name.toLowerCase())%>',
  initialState,
  reducers: {
    onMount: (state, { payload }) => {},
    onUnmount: (state, { payload }) => {}
  }
})