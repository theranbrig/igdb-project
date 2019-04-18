import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFetch } from '../utilities/hooks';
import Form from '../components/Form';
import Spinner from '../components/Spinner';
import NavBar from '../components/NavBar';
import IndividualGame from '../components/IndividualGame';
import { GamePageStyles } from '../styles/GamePageStyles';

const Game = props => {
  const { gameId, platform } = props.match.params;
  const [data, loading] = useFetch(`https://nintendb.herokuapp.com/api/game/${gameId}/${platform}`);

  return (
    <GamePageStyles>
      <NavBar />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="back-link">
            <Link to={{ pathname: '/mypage' }}>
              <button type="button" className="nes-btn is-error">
                Back
              </button>
            </Link>
          </div>
          <Form platform={platform} />
          <IndividualGame data={data} platformId={platform} />
        </>
      )}
    </GamePageStyles>
  );
};

Game.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Game;
