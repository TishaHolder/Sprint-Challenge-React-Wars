import React from 'react';
import './App.css';
import background from "./sw-bg.jpg";
import StarWarsInfo from "./components/StarWarsInfo.js";
import styled from "styled-components";
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container>
      <AppContainer>
        <MainHeading>React Wars</MainHeading>

        <StarWarsInfo />

      </AppContainer>
    </Container>
  );
}

export default App;
