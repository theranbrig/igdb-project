import React from 'react';
import { PacmanLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { LoadingStyles } from '../styles/MainStyles';

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
