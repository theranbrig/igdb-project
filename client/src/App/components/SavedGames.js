import React, { useContext, useEffect } from 'react';
import { FirebaseContext } from '../utlities/FirebaseContext';
import { Link } from 'react-router-dom';
import GameList from './GameList';
import styled from 'styled-components';

const GameListStyles = styled.div`
	.games-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 20px;
		justify-items: center;
		font-family: 'Press Start 2p';
		width: 90%;
		margin-left: 5%;
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
	}
`;

const SavedGames = ({ userId, user }) => {
	const { checkSavedUserGames, savedGames, authUser } = useContext(FirebaseContext);
	let games;

	useEffect(() => {
		checkSavedUserGames(userId);
		console.log(savedGames);
	}, [savedGames.length]);

	const nesGames = savedGames.filter(game => game.platform === 18);
	const snesGames = savedGames.filter(game => game.platform === 19);
	const sixtyFourGames = savedGames.filter(game => game.platform === 4);
	const gameCubeGames = savedGames.filter(game => game.platform === 21);
	return (
		<GameListStyles>
			<h1>{user}'s List of Games</h1>
			{savedGames.length ? (
				<div className="games-list">
					<div className="game-list nes-container is-rounded">
						<h2>NES Games</h2>
						<GameList gameList={nesGames} />
					</div>
					<div className="game-list nes-container is-rounded">
						<h2>SNES Games</h2>
						<GameList gameList={snesGames} />
					</div>
					<div className="game-list nes-container is-rounded">
						<h2>64 Games</h2>
						<GameList gameList={sixtyFourGames} />
					</div>
					<div className="game-list nes-container is-rounded">
						<h2>Game Cube Games</h2>
						<GameList gameList={gameCubeGames} />
					</div>
				</div>
			) : (
				<p>NoGames</p>
			)}
		</GameListStyles>
	);
};

export default SavedGames;
