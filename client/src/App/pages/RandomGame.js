import React, { useState } from 'react';
import { useFetch } from '../utlities/hooks';
import Form from '../components/Form';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import ImagePlaceHolder from '../static/images/Image-Holder.jpg';
import NavBar from '../components/NavBar';

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
	li {
		font-family: 'Press Start 2p';
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
	.upside-down {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg);
		display: inline-block;
	}
`;

const RandomGame = props => {
	const [loved, setLoved] = useState(false);

	let platformId = 18;
	if (props.history.location.query) {
		platformId = props.history.location.query.platform;
	}
	const [data, loading] = useFetch(`/api/random?platform=${platformId}`);

	const toggleHeart = () => {
		setLoved(!loved);
	};

	return (
		<RandomGameStyles>
			<NavBar />
			<Heading />
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
					<div className="main-game-content">
						<div className="nes-container with-title is-rounded is-centered">
							<div className="title-area">
								<h1>{data.name}</h1>
								<div className="loved-box">
									<div className="vote-icons">
										{loved ? (
											<i onClick={() => toggleHeart()} class="nes-icon is-large heart" />
										) : (
											<i onClick={() => toggleHeart()} class="nes-icon is-large heart is-empty" />
										)}
									</div>
									<p>IGDB Rating: {Math.floor(data.rating)}%</p>
								</div>
							</div>
							<div className="top-splash">
								<div className="nes-container is-dark is-rounded">
									{data.cover ? (
										<img
											src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${
												data.cover.image_id
											}.jpg`}
											alt={data.cover.image_id}
										/>
									) : (
										<img src={ImagePlaceHolder} alt="No Image Found" />
									)}
								</div>
								<div className="nes-container is-dark is-rounded with-title summary-box">
									<p className="title">Summary</p>
									{data.summary ? <p>{data.summary}</p> : <p>No Summary Found</p>}
								</div>
							</div>
							{data.screenshots && <Carousel pictures={data.screenshots} />}
						</div>
					</div>
				</>
			)}
		</RandomGameStyles>
	);
};

export default RandomGame;
