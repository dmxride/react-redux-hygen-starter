---
to: "<%= logic && 'src/scenes/'+h.inflection.camelize(name.toLowerCase())+'/index.js' %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> scene
 * Please write a description
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 * @flow
 */
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useDispatch, /*useSelector*/ } from 'react-redux'

import { actions } from 'src/store/rootSlices'

//import config from 'src/config'

const <%=h.inflection.camelize(name.toLowerCase())%> = ({ t, i18n }) => {

  //const { } = useSelector(state => state.<%=h.inflection.camelize(name.toLowerCase())%>)

  const { onMount, onUnmount} = actions.<%=h.inflection.camelize(name.toLowerCase())%>
  //const { api_t } = actions.App

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onMount())
    return () => {
      dispatch(onUnmount())
    }
  }, []);

  return (
    <Wrapper>
      <%=h.inflection.camelize(name.toLowerCase())%>
    </Wrapper>
  )
}

export default <%=h.inflection.camelize(name.toLowerCase())%>

const Wrapper = styled.div``