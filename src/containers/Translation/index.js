/**
 * Translation Container
 *
 * @author Hugo Fonseca <hfonseca@ubiwhere.com>
* @author Carlos Silva <csilva@ubiwhere.com>
 */
import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from 'src/store/rootSlices'

import HelpMessage from './message'

const Translation = ({ transKey, children }) => {

  const { apiTranslationsEdit } = useSelector(state => state.App)

  const { updateApiTranslationKey } = actions.App

  const dispatch = useDispatch()

  return (
    <Wrapper>
      {children}
      {apiTranslationsEdit &&
        <HelpMessage
          transKey={transKey}
          message={children}
          onUpdateKey={(value) => dispatch(updateApiTranslationKey(value))}
        />
      }
    </Wrapper>
  )
}

export default Translation

const Wrapper = styled.span`
  position:relative;
`