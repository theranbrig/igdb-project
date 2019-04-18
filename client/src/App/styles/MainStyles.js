import styled from 'styled-components';

export const MainPageStyles = styled.div`
	width: 90%;
	margin: 0 auto;
	.App {
		margin: 10px 20px;
		min-height: 80vh;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		min-height: 70vh;
		align-items: center;
		justify-items: center;
		margin: 10vh auto;
		width: 90%;
		.title {
			font-family: 'Press Start 2p';
		}
	}
	h1,
	i {
		padding: 15px 0 0;
		font-family: 'Press Start 2p';
		font-size: 5rem;
		text-align: center;
		@media (max-width: 900px) {
			font-size: 2rem;
		}
	}
	p,
	li {
		font-family: 'Press Start 2p';
	}
	li {
		padding: 10px;
	}
	ul {
		width: 80%;
		list-style-type: none;
		padding: 0;
		@media (max-width: 700px) {
		}
	}
	.loading-screen {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		min-height: 80vh;
		align-items: center;
		justify-items: center;
		margin: 10vh auto;
	}
	.icon-list {
		margin: 30px;
		i {
			margin: 20px !important;
		}
	}
`;

// For Spinner
export const LoadingStyles = styled.div`
	.loading-screen {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		min-height: 80vh;
		align-items: center;
		justify-items: center;
		width: 90%;
		margin-left: 5%;
		border: 3px solid #ffff00;
	}
`;

export const NavStyles = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100px;
	@media (max-width: 700px) {
		height: 120px;
		display: grid;
		grid-template-rows: 1fr 1fr;
		align-items: center;
		justify-items: center;
		text-align: center;
		button {
			font-size: 0.6rem;
		}
	}
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
			font-family: 'Press Start 2p';
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

export const HeadingStyles = styled.div`
	h1 {
		padding: 15px 0 0;
		font-size: 4rem;
		text-align: center;
		font-family: 'Press Start 2p';
		i {
			font-size: 2rem;
		}
	}
`;
