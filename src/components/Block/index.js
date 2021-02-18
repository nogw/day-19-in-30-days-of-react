import React from 'react';
import { count } from '../Global'
import { Container } from './styles';

function Block() {
  return (
    <Container>
      <count.Consumer>
        {count => {
          return <h1>{count.number}</h1>
        }}
      </count.Consumer>
    </Container>
  );
}

export default Block;