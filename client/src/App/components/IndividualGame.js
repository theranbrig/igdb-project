import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceHolder from '../static/images/Image-Holder.jpg';
import FavoriteGameButton from './FavoriteGameButton';
import Carousel from './Carousel';
import { FirebaseContext } from '../utilities/FirebaseContext';

const IndividualGame = ({ data, platformId }) => {
  const { authUser, checkGameSave } = useContext(FirebaseContext);

  useEffect(() => {
    checkGameSave(authUser.uid, data.id);
  }, []);

  return (
    <div className="main-game-content">
      <div className="nes-container with-title is-rounded is-centered">
        <div className="title-area">
          <h1>{data.name}</h1>
          <div className="loved-box">
            {authUser ? (
              <FavoriteGameButton gameId={data.id} name={data.name} platformId={platformId} />
            ) : (
              <Link to="/login">
                <p className="nes-text is-success">Sign In To Save</p>
              </Link>
            )}
            <p>IGDB Rating: {Math.floor(data.rating)}%</p>
          </div>
        </div>
        <div className="top-splash">
          <div className="nes-container is-dark is-rounded cover-image">
            {data.cover ? (
              <img
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${data.cover.image_id}.jpg`}
                alt={data.cover.image_id}
              />
            ) : (
              <img src={ImagePlaceHolder} alt="No Cover Found" />
            )}
          </div>
          <div className="nes-container is-dark is-rounded with-title summary-box">
            <p className="title">Summary</p>
            <div className="summary-info">{data.summary ? <p>{data.summary}</p> : <p>No Summary Found</p>}</div>
          </div>
        </div>
        <div className="screenshots">{data.screenshots && <Carousel pictures={data.screenshots} />}</div>
      </div>
    </div>
  );
};

export default IndividualGame;
