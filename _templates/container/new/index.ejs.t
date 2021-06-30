---
to: "<%= !logic ? 'src/containers/'+h.inflection.camelize(name.toLowerCase())+'/index.tsx' : null %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> container
 *
 * @author <%= author%> <<%= email%>>
 *
 *
 */

import React  from 'react'
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