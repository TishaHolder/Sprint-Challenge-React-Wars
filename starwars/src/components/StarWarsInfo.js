import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCards from "./StarWarsCard.js";
import styled from "styled-components";
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css';


function StarWarsInfo(){

    const [starWarsPeopleList, setStarWarsPeopleList] = useState([]);
    const [error, setError] = useState();

    useEffect( () => {

        axios.get("https://swapi.co/api/people/")
        .then( response => {

            console.log(response.data.results);

            setStarWarsPeopleList(response.data.results);


        })

        .catch(error => {
            setError(error.response.message)
        
        })

    }, []);

    return (

        <StarWarsInfoDiv>

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