/**
 * App sagas
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 *
 */

import { call, takeLatest, putResolve, select } from 'redux-saga/effects';
import { history } from 'utils';

import { actions } from 'store/rootSlices';

function* onMountSaga() {
  yield putResolve(
    actions.App.setApiTranslations({ API_TRANSLATION_TEST: ' Api translation Test' })
  );
}

function* navigateToSaga({ payload }: ReturnType<any>) {
  yield call(history.push, payload);
}

function* navigateBackSaga() {
  yield call(history.goBack);
}

function* toggleApiTranslationsEditSaga() {
  const { App } = yield select((state) => state);
  yield putResolve(actions.App.setApiTranslationsEdit(!App.apiTranslationsEdit));
}

function* updateApiTranslationKeySaga({ payload }: ReturnType<any>) {
  yield putResolve(actions.App.setApiTranslations({ API_TRANSLATION_TEST: payload }));
}

function* updateUserRoleSaga({ payload }: ReturnType<any>) {
  //alert('Update user role')
}

export default function* watcherSignin() {
  yield takeLatest('App/onMount', onMountSaga);
  yield takeLatest('App/navigateTo', navigateToSaga);
  yield takeLatest('App/navigateBack', navigateBackSaga);
  yield takeLatest('App/toggleApiTranslationsEdit', toggleApiTranslationsEditSaga);
  yield takeLatest('App/updateApiTranslationKey', updateApiTranslationKeySaga);
  yield takeLatest('App/updateUserRole', updateUserRoleSaga);
}
