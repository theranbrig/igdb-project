import React, { useContext } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from '../utlities/FirebaseContext';

const FavoriteButtonStyles = styled.div`
	button {
		border: none;
		&:hover {
			transform: scale(1.25, 1.25);
		}
	}
`;

const FavoriteGameButton = ({ toggleHeart, loved, gameId, name, platformId }) => {
	const { handleGameSave, authUser, liked } = useContext(FirebaseContext);
	return (
		<FavoriteButtonStyles className="vote-icons">
			{loved || liked ? (
				<button type="button" onClick={() => toggleHeart()} onKeyPress={() => toggleHeart()}>
					<i className="nes-icon is-large heart" />
				</button>
			) : (
				<button
					type="button"
					onClick={() => {
						handleGameSave(authUser.uid, gameId, name, parseInt(platformId));
						toggleHeart();
					}}
					onKeyPress={() => toggleHeart()}>
					<i className="nes-icon is-large heart is-empty" />
				</button>
			)}
		</FavoriteButtonStyles>
	);
};

export default FavoriteGameButton;
