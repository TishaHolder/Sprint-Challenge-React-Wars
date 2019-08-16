import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCards from "./StarWarsCard.js";
import styled from "styled-components";
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css';

const StarWarsInfoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-around;
    align-content: center;
    align-content: space-around;
    width: 100%;
    height: 700px;   

`;

function StarWarsInfo(){

    //state properties
    const [starWarsPeopleList, setStarWarsPeopleList] = useState([]);
    const [error, setError] = useState();

    useEffect( () => {

        //request to api
        axios.get("https://swapi.co/api/people/")
        .then( response => {

            console.log(response.data.results);

            //setter function stores response in setStarWarsPeopleList
            setStarWarsPeopleList(response.data.results);

        })

        .catch(error => {
            setError(error.response.message)
        
        })

    }, []);

    return (

        <StarWarsInfoDiv>

            {/*maps over array list and creates a card for each person and passes info as props to StarWarsCards */}
            {starWarsPeopleList.map( (starWarsPerson, index) => {

                return <StarWarsCards key = {index} name = {starWarsPerson.name} 
                                     height = {starWarsPerson.height} haircolor = {starWarsPerson.hair_color}
                                     eyecolor = {starWarsPerson.eye_color} birthyear = {starWarsPerson.birth_year}
                                     gender = {starWarsPerson.gender} />

                       
            })}


        </StarWarsInfoDiv>

    );

}

export default StarWarsInfo;
