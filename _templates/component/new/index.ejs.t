---
to: src/components/<%= h.inflection.camelize(name.toLowerCase())%>/index.js
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> component
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

const <%=h.inflection.camelize(name.toLowerCase())%> = (props) => {
  return (
    <Wrapper><%=h.inflection.camelize(name.toLowerCase())%></Wrapper>
  )
}

export default <%=h.inflection.camelize(name.toLowerCase())%>

const Wrapper = styled.div``
