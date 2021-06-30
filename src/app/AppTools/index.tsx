/**
 * AppTools Container
 *
 * @author Hugo Fonseca <hfonseca@ubiwhere.com>
 * @author Carlos Silva <csilva@ubiwhere.com>
 *
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { actions, RootState } from 'store/rootSlices';

const AppTools = (props: { roles: Object; translationMode: boolean }) => {
  const { user, apiTranslationsEdit } = useSelector((state: RootState) => state.App);
  const { roles } = useSelector((state: RootState) => state.AppTools);

  const { updateUserRole, toggleApiTranslationsEdit } = actions.App;

  const dispatch = useDispatch();

  const [openTools, setOpenTools] = useState(false);

  return (
    <Wrapper openTools={openTools}>
      <CloseButton onClick={() => setOpenTools(!openTools)}>
        <span>Tools</span>
        <Icon openTools={openTools}>{' >'}</Icon>
      </CloseButton>
      <Tools>
        <div>
          <span>Users</span>
          <UserSwitcher
            onChange={(role) => dispatch(updateUserRole(role))}
            defaultValue={user.role}
          >
            <option disabled value={``}>
              Switch..
            </option>
            {Object.keys(roles).map((role, key) => (
              <option key={`roles_${role}_${key}`} value={role}>
                {role}
              </option>
            ))}
          </UserSwitcher>
        </div>
        <div>
          <span>View translations</span>
          <button onClick={() => dispatch(toggleApiTranslationsEdit())}>
            {apiTranslationsEdit ? 'ON' : 'OFF'}
          </button>
        </div>
      </Tools>
    </Wrapper>
  );
};

export default AppTools;

AppTools.defaultProps = {
  roles: {},
  translationMode: false,
};

const Wrapper = styled.div<{ openTools: boolean }>`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 10px;
  right: ${({ openTools }) => (openTools ? '0px' : '-192px')};
  background-color: #1b57fd;
  box-shadow: 0 5px 16px 0 rgba(34, 36, 38, 0.46);
  z-index: 9999999;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: all 0.3s;

  span {
    color: #fce661;
    font-size: 12px;
    display: block;
    margin-bottom: 5px;
  }

  button {
    margin-left: 5px;
  }
`;

const Icon = styled.div<{ openTools: boolean }>`
  transition: all 0.3s;
  transform: rotate(${({ openTools }) => (openTools ? '0deg' : '180deg')});
`;

const Tools = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
`;

const CloseButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #fce661;
  font-weight: bold;
  padding: 10px 16px;
  box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: all 0.3s;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 10px 0 20px -5px rgba(0, 0, 0, 0.5);
  }
`;

const UserSwitcher = styled.select``;
