/**
 * Settings screen sagas
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 * @format
 */

import { takeLatest, putResolve } from 'redux-saga/effects'

import { actions } from 'src/store/rootSlices'

function* testSettingsSaga({ payload }) {
  yield putResolve(actions.Settings.setSettings(['1', '2', '3']))
}

export default function* watcherSignin() {
  yield takeLatest('Settings/testSettings', testSettingsSaga)
}
