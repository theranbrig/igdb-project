import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../utilities/FirebaseContext';
import { NavStyles } from '../styles/MainStyles';

const NavBar = () => {
	const { authUser } = useContext(FirebaseContext);
	return (
		<NavStyles>
			<div className="nav-logo">
				<Link to="/">
					<i className="nes-logo" />
					<p>NintenDB</p>
				</Link>
			</div>
			<div className="nav-links">
				<Link to={{ pathname: '/random', query: { platform: 18 } }}>
					<button type="button" className="nes-btn is-success">
						Random Game
					</button>
				</Link>
				{authUser ? (
					<Link to="/mypage">
						<button type="button" className="nes-btn is-primary">
							My Saved Games
						</button>
					</Link>
				) : (
					<>
						<Link to="/signup">
							<button type="button" className="nes-btn is-primary">
								Sign Up
							</button>
						</Link>
						<Link to="/login">
							<button type="button" className="nes-btn is-primary">
								Login
							</button>
						</Link>
					</>
				)}
			</div>
		</NavStyles>
	);
};

export default NavBar;
