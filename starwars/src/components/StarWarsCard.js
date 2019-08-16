import React from "react";
import styled from "styled-components";
import { Grid, Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css';

function StarWarsCards(props) {

    return (

    //semantic styles used to create card components for each star wars character
    <Grid.Column padded key={props.id}>
      <Card>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>Height: {props.height}</Card.Description>
          <Card.Description>Hair Color: {props.haircolor}</Card.Description>
          <Card.Description>Eye Color: {props.eyecolor}</Card.Description>
          <Card.Description>Birth Year: {props.birthyear}</Card.Description>
          <Card.Description>Gender: {props.gender}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>           

    );
}

export default StarWarsCards;
