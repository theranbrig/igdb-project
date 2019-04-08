import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GameList = ({ gameList }) => (
  <>
    {gameList.map(item => (
      <div className="game-link" key={item.gameId}>
        <Link
          to={{
            pathname: `/game/${item.gameId}/${item.platform}`,
          }}
        >
          <p className="nes-text is-primary">{item.name}</p>
        </Link>
      </div>
    ))}
  </>
);

GameList.propTypes = {
  gameList: PropTypes.array.isRequired,
};

export default GameList;
