// Import general
import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import {Route, Switch, NavLink} from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';

// Import Components
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm';
import LocationsList from './components/LocationsList';

export default function App() {
  // TODO: Add useState to track data from useEffect
  const [RMdata, setRMdata] = useState([])

  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  useEffect(()=> {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results);  // array
      setRMdata(response.data.results)
    })
    .catch(err => {
      console.log("Error", err);
    })
  }, [])

  const MyNav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin: 0 auto;
  `
  return (
    <main>
      <Header />
      <MyNav>
        <NavLink style={{border: "1px solid black",
                         width: "30%",
                         textAlign: "center",
                         color: "black"}}
                         to="/">Home</NavLink>
        <NavLink style={{border: "1px solid black",
                         width: "40%",
                         textAlign: "center",
                         color: "black"}} 
                         to="/characters">Characters</NavLink>
        <NavLink style={{border: "1px solid black",
                         width: "40%",
                         textAlign: "center",
                         color: "black"}} 
                         to="/locations">Locations</NavLink>
      </MyNav>

      <Switch>
        <Route exact path="/" >
          <WelcomePage />
        </Route>
        <Route exact path="/characters">
          <CharacterList RMdata={RMdata}/>
        </Route>
        <Route path="/characters/:id">
          <CharacterCard RMdata={RMdata}/>
        </Route>
        <Route path="/locations">
          <LocationsList />
        </Route>
      </Switch>
    </main>
  );
}
