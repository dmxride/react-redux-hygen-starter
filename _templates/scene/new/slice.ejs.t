---
to: "<%= logic && 'src/scenes/'+h.inflection.camelize(name.toLowerCase())+'/logic/slice.js' %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> scene reducers
 * Please write a description
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
  reducers: {}
})