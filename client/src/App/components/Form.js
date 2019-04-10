import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PlatformFormStyles } from '../styles/FormStyles';

const Form = props => {
	const [platform, setPlatform] = useState(props.platform || '');

	const changePlatform = e => {
		setPlatform(e.target.value);
	};

	return (
		<PlatformFormStyles>
			<form>
				<label htmlFor="platform" className="nes-text is-primary">
					Choose Your Platform Type
				</label>
				<div className="nes-select">
					<select
						required
						id="platform"
						name="platform"
						// eslint-disable-next-line no-shadow
						onChange={platform => changePlatform(platform)}
						defaultValue={platform}>
						<option value="18">Nintendo</option>
						<option value="19">Super Nintendo</option>
						<option value="4">N64</option>
						<option value="21">Game Cube</option>
					</select>
				</div>
				<Link to={{ pathname: '/random', query: { platform } }}>
					<button type="button" className="nes-btn is-success">
						Random Game
					</button>
				</Link>
			</form>
		</PlatformFormStyles>
	);
};

Form.propTypes = {
	platform: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Form;
