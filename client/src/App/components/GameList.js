import React from 'react';
import { Link } from 'react-router-dom';

const GameList = ({ gameList }) => {
	return (
		<>
			{gameList.map(item => (
				<div className="game-link">
					<Link to={{ pathname: '/game', query: { gameId: item.gameId } }}>
						<a class="nes-text is-primary">{item.name}</a>
					</Link>
				</div>
			))}
		</>
	);
};

export default GameList;
