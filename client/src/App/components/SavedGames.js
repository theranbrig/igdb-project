import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FirebaseContext } from '../utilities/FirebaseContext';
import GameList from './GameList';
import Spinner from './Spinner';
import { SavedGameStyles } from '../styles/AccountStyles';

const SavedGames = ({ userId, user }) => {
	const { checkSavedUserGames, savedGames, setLoading, loading } = useContext(FirebaseContext);

	useEffect(() => {
		setLoading(true);
		checkSavedUserGames(userId);
		setLoading(false);
	}, [savedGames.length]);

	// Individual Game System Filters
	const nesGames = savedGames.filter(game => game.platform === 18);
	const snesGames = savedGames.filter(game => game.platform === 19);
	const sixtyFourGames = savedGames.filter(game => game.platform === 4);
	const gameCubeGames = savedGames.filter(game => game.platform === 21);

	return (
		<SavedGameStyles>
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<>
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
						<h1>No Games Found. Start Adding Today.</h1>
					)}
				</>
			)}
		</SavedGameStyles>
	);
};

SavedGames.propTypes = {
	userId: PropTypes.string.isRequired,
	user: PropTypes.string.isRequired
};

export default SavedGames;
