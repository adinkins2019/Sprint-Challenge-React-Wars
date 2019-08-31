import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import PersonInfo from "./components/PersonInfo"

const AppDiv = styled.div`
    text-align: center;
`

const pageH1 = styled.h1`
    color: navy;
    font-weight: 800

`
function Previous(props){
    return props > 1? props-1: null; 
}

function Next(props){
    return props + 1
}
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [pageNum, updatePage] = useState(1)
const prod_api = "https://swapi.co/api/people/"
const prod_url = `${prod_api}${pageNum}`

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
    axios.get(prod_url)
    .then(response => updatePage(response.data))
    .catch(err => console.log("This program is receiving the following error(s): ", err))
},[pageNum, prod_url])

  return (
    <AppDiv>
      <h1 className="Header">React Wars</h1>
      <PersonInfo name= {pageNum.name}
                                   height={pageNum.height}
                                   mass={pageNum.mass}
                                   birthYear={pageNum.birth_year}
                                   eye_color={pageNum.eye_color}
                                   gender = {pageNum.gender}
                                   hair_color = {pageNum.hair_color}
                                   url = {pageNum.url}
                                   homeworld = {pageNum.homeworld}
                                species={pageNum.species}
                                    starships={pageNum.starships}
                                    vehicles={pageNum.vehicles}
                                    films={pageNum.films}/>
                                   );
      <button>Previous</button>
      <button>Next</button>
    </AppDiv>
  );
}

export default App;
