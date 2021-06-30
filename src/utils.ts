/**
 * App utils
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 *
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translations from 'translations';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
  /* pass a configuration object here if needed */
});

export const initI18N = () => {
  i18n
    //.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'pt',
      resources: translations,
      debug: true,
      /*backend: {
        // for all available options read the backend's repository readme file
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      },
      */
    });

  return i18n;
};
