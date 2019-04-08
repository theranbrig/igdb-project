import React, { useContext } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from '../utilities/FirebaseContext';

const LogoutButtonStyles = styled.button`
  font-family: 'Press Start 2p';
  margin: 20px auto;
`;

const LogoutButton = () => {
  const { handleLogout } = useContext(FirebaseContext);
  return (
    <LogoutButtonStyles className="nes-btn is-error" type="button" onClick={() => handleLogout()}>
      Logout
    </LogoutButtonStyles>
  );
};

export default LogoutButton;
