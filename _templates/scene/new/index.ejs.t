---
to: "<%= !logic ? 'scenes/'+h.inflection.camelize(name.toLowerCase())+'/index.tsx' : null %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> scene
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 * @flow
 */
import React from 'react'
import styled from 'styled-components'

//import config from 'config'

const <%=h.inflection.camelize(name.toLowerCase())%> = ({ t, i18n }) => {

  return (
    <Wrapper>
      <%=h.inflection.camelize(name.toLowerCase())%>
    </Wrapper>
  )
}

export default <%=h.inflection.camelize(name.toLowerCase())%>

const Wrapper = styled.div``