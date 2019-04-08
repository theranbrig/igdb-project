import React, { useContext } from 'react';
import styled from 'styled-components';
import LogoutButton from '../components/LogoutButton';
import NavBar from '../components/NavBar';
import { FirebaseContext } from '../utilities/FirebaseContext';
import Spinner from '../components/Spinner';
import SavedGames from '../components/SavedGames';

const AccountStyles = styled.div`
  text-align: center;
`;

const Account = () => {
  const { authUser, loading } = useContext(FirebaseContext);
  return (
    <AccountStyles>
      <NavBar />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        authUser && (
          <>
            <SavedGames userId={authUser.uid} user={authUser.email} />
            <LogoutButton />
          </>
        )
      )}
    </AccountStyles>
  );
};

export default Account;
