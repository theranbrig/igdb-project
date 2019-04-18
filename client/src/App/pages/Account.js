import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LogoutButton from '../components/LogoutButton';
import NavBar from '../components/NavBar';
import { FirebaseContext } from '../utilities/FirebaseContext';
import Spinner from '../components/Spinner';
import SavedGames from '../components/SavedGames';
import { AccountStyles } from '../styles/AccountStyles';

const Account = ({ history }) => {
	const { authUser, loading } = useContext(FirebaseContext);
	return (
		<AccountStyles>
			<NavBar />
			{!authUser && <p>You don't have an account. Please login in access your page.</p>}
			{loading ? (
				<Spinner loading={loading} />
			) : (
				authUser && (
					<>
						<SavedGames userId={authUser.uid} user={authUser.email} />
						<LogoutButton history={history} />
					</>
				)
			)}
		</AccountStyles>
	);
};

Account.propTypes = {
	history: PropTypes.object.isRequired
};

export default Account;
