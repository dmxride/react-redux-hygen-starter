/**
 * App reducers
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 * @format
 */

import { createSlice } from '@reduxjs/toolkit'
import config from 'src/config'
const { ROLES } = config

const initialState = {
  roles: ROLES
}

export default createSlice({
  name: 'AppTools',
  initialState,
  reducers: {}
})
