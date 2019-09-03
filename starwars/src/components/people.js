import React from "react";
import styled from "styled-components";

const CustomDiv = styled.div`
  color: white;
  width: 30%;
  margin: 15px auto;
  background-color: orangered;
  padding: 10px;
  &: hover {
      opacity: 0.7
  }
  `

function PeopleCard(props) {
    return (
        <CustomDiv>
            <h2>Name: {props.name}</h2>
            <p>DOB: {props.birth}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}in</p>
            <p>Mass: {props.mass}kg</p>
        </CustomDiv>
    )
};

export default PeopleCard