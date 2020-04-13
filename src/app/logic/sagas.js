
/**
 * App sagas
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 * @format
 */

import { call, takeLatest, putResolve, select } from 'redux-saga/effects'
import { history } from 'src/utils'

import { actions } from 'src/store/rootSlices'

function* onMountSaga({ payload }) {
  yield putResolve(actions.App.setApiTranslations({ API_TRANSLATION_TEST: ' Api translation Test' }))
}

function* navigateToSaga({ payload }) {
  yield call(history.push, payload)
}

function* navigateBackSaga({ payload }) {
  yield call(history.goBack)
}

function* toggleApiTranslationsEditSaga({ payload }) {
  const { App } = yield select(state => state)
  yield putResolve(actions.App.setApiTranslationsEdit(!App.apiTranslationsEdit))
}

function* updateApiTranslationKeySaga({ payload }) {
  yield putResolve(actions.App.setApiTranslations({ API_TRANSLATION_TEST: payload }))
}

function* updateUserRoleSaga({ payload }) {
  //alert('Update user role')
}

export default function* watcherSignin() {
  yield takeLatest('App/onMount', onMountSaga)
  yield takeLatest('App/navigateTo', navigateToSaga)
  yield takeLatest('App/navigateBack', navigateBackSaga)
  yield takeLatest('App/toggleApiTranslationsEdit', toggleApiTranslationsEditSaga)
  yield takeLatest('App/updateApiTranslationKey', updateApiTranslationKeySaga)
  yield takeLatest('App/updateUserRole', updateUserRoleSaga)
}
