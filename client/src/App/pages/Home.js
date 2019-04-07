import styled from 'styled-components';
import React from 'react';
import Form from '../components/Form';
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

const Home = () => (
  <MainStyles>
    <NavBar />
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
  </MainStyles>
);

export default Home;
