import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FirebaseContext } from '../utilities/FirebaseContext';
import { LogoutButtonStyles } from '../styles/AccountStyles';

const LogoutButton = ({ history }) => {
  const { handleLogout } = useContext(FirebaseContext);
  return (
    <LogoutButtonStyles
      className="nes-btn is-error"
      type="button"
      onClick={() => {
        handleLogout();
        history.push('/');
      }}
    >
      Logout
    </LogoutButtonStyles>
  );
};

LogoutButton.propTypes = {
  history: PropTypes.object.isRequired,
};

export default LogoutButton;
