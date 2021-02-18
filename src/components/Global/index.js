import React, { createContext, useContext, useState } from 'react';
import { Container, Cube, Items } from './styles';
import Block from '../Block'

export const count = createContext({
  number: 1,
  setNumber: () => {}
});

const UpdateNum = () => {
  const { number, setNumber } = useContext(count)

  return (
    <button onClick={() => setNumber(number + 1)}>
      update to {number + 1}
    </button>
  )
}

function Component1( props ) {
  return (
    <Cube>
      <count.Consumer>
        {count => {
          return <h1>{count.number}</h1>
        }}
      </count.Consumer>
    </Cube>
  );
}


function Global() {
  const [number, setNumber] = useState(1)
  const value = { number, setNumber }

  return (
    <Container>
      <count.Provider value={value}>
        <Items>
          <Component1 />
          <Block />
        </Items>
        <UpdateNum/>
      </count.Provider>
    </Container>
  );
}

export default Global;