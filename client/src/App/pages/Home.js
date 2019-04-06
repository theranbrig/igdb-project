import { useFetch } from '../utlities/hooks';
import Spinner from '../components/Spinner';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Form from '../components/Form';
import React from 'react';
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';

const MainStyles = styled.div`
	.App {
		margin: 20px;
		min-height: 80vh;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		min-height: 80vh;
		align-items: center;
		justify-items: center;
		margin: 10vh auto;
		width: 90%;
		.title {
			font-family: 'Press Start 2p';
		}
	}
	h1,
	i {
		padding: 15px 0 0;
		font-family: 'Press Start 2p';
		font-size: 5rem;
		text-align: center;
	}
	p {
		font-family: 'Press Start 2p';
	}
	/* .nes-container {
		background: #1919a6;
	} */
	.loading-screen {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		min-height: 80vh;
		align-items: center;
		justify-items: center;
		margin: 10vh auto;
	}
	.icon-list {
		margin: 30px;
		i {
			margin: 20px !important;
		}import Heading from './Heading';
import NavBar from '../components/NavBar';

	}
`;

const Home = () => {
	const [data, loading] = useFetch('/api/igdb');

	return (
		<MainStyles>
			<NavBar />
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<>
					<div className="App nes-container is-dark is-rounded">
						<Heading />
						<Form />
						<section className="icon-list">
							<i className="nes-ash" />
							<i className="nes-pokeball" />
							<i className="nes-bulbasaur" />
							<i className="nes-charmander" />
							<i className="nes-squirtle" />
						</section>
					</div>
				</>
			)}
		</MainStyles>
	);
};

export default Home;
