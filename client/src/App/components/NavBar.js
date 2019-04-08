import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../utilities/FirebaseContext';

const NavStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  @media (max-width: 700px) {
    height: 120px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
    button {
      font-size: 0.6rem;
    }
  }
  .nav-logo,
  .nav-links {
    display: inline-flex;
    align-self: center;
    p {
      font-size: 2rem;
      margin-left: 10px;
    }
    a {
      display: inherit;
      color: black;
      font-family: 'Press Start 2p';
      &:hover {
        text-decoration: none;
        text-shadow: 1px 1px 10px gray;
      }
    }
  }
  .nav-logo {
    margin-left: 10px;
  }
  .nav-links button {
    margin: 10px;
    font-family: 'Press Start 2p';
  }
`;

const NavBar = () => {
  const { authUser } = useContext(FirebaseContext);
  return (
    <NavStyles>
      <div className="nav-logo">
        <Link to="/">
          <i className="nes-logo" />
          <p>NintenDB</p>
        </Link>
      </div>
      <div className="nav-links">
        <Link to={{ pathname: '/random', query: { platform: 18 } }}>
          <button type="button" className="nes-btn is-success">
            Random Game
          </button>
        </Link>
        {authUser ? (
          <Link to="/mypage">
            <button type="button" className="nes-btn is-primary">
              My Saved Games
            </button>
          </Link>
        ) : (
          <>
            <Link to="/signup">
              <button type="button" className="nes-btn is-primary">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button type="button" className="nes-btn is-primary">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </NavStyles>
  );
};

export default NavBar;
