import { combineReducers } from 'redux';

import appSlice from 'app/logic/slice';
import appToolsSlice from 'app/AppTools/logic/slice';
import dashboardSlice from 'scenes/Dashboard/logic/slice';
import settingsSlice from 'scenes/Settings/logic/slice';
// WARNING!! Don't erase the nextline as it is necessary for hygen to automatically import your components
// Define imports here

export const rootReducer = combineReducers({
  App: appSlice.reducer,
  AppTools: appToolsSlice.reducer,
  Dashboard: dashboardSlice.reducer,
  Settings: settingsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const actions = {
  App: appSlice.actions,
  AppTools: appToolsSlice.actions,
  Dashboard: dashboardSlice.actions,
  Settings: settingsSlice.actions,
};
