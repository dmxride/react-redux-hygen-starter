import { combineReducers } from 'redux'

import appSlice from 'src/app/logic/slice'
import appToolsSlice from 'src/app/AppTools/logic/slice'
import dashboardSlice from 'src/scenes/Dashboard/logic/slice'
import settingsSlice from 'src/scenes/Settings/logic/slice'
// WARNING!! Don't erase the nextline as it is necessary for hygen to automatically import your components
// Define imports here

export const rootReducer = combineReducers({
  App: appSlice.reducer,
  AppTools: appToolsSlice.reducer,
  Dashboard: dashboardSlice.reducer,
  Settings: settingsSlice.reducer,
})


export const actions = {
  App: appSlice.actions,
  AppTools: appToolsSlice.actions,
  Dashboard: dashboardSlice.actions,
  Settings: settingsSlice.actions,
}