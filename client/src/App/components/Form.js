import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  const changePlatform = e => {
    setPlatform(e.target.value);
  };

  return (
    <FormStyles>
      <form>
        <label htmlFor="platform">Platform Type</label>
        <div className="nes-select">
          <select
            required
            id="platform"
            name="platform"
            value={platform}
            onChange={platform => changePlatform(platform)}
          >
            >
            <option selected="selected" value="18">
              Nintendo
            </option>
            <option value="19">Super Nintendo</option>
            <option value="4">N64</option>
            <option value="21">Game Cube</option>
          </select>
        </div>
        <Link to={{ pathname: '/random', query: { platform } }}>
          <button className="nes-btn is-success">Random Game</button>
        </Link>
      </form>
    </FormStyles>
  );
};

export default Form;
