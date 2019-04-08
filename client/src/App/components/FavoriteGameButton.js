import React, { useContext } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from '../utilities/FirebaseContext';

const FavoriteButtonStyles = styled.div`
  button {
    border: none;
    &:hover {
      transform: scale(1.25, 1.25);
    }
  }
`;

const FavoriteGameButton = ({ gameId, name, platformId, likedId }) => {
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
          onKeyPress={() => setLiked(false)}
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
          onKeyPress={() => setLiked(true)}
        >
          <i className="nes-icon is-large heart is-empty" />
        </button>
      )}
    </FavoriteButtonStyles>
  );
};

export default FavoriteGameButton;
