/**
 * Dashboard screen sagas
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 *
 */

import { takeLatest, putResolve } from 'redux-saga/effects';

import { actions } from 'store/rootSlices';

function* onMountSaga() {
  yield putResolve(actions.Dashboard.setValue('I was called by onMount'));
}

function* onUnmountSaga() {}

function* updateValueSaga() {
  yield putResolve(actions.Dashboard.setValue('I was called by a Saga'));
}

export default function* watcherSignin() {
  yield takeLatest('Dashboard/onMount', onMountSaga);
  yield takeLatest('Dashboard/onUnmount', onUnmountSaga);
  yield takeLatest('Dashboard/updateValue', updateValueSaga);
}
