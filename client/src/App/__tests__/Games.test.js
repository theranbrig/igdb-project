import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContext } from '../utilities/FirebaseContext';
import GameList from '../components/GameList';
import SavedGames from '../components/SavedGames';

const authUser = { email: 'fake@fake.com' };
const nonAuthUser = null;

const gameList = [{ gameId: 79335, name: 'Double Dragon III: The Sacred Stones', platform: 18 }];

it('renders the gameList item', () => {
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ savedGames: gameList }}>
				<SavedGames userId="12345" gameId="123455" />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
});
