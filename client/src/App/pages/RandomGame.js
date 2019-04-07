import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFetch } from '../utlities/hooks';
import Form from '../components/Form';
import Spinner from '../components/Spinner';

import NavBar from '../components/NavBar';

import IndividualGame from '../components/IndividualGame';
import { FirebaseContext } from '../utlities/FirebaseContext';

const RandomGameStyles = styled.div`
	.top-splash {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 3fr;
		justify-items: center;
		justify-content: center;
		grid-gap: 50px;
	}
	.main-game-content {
		width: 90%;
		margin: 20px auto;
	}
	.back-link {
		margin-left: 5%;
		margin-bottom: 10px;
	}

	p,
	h1,
	button,
	li,
	a {
		font-family: 'Press Start 2p';
		text-decoration: none;
	}
	.summary-box {
		max-height: 550px;
		overflow: scroll;
		width: 100%;
	}
	.loved-box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10px;
		p,
		i {
			align-self: center;
		}
	}
	.vote-icons:hover {
		transform: scale(1.25, 1.25);
	}
	.upside-down {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg);
		display: inline-block;
	}
	.screenshots {
		margin-top: 50px;
	}
`;

const RandomGame = props => {
	let platformId = 18;
	if (props.history.location.query) {
		platformId = props.history.location.query.platform;
	}
	const [data, loading] = useFetch(`/api/random?platform=${platformId}`);

	return (
		<RandomGameStyles>
			<NavBar />
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<>
					<div className="back-link">
						<Link to={{ pathname: '/' }}>
							<button className="nes-btn is-error">Back</button>
						</Link>
					</div>
					<Form platform={platformId} />
					<IndividualGame data={data} platformId={platformId} />
				</>
			)}
		</RandomGameStyles>
	);
};

export default RandomGame;
