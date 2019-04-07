import React, { useContext, useEffect } from 'react';
import LogoutButton from '../components/LogoutButton';
import NavBar from '../components/NavBar';
import { FirebaseContext } from '../utlities/FirebaseContext';
import Spinner from '../components/Spinner';
import SavedGames from '../components/SavedGames';

const Account = () => {
	const { authUser, loading } = useContext(FirebaseContext);

	return (
		<>
			<NavBar />
			{loading ? (
				<Spinner loading={loading} />
			) : (
				authUser && (
					<>
						<SavedGames userId={authUser.uid} user={authUser.email} />
						<LogoutButton />
					</>
				)
			)}
		</>
	);
};

export default Account;
