import styled from 'styled-components';

export const GameStyles = styled.div`
  @media (max-width: 700px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  .top-splash {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 3fr;
    justify-items: center;
    justify-content: center;
    grid-gap: 50px;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 3fr;
    }
  }
  .main-game-content {
    width: 90%;
    margin: 20px auto;
  }
  .back-link {
    margin-left: 5%;
    margin-bottom: 10px;
  }

  p,
  h1,
  button,
  li,
  a,
  h3,
  h2 {
    font-family: 'Press Start 2p';
    text-decoration: none;
  }
  .summary-box {
    max-height: 550px;
    overflow-y: scroll;
    width: 100%;
  }
  .loved-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    p,
    i {
      align-self: center;
    }
  }
  .vote-icons:hover {
    transform: scale(1.25, 1.25);
  }
  .upside-down {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    display: inline-block;
  }
  .screenshots {
    margin-top: 50px;
  }
  .cover-image {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
  .other-info {
    padding: 20px;
    display: grid;
    grid-template-rows: 100px 2fr;
    grid-gap: 20px;
    @media (max-width: 700px) {
      padding: 0;
      grid-template-rows: 1fr 3fr;
    }
    .other-info-lists {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
      margin-top: 10px;
      @media (max-width: 700px) {
        grid-template-columns: 1fr;
      }
      ul {
        margin: 10px auto;
        padding: 0;
        li {
          padding: 5px 10px;
        }
      }
    }
  }
`;

export const GamePageStyles = styled.div`
  .back-link {
    margin-left: 5%;
    margin-bottom: 10px;
  }

  button {
    font-family: 'Press Start 2p';
    text-decoration: none;
  }
`;

export const FavoriteButtonStyles = styled.div`
  button {
    border: none;
    &:hover {
      transform: scale(1.25, 1.25);
    }
  }
`;
