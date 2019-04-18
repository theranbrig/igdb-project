import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import shallow from 'enzyme';
import Heading from '../components/Heading';
import Home from '../pages/Home';
import { FirebaseContext } from '../utilities/FirebaseContext';
import GameList from '../components/GameList';
import SavedGames from '../components/SavedGames';
import IndividualGame from '../components/IndividualGame';

const authUser = { email: 'fake@fake.com' };
const nonAuthUser = null;
const platform = 18;
const data = {
  id: 79335,
  cover: { id: 55536, image_id: 'tfgefdirmoonz50hyjst' },
  genres: [{ id: 25, name: "Hack and slash/Beat 'em up" }],
  involved_companies: [{ id: 60798, company: [Object] }],
  name: 'Double Dragon III: The Sacred Stones',
  platforms: [{ id: 18, name: 'Nintendo Entertainment System (NES)' }, { id: 41, name: 'Wii U' }],
  rating: 81.32654202545959,
  release_dates: [{ id: 138927, y: 1990 }, { id: 138928, y: 1991 }, { id: 138929, y: 2015 }, { id: 138930, y: 2016 }],
  screenshots: [{ id: 157096, image_id: 'gl1e7emzpe5b7xvbfgp3' }],
  summary:
    'Billy, Jimmy, and the whole Double Dragon gang fight for the Sacred Stones to save in the world in yet another beat-em-up.',
};
=======
import { FirebaseContext } from '../utilities/FirebaseContext';
import GameList from '../components/GameList';
import SavedGames from '../components/SavedGames';

const authUser = { email: 'fake@fake.com' };
const nonAuthUser = null;
>>>>>>> d6254eeabc601f61666a349ccec4f094319235ca

const gameList = [{ gameId: 79335, name: 'Double Dragon III: The Sacred Stones', platform: 18 }];

it('renders the gameList item', () => {
<<<<<<< HEAD
  const element = TestRenderer.create(
    <Router>
      <FirebaseContext.Provider value={{ authUser: nonAuthUser }}>
        <GameList gameList={gameList} />
      </FirebaseContext.Provider>
    </Router>
  ).toJSON();
  expect(element).toMatchSnapshot();
});

it('renders the saved games component', () => {
  const element = TestRenderer.create(
    <Router>
      <FirebaseContext.Provider value={{ savedGames: gameList }}>
        <SavedGames userId="123456789" user="fake@fake.com" />
      </FirebaseContext.Provider>
    </Router>
  ).toJSON();
  expect(element).toMatchSnapshot();
});

it('renders the saved games component', () => {
  const element = shallow(<IndividualGame data={data} />).toJSON();
=======
	const element = TestRenderer.create(
		<Router>
			<FirebaseContext.Provider value={{ savedGames: gameList }}>
				<SavedGames userId="12345" gameId="123455" />
			</FirebaseContext.Provider>
		</Router>
	).toJSON();
	expect(element).toMatchSnapshot();
>>>>>>> d6254eeabc601f61666a349ccec4f094319235ca
});
