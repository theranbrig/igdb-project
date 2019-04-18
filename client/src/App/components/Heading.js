import React from 'react';
import { HeadingStyles } from '../styles/MainStyles';

const Heading = () => (
	<HeadingStyles>
		<h1>
			<i className="nes-icon nes-mario is-small" /> NintenDB{' '}
			<i className="nes-icon nes-kirby is-small" />
		</h1>
	</HeadingStyles>
);

export default Heading;
