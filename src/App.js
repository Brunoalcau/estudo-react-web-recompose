import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import {Posts} from './containers/Posts';
class App extends Component {
  render() {
    return (
      <Wrapper>
          <Posts />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  background-color: ${props => props.theme.bgSecondary};
  flex-direction: row;
  justify-content: space-between;
`;