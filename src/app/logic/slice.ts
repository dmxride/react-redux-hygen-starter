/**
 * App reducers
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 * @format
 */

import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_USER, GENERATE_TRANSLATIONS } from './../utils';

const initialState = {
  user: DEFAULT_USER,
  apiTranslationsEdit: false,
  api_t: { API_TRANSLATION_TEST: null } as { API_TRANSLATION_TEST?: any },
};

export default createSlice({
  name: 'App',
  initialState,
  reducers: {
    onMount: () => {},
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setApiTranslationsEdit: (state, { payload }) => {
      state.apiTranslationsEdit = payload;
    },
    setApiTranslations: (state, { payload }) => {
      state.api_t = GENERATE_TRANSLATIONS(payload);
    },
    navigateTo: (state, { payload }) => {},
    navigateBack: () => {},
    toggleApiTranslationsEdit: () => {},
    updateApiTranslationKey: (state, { payload }) => {},
    updateUserRole: (state, { payload }) => {},
  },
});
