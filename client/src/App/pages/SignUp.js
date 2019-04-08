import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { FirebaseContext } from '../utilities/FirebaseContext';

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

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleSignUp, error } = useContext(FirebaseContext);

  return (
    <SignUpFormStyles>
      <NavBar />
      <h1>Sign Up Today</h1>
      <form
        onSubmit={async e => {
          e.preventDefault();
          await handleSignUp(email, password);
        }}
      >
        <div className="nes-field">
          <label>
            Email
            <input
              onChange={e => setEmail(e.target.value)}
              type="text"
              id="email"
              value={email}
              placeholder="Enter Email"
              className="nes-input"
              autoComplete="email"
            />
          </label>
        </div>
        <div className="nes-field">
          <label>
            Password
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              value={password}
              placeholder="Enter Password"
              className="nes-input"
              autoComplete="password"
            />
          </label>
        </div>
        <button className="nes-btn is-primary" type="submit">
          Sign Up
        </button>
        {error && <p>{error}</p>}
      </form>
    </SignUpFormStyles>
  );
};

export default withRouter(SignUpForm);
