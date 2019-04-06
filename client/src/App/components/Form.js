import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const FormStyles = styled.div`
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

const Form = props => {
	const [platform, setPlatform] = useState(props.platform || '');
	const [submitted, setSubmitted] = useState(false);

	const changePlatform = e => {
		setPlatform(e.target.value);
	};
	console.log(props);
	return (
		<FormStyles>
			<form
				onSubmit={() => {
					if (platform) {
						setSubmitted(true);
					}
				}}>
				<label for="platform">Platform Type</label>
				<div className="nes-select">
					<select
						required
						id="platform"
						name="platform"
						value={platform}
						onChange={platform => changePlatform(platform)}>
						>
						<option selected="selected" value="18">
							Nintendo
						</option>
						<option value="19">Super Nintendo</option>
						<option value="4">N64</option>
						<option value="21">Game Cube</option>
					</select>
				</div>
				{/* <label for="rating">Rating</label> */}
				{/* <div class="nes-select">
					<select
						required
						id="rating"
						name="rating"
						value={rating}
						onChange={rating => changeRating(rating)}>
						<option disabled selected hidden>
							Select...
						</option>
						<option value="00 20">Not Great</option>
						<option value="20 40">Ok</option>
						<option value="40 60">Good</option>
						<option value="60 80">Great</option>
						<option value="80 100">The Cream of the Crop</option>
					</select>
				</div> */}

				<Link to={{ pathname: '/random', query: { platform } }}>
					<button className="nes-btn is-success">Random Game</button>
				</Link>
			</form>
		</FormStyles>
	);
};

export default Form;
