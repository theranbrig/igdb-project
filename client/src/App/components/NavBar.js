import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyles = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100px;
	.nav-logo,
	.nav-links {
		display: inline-flex;
		align-self: center;
		p {
			font-size: 2rem;
			margin-left: 10px;
		}
		a {
			display: inherit;
			color: black;
			&:hover {
				text-decoration: none;
				text-shadow: 1px 1px 10px gray;
			}
		}
	}
	.nav-logo {
		margin-left: 10px;
	}
	.nav-links button {
		margin: 10px;
		font-family: 'Press Start 2p';
	}
`;

const NavBar = () => (
	<NavStyles>
		<div className="nav-logo">
			<Link to={'/'}>
				<i class="nes-logo" />
				<p>NintenDB</p>
			</Link>
		</div>
		<div className="nav-links">
			<Link to={{ pathname: '/random', query: { platform: 19 } }}>
				<button className="nes-btn is-success">Random Game</button>
			</Link>
			{/* <Link to={{ pathname: '/saved', query: { platform: 19 } }}>
				<button className="nes-btn is-primary">My Saved Games</button>
			</Link> */}
		</div>
	</NavStyles>
);

export default NavBar;
