import { all } from 'redux-saga/effects'

import appSaga from 'src/app/logic/sagas'
import dashboardSaga from 'src/scenes/Dashboard/logic/sagas'
import settingsSaga from 'src/scenes/Settings/logic/sagas'
// WARNING!! Don't erase the nextline as it is necessary for hygen to automatically import your components
// Define imports here

export default function* rootSaga() {
  yield all([
    appSaga(),
    dashboardSaga(),
    settingsSaga()
  ])
}
