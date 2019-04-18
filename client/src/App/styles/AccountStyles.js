import styled from 'styled-components';

export const AccountStyles = styled.div`
  text-align: center;
  p {
    font-family: 'Press Start 2p';
  }
`;

export const SavedGameStyles = styled.div`
  .games-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
    justify-items: center;
    font-family: 'Press Start 2p';
    width: 90%;
    margin-left: 5%;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
  .game-list {
    text-align: center;
    width: 100%;
    a {
      text-decoration: none;
    }
  }
  .game-link {
    padding: 10px;
  }
  h1 {
    font-family: 'Press Start 2p';
    text-align: center;
    padding: 50px 0;
    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
  }
`;

export const LogoutButtonStyles = styled.button`
  font-family: 'Press Start 2p';
  margin: 20px auto;
`;
