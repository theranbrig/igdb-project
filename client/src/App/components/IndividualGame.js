/* eslint-disable camelcase */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImagePlaceHolder from '../static/images/Image-Holder.jpg';
import FavoriteGameButton from './FavoriteGameButton';
import Carousel from './Carousel';
import { FirebaseContext } from '../utilities/FirebaseContext';

const GameStyles = styled.div`
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

const IndividualGame = ({ data, platformId }) => {
  const { authUser, checkGameSave } = useContext(FirebaseContext);

  useEffect(() => {
    checkGameSave(authUser.uid, data.id);
  }, []);

  const { id, name, rating, cover, summary, screenshots, release_dates, genres, involved_companies } = data;
  return (
    <GameStyles>
      <div className="main-game-content">
        <div className="nes-container with-title is-rounded is-centered">
          <div className="title-area">
            <h1>{name}</h1>
            <div className="loved-box">
              {authUser ? (
                <FavoriteGameButton gameId={id} name={name} platformId={platformId} />
              ) : (
                <Link to="/login">
                  <p className="nes-text is-success">Sign In To Save</p>
                </Link>
              )}
              <p>IGDB Rating: {Math.floor(rating)}%</p>
            </div>
          </div>
          <div className="top-splash">
            <div className="nes-container is-dark is-rounded cover-image">
              {cover ? (
                <img
                  src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${data.cover.image_id}.jpg`}
                  alt={cover.image_id}
                />
              ) : (
                <img src={ImagePlaceHolder} alt="No Cover Found" />
              )}
            </div>
            <div className="nes-container is-dark is-rounded with-title summary-box">
              <p className="title">Summary</p>
              <div className="summary-info">{summary ? <p>{summary}</p> : <p>No Summary Found</p>}</div>
            </div>
          </div>
          <div className="screenshots">{screenshots && <Carousel pictures={screenshots} />}</div>
          <div className="other-info">
            <div className="other-info-top">
              <h2>{name} Information</h2>
              <p>Originally Released: {release_dates.sort((a, b) => a.y - b.y)[0].y}</p>
            </div>
            <div className="other-info-lists">
              <ul className="genres nes-list is-circle">
                <h3>Genres</h3>
                {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
              </ul>
              <ul className="companies nes-list is-circle">
                <h3>Created By</h3>
                {involved_companies &&
                  involved_companies.map(company => <li key={company.company.id}>{company.company.name}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GameStyles>
  );
};

IndividualGame.propTypes = {
  data: PropTypes.object.isRequired,
  platformId: PropTypes.number.isRequired,
};

export default IndividualGame;
