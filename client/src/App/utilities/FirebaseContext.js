import React, { useState } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

export const FirebaseContext = React.createContext();

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
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
    } else {
      console.log('No User Found');
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
        platform,
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
        error,
        authUser,
        handleSignUp,
        handleSignIn,
        handleLogout,
        loading,
        handleGameSave,
        checkGameSave,
        checkSavedUserGames,
        liked,
        savedGames,
        setLoading,
        likedGame,
        handleGameUnsave,
        setLiked,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseProvider;
