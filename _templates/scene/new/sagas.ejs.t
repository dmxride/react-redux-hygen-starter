---
to: "<%= logic && 'src/scenes/'+h.inflection.camelize(name.toLowerCase())+'/logic/sagas.js' %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> scene sagas
 * Please write a description
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 * @flow
 */
import { takeLatest } from 'redux-saga/effects'

//import { actions } from 'src/store/rootSlices'

function* onMountSaga({ payload }) {}

function* onUnmountSaga({ payload }) {}

export default function* watcherSignin() {
  yield takeLatest('<%= h.inflection.camelize(name.toLowerCase())%>/onMount', onMountSaga)
  yield takeLatest('<%= h.inflection.camelize(name.toLowerCase())%>/onUnmount', onUnmountSaga)
}

