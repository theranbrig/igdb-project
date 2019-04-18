import React from 'react';
import Form from '../components/Form';
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';
import { MainPageStyles } from '../styles/MainStyles';

const Home = () => (
  <MainPageStyles>
    <NavBar />
    <div className="App nes-container is-dark is-rounded">
      <Heading />
      <ul>
        <li>Click to get a random Nintendo game from your desired platform and learn more about it.</li>
        <li>Sign Up and Login to save your games for later viewing</li>
        <li>Click the heart icon to save your favorite games.</li>
      </ul>
      <Form />
      <section className="icon-list">
        <i className="nes-ash" />
        <i className="nes-pokeball" />
        <i className="nes-bulbasaur" />
        <i className="nes-charmander" />
        <i className="nes-squirtle" />
      </section>
    </div>
  </MainPageStyles>
);

export default Home;
