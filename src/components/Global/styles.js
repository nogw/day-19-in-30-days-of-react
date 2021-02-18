import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    margin: 10px;
    outline: none;
    background-color: none;
    color: #8134b5;
    border: 2px solid #8134b5;
    font-family: monospace;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 64px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Items = styled.div`
  display: flex;

`;

export const Cube = styled.div`
  background-color: #8134b5;
  border-radius: 10px;  
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  width: 110px;
  color: #fff;
  font-family: monospace;
  font-size: 20px;
  font-weight: 900;
`;
