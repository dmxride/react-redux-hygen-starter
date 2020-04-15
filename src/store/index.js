import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootSlices'
import rootSaga from './rootSaga'

export default () => {
  const sagaMiddleware = createSagaMiddleware()

  const customizedMiddleware = getDefaultMiddleware({
    thunk: false,
    serializableCheck: false
  })

  const middleware = [...customizedMiddleware, sagaMiddleware]

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
  })

  sagaMiddleware.run(rootSaga)

  return store
}