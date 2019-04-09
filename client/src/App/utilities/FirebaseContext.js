import React, { useState } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

export const FirebaseContext = React.createContext();

const config = {
	apiKey: 'AIzaSyB0kgjy7adtfn72iru21sZ5a6lrl_I24PY',
	authDomain: 'igdb-project-54932.firebaseapp.com',
	databaseURL: 'https://igdb-project-54932.firebaseio.com',
	projectId: 'igdb-project-54932',
	storageBucket: 'igdb-project-54932.appspot.com',
	messagingSenderId: '402685829983'
};

firebase.initializeApp(config);

const FirebaseProvider = props => {
	const [error, setError] = useState(null);
	const [authUser, setAuthUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [liked, setLiked] = useState(false);
	const [savedGames, setSavedGames] = useState([]);
	const [likedGame, setLikedGame] = useState(null);

	const db = firebase.firestore();

	const handleSignUp = async (email, password) => {
		setLoading(true);
		const user = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(setLoading(false))
			.catch(function(error) {
				setError(error.message);
				setLoading(false);
			});
		setAuthUser(user);
	};

	const handleSignIn = async (email, password) => {
		setLoading(true);
		const user = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(setLoading(false))
			.catch(function(error) {
				setError(error.message);
				setLoading(false);
			});
		setAuthUser(user);
	};

	const handleLogout = async () => {
		setLoading(true);
		await firebase.auth().signOut();
		setAuthUser(null);
		setLoading(false);
	};

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			setAuthUser(user);
		}
	});

	const checkGameSave = async (userId, gameId) => {
		setLiked(false);
		await db
			.collection('votes')
			.where('userId', '==', userId)
			.where('gameId', '==', gameId)
			.get()
			.then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					if (doc.data()) {
						setLiked(true);
						setLikedGame(doc.data().likeId);
					}
				});
			})
			.catch(function(error) {
				console.log('Error getting documents: ', error);
			});
	};

	const handleGameSave = async (userId, gameId, name, platform) => {
		await db
			.collection('votes')
			.add({
				userId,
				gameId,
				name,
				platform
			})
			.then(async function(docRef) {
				await checkGameSave(userId, docRef.id);
			})
			.catch(function(error) {
				console.error('Error adding document: ', error);
			});
	};

	const handleGameUnsave = async (userId, gameId) => {
		await db
			.collection('votes')
			.where('userId', '==', userId)
			.where('gameId', '==', gameId)
			.get()
			.then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					doc.ref.delete();
				});
			})
			.catch(function(error) {
				console.log('Error getting documents: ', error);
			});
	};

	const checkSavedUserGames = async userId => {
		const tempSavedGames = [];
		await db
			.collection('votes')
			.where('userId', '==', userId)
			.get()
			.then(querySnapshot => {
				querySnapshot.forEach(function(doc) {
					if (doc.data()) {
						tempSavedGames.push(doc.data());
					}
				});
			})
			.catch(function(error) {
				console.log('Error getting documents: ', error);
			});
		setSavedGames(tempSavedGames);
	};

	return (
		<FirebaseContext.Provider
			value={{
				authUser,
				checkGameSave,
				checkSavedUserGames,
				error,
				handleGameSave,
				handleGameUnsave,
				handleLogout,
				handleSignIn,
				handleSignUp,
				liked,
				likedGame,
				loading,
				savedGames,
				setLiked,
				setLoading
			}}>
			{props.children}
		</FirebaseContext.Provider>
	);
};

FirebaseProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default FirebaseProvider;
