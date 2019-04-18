import styled from 'styled-components';

export const UserFormStyles = styled.div`
	text-align: center;
	label,
	input,
	button,
	select,
	option,
	h1,
	p {
		font-family: 'Press Start 2p';
	}
	label {
		width: 100%;
	}

	input {
		margin-top: 10px;
	}
	form {
		margin: 0 auto;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		width: 50%;
		grid-gap: 20px;
	}
`;

export const PlatformFormStyles = styled.div`
	width: 90%;
	margin: 0 auto;
	label,
	input,
	button,
	select,
	option {
		font-family: 'Press Start 2p';
	}
	button {
		margin-top: 10px;
	}
`;
