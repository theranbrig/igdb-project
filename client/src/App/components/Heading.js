import React from 'react';
import styled from 'styled-components';

const HeadingStyles = styled.div`
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

const Heading = () => (
  <HeadingStyles>
    <h1>
      <i className="nes-icon nes-mario is-small" /> NintenDB <i className="nes-icon nes-kirby is-small" />
    </h1>
  </HeadingStyles>
);

export default Heading;
