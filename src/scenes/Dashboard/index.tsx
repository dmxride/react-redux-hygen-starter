import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { actions, RootState } from 'store/rootSlices';

import logo from 'assets/images/logo.png';

const Dashboard = ({ t, i18n }) => {
  const { api_t } = useSelector((state: RootState) => state.App);
  const { value, welcome } = useSelector((state: RootState) => state.Dashboard);

  const { onMount, onUnmount, setValue, updateValue } = actions.Dashboard;
  const { navigateTo } = actions.App;

  const dispatch = useDispatch();

  const { API_TRANSLATION_TEST } = api_t;

  useEffect(() => {
    dispatch(onMount());
    return () => {
      dispatch(onUnmount());
    };
  }, [dispatch, onMount, onUnmount]);

  return (
    <Wrapper>
      <Text>{welcome}</Text>
      <Logo alt="Ubiwhere_logo" src={logo} />

      <TextSmall>{value}</TextSmall>
      <Buttons>
        <Button
          onClick={() => {
            dispatch(setValue('I was called by an Action'));
          }}
        >
          CALL ACTION
        </Button>
        <Button
          onClick={() => {
            dispatch(updateValue());
          }}
        >
          CALL SAGA
        </Button>
        <Button
          onClick={() => {
            dispatch(navigateTo('settings'));
          }}
        >
          NAVIGATE TO SETTINGS
        </Button>
      </Buttons>

      {API_TRANSLATION_TEST}
      {t('helloWorld')}
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  color: #fff;
  padding: 6px 12px 6px 12px;
  background-color: ${({ theme }) => theme.blue};
`;

const TextSmall = styled.div`
  color: ${({ theme }) => theme.blue};
  padding: 6px 12px 6px 12px;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Buttons = styled.div``;

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

  &:hover {
    background: #0053ba;
  }
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 21px;
`;
