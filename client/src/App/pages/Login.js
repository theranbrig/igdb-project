import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { FirebaseContext } from '../utilities/FirebaseContext';
import Spinner from '../components/Spinner';

const SignUpFormStyles = styled.div`
  text-align: center;
  label,
  input,
  button,
  select,
  option,
  h1,
  p {
    font-family: 'Press Start 2p';
  }
  label {
    width: 100%;
  }

  input {
    margin-top: 10px;
  }
  form {
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width: 50%;
    grid-gap: 20px;
  }
`;

const SignUpForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleSignIn, error, loading } = useContext(FirebaseContext);

  return (
    <SignUpFormStyles>
      <NavBar />
      <h1>Login</h1>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <form
          onSubmit={async e => {
            e.preventDefault();
            await handleSignIn(email, password);
            if (!error) {
              history.push('/');
            }
          }}
        >
          <label>
            Email
            <input
              onChange={e => setEmail(e.target.value)}
              type="text"
              value={email}
              placeholder="Enter Email"
              className="nes-input"
              autoComplete="email"
            />
          </label>
          <label>
            Password
            <input
              onChange={e => setPassword(e.target.value)}
              autoComplete="password"
              type="password"
              value={password}
              placeholder="Enter Password"
              className="nes-input"
            />
          </label>

          <button className="nes-btn is-primary" type="submit" disabled={email === '' && password}>
            Sign Up
          </button>
          <Link to="/signup">
            <p className="nes-text is-primary">Not yet a member? Sign Up Today.</p>
          </Link>
          {error && <p>{error}</p>}
        </form>
      )}
    </SignUpFormStyles>
  );
};

SignUpForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignUpForm);
