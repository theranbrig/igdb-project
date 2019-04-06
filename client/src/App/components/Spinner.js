import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingStyles = styled.div`
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

const Spinner = props => (
	<LoadingStyles>
		<div className="nes-container is-dark is-rounded loading-screen">
			<div className="sweet-loading">
				<PacmanLoader sizeUnit={'px'} size={50} color={'#ffff00'} loading={props.loading} />
			</div>
		</div>
	</LoadingStyles>
);

export default Spinner;
