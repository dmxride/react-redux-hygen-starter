---
to: "<%= !logic && 'src/containers/'+h.inflection.camelize(name.toLowerCase())+'/index.js' %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> container
 * Please write a description
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 * @flow
 */
import React  from 'react'
import styled from 'styled-components'

//import config from 'src/config'

const <%=h.inflection.camelize(name.toLowerCase())%> = ({ t, i18n }) => {

  return (
    <Wrapper>
      <%=h.inflection.camelize(name.toLowerCase())%>
    </Wrapper>
  )
}

export default <%=h.inflection.camelize(name.toLowerCase())%>

const Wrapper = styled.div``