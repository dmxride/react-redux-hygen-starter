---
to: "<%= logic ? 'containers/'+h.inflection.camelize(name.toLowerCase())+'/logic/sagas.ts' : null %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> container sagas
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 * @flow
 */

import { takeLatest } from 'redux-saga/effects'

//import { actions } from 'store/rootSlices'

function* onMountSaga({ payload }) {}

function* onUnmountSaga({ payload }) {}

export default function* watcherSignin() {
  yield takeLatest('<%= h.inflection.camelize(name.toLowerCase())%>/onMount', onMountSaga)
  yield takeLatest('<%= h.inflection.camelize(name.toLowerCase())%>/onUnmount', onUnmountSaga)
}


