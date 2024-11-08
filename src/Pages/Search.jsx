import SearchBar from '../Components/SearchBar';
import React, { Fragment } from "react";
import { Container } from 'reactstrap';

function Search() {
    return(
        <Container>
            <h1>MOVIE WATCHERS PLANNER</h1>
            <SearchBar className="centerBar"></SearchBar>
        </Container>
    );
}

export default Search