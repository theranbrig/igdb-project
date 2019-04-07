import React, { useContext } from 'react';
import { FirebaseContext } from '../utlities/FirebaseContext';

const LogoutButton = () => {
	const { handleLogout } = useContext(FirebaseContext);
	return (
		<button
			className="nes-btn is-danger"
			type="button"
			onClick={() => handleLogout()}>
			Logout
		</button>
	);
};

export default LogoutButton;
