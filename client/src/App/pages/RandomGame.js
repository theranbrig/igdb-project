import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFetch } from '../utilities/hooks';
import Form from '../components/Form';
import Spinner from '../components/Spinner';
import NavBar from '../components/NavBar';
import IndividualGame from '../components/IndividualGame';
import { GamePageStyles } from '../styles/GamePageStyles';

const RandomGame = props => {
	let platformId = 18;
	if (props.history.location.query) {
		platformId = props.history.location.query.platform;
	}
	const [data, loading] = useFetch(
		`https://nintendb.herokuapp.com/api/random?platform=${platformId}`
	);

	return (
		<GamePageStyles>
			<NavBar />
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<>
					<div className="back-link">
						<Link to={{ pathname: '/' }}>
							<button type="button" className="nes-btn is-error">
								Back
							</button>
						</Link>
					</div>
					<Form platform={platformId} />
					<IndividualGame data={data} platformId={platformId} />
				</>
			)}
		</GamePageStyles>
	);
};

RandomGame.propTypes = {
	history: PropTypes.object.isRequired
};

export default RandomGame;
