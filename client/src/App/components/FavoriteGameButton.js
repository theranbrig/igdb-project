import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FirebaseContext } from '../utilities/FirebaseContext';
import { FavoriteButtonStyles } from '../styles/GamePageStyles';

const FavoriteGameButton = ({ gameId, name, platformId }) => {
  const { handleGameSave, authUser, liked, setLiked, handleGameUnsave } = useContext(FirebaseContext);

  return (
    <FavoriteButtonStyles className="vote-icons">
      {liked ? (
        <button
          type="button"
          onClick={async () => {
            await handleGameUnsave(authUser.uid, gameId);
            setLiked(false);
          }}
          onKeyPress={async () => {
            await handleGameUnsave(authUser.uid, gameId);
            setLiked(false);
          }}
        >
          <i className="nes-icon is-large heart" />
        </button>
      ) : (
        <button
          type="button"
          onClick={async () => {
            await handleGameSave(authUser.uid, gameId, name, parseInt(platformId));
            setLiked(true);
          }}
          onKeyPress={async () => {
            await handleGameSave(authUser.uid, gameId, name, parseInt(platformId));
            setLiked(true);
          }}
        >
          <i className="nes-icon is-large heart is-empty" />
        </button>
      )}
    </FavoriteButtonStyles>
  );
};

FavoriteGameButton.propTypes = {
  gameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  platformId: PropTypes.string.isRequired,
};

export default FavoriteGameButton;
