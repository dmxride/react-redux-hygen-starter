import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { actions } from 'src/store/rootSlices'

const Settings = props => {

  const { navigateBack } = actions.App
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Text>SETTINGS</Text>
      <Button onClick={() => { dispatch(navigateBack()) }} >
        NAVIGATE BACK
      </Button>
    </Wrapper>
  )
}

export default Settings

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
  justify-content:center;
  align-items:center;
`

const Text = styled.h1`
  color: #fff;  
  padding:6px 12px 6px 12px;
  background-color: ${({ theme }) => theme.blue};
`

const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: ${({ theme }) => theme.blue};
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;

  &:hover{
    background: #0053ba;
  }
`