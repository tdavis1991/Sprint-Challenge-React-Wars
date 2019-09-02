import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import  PeopleCard  from "./components/people";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const CustomDiv = styled.div`
    color: white;
    width: 100%;
    margin: 15px;
    background-color: blue;
  `

  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results)
        setData(res.data.results)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div style={{display: "flex"}}>

        {data.map((list, index) => {
          return (
          <CustomDiv> <PeopleCard 
          name = {list.name}
          birth = {list.birth_year}
          gender = {list.gender}
          /></CustomDiv>
          )
        })}
      </div>
    </div>
  );
}

export default App;
