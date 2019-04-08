import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Spinner = ({ loading }) => (
  <LoadingStyles>
    <div className="nes-container is-dark is-rounded loading-screen">
      <div className="sweet-loading">
        <PacmanLoader sizeUnit="px" size={50} color="#ffff00" loading={loading} />
      </div>
    </div>
  </LoadingStyles>
);

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
