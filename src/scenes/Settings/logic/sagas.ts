/**
 * Settings screen sagas
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 *
 */

import { takeLatest, putResolve } from 'redux-saga/effects';

import { actions } from 'store/rootSlices';

function* testSettingsSaga() {
  yield putResolve(actions.Settings.setSettings(['1', '2', '3']));
}

export default function* watcherSignin() {
  yield takeLatest('Settings/testSettings', testSettingsSaga);
}
