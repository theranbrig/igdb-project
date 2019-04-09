import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Heading from '../components/Heading';
import Home from '../pages/Home';
import { FirebaseContext } from '../utilities/FirebaseContext';
import NavBar from '../components/NavBar';
import Spinner from '../components/Spinner';

const authUser = { email: 'fake@fake.com' };
const nonAuthUser = null;

it('renders the navbar without user', () => {
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ authUser: nonAuthUser }}>
				<NavBar />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
});

it('renders the navbar with a user', () => {
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ authUser }}>
				<NavBar />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
});

it('renders heading correctly', () => {
	const heading = TestRenderer.create(<Heading />).toJSON();
	expect(heading).toMatchSnapshot();
});

it('renders the home page correctly', () => {
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ authUser }}>
				<Home />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
});

it('renders the home page correctly', () => {
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ loading: true }}>
				<Spinner loading={true} />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
});
