/**
 * App
 * Please write a description
 *
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 * @format
 * @flow
 */


import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route } from 'react-router'
import { withTranslation } from 'react-i18next';

import GlobalStyles from 'src/ui/globalStyles'
import theme from 'src/ui/theme'

import Routes from 'src/routes'

import AppTools from './AppTools'

function App(props) {
  const { t, i18n } = props

  const { onMount, user } = useSelector(state => state.App)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onMount())
  }, [dispatch, onMount])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <Switch>
          {Routes.map((route) =>
            route.roles.indexOf(user.role) !== -1 && (
              <Route
                exact={route.exact}
                key={route.key}
                path={route.path}
                render={() => <route.component t={t} i18n={i18n} />}
              />
            )
          )}
        </Switch>
      </AppWrapper>
      <AppTools />
    </ThemeProvider>
  )
}

export default withTranslation()(App)

const AppWrapper = styled.div`
  display:flex;
  background-color: ${({ theme }) => theme.bg};
  flex-direction: 'row';
  width:100vw;
  height:100vh;
`