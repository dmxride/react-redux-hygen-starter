
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { actions, RootState } from 'store/rootSlices';

import HelpMessage from './message';

const Translation = ({ transKey, children }) => {
  const { apiTranslationsEdit } = useSelector((state: RootState) => state.App);

  const { updateApiTranslationKey } = actions.App;

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {children}
      {apiTranslationsEdit && (
        <HelpMessage
          transKey={transKey}
          message={children}
          onUpdateKey={(value) => dispatch(updateApiTranslationKey(value))}
        />
      )}
    </Wrapper>
  );
};

export default Translation;

const Wrapper = styled.span`
  position: relative;
`;
