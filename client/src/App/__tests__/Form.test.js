import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Heading from '../components/Heading';
import Home from '../pages/Home';
import { FirebaseContext } from '../utilities/FirebaseContext';
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const authUser = { email: 'fake@fake.com' };
const nonAuthUser = null;
const platform = 18;

it('renders the platfrom form correctly', () => {
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ platform }}>
				<Form />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
});

it('renders the signup form correctly', () => {
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ platform }}>
				<SignUp />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
});

it('renders the login form correctly', () => {
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ platform }}>
				<Login />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
});
