import SearchBar from '../Components/SearchBar';
import React, { Fragment } from "react";
import { Container } from 'reactstrap';


const searchContainerStyle = {
    minHeight: "100vh", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px",
    paddingTop: "100px", 
  };
  
  const h1Style = {
    color: "white",
    fontSize: "2.5rem",
    marginBottom: "20px", 
    textAlign: "center",
    fontWeight: "bold",
  };


function Search() {
    return(
        <Container style={searchContainerStyle}>
            <h1 style={h1Style}>MOVIES WATCHERS PLANNER</h1>
            <SearchBar className="centerBar"></SearchBar>
        </Container>
    );
}

export default Search