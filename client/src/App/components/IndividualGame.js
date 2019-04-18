/* eslint-disable camelcase */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImagePlaceHolder from '../static/images/Image-Holder.jpg';
import FavoriteGameButton from './FavoriteGameButton';
import Carousel from './Carousel';
import { FirebaseContext } from '../utilities/FirebaseContext';
import { GameStyles } from '../styles/GamePageStyles';

const IndividualGame = ({ data, platformId }) => {
  const { authUser, checkGameSave } = useContext(FirebaseContext);

  useEffect(() => {
    if (authUser) {
      checkGameSave(authUser.uid, data.id);
    }
  }, [authUser]);

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
                  <p className="nes-text is-primary">Sign In To Save</p>
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
  platformId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default IndividualGame;
