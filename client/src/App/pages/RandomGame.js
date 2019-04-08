import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useFetch } from '../utilities/hooks';
import Form from '../components/Form';
import Spinner from '../components/Spinner';
import NavBar from '../components/NavBar';
import IndividualGame from '../components/IndividualGame';

const GamePageStyles = styled.div`
  .back-link {
    margin-left: 5%;
    margin-bottom: 10px;
  }
  button {
    font-family: 'Press Start 2p';
    text-decoration: none;
  }
`;

const RandomGame = props => {
  let platformId = 18;
  if (props.history.location.query) {
    platformId = props.history.location.query.platform;
  }
  const [data, loading] = useFetch(`/api/random?platform=${platformId}`);

  return (
    <GamePageStyles>
      <NavBar />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="back-link">
            <Link to={{ pathname: '/' }}>
              <button type="button" className="nes-btn is-error">
                Back
              </button>
            </Link>
          </div>
          <Form platform={platformId} />
          <IndividualGame data={data} platformId={platformId} />
        </>
      )}
    </GamePageStyles>
  );
};

RandomGame.propTypes = {
  history: PropTypes.object.isRequired,
};

export default RandomGame;
