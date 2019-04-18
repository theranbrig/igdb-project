import React, { useState, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { FirebaseContext } from '../utilities/FirebaseContext';
import Heading from '../components/Heading';
import { UserFormStyles } from '../styles/FormStyles';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleSignUp, error } = useContext(FirebaseContext);

  return (
    <UserFormStyles>
      <NavBar />
      <Heading />
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
        <Link to="/login">
          <p className="nes-text is-primary">Already a Member? Login Today.</p>
        </Link>
        {error && <p>{error}</p>}
      </form>
    </UserFormStyles>
  );
};

export default withRouter(SignUpForm);
