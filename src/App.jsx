import { useState } from 'react'
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
import Search from "./Pages/Search";
import SearchResult from "./Pages/SearchResults";
import WatchList from "./Pages/WatchList";
import WatchedList from "./Pages/watchedList";
import MovieDetails from "./Pages/MovieDetails"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <Container className="centerContainer">
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/watchlist" element={<WatchList />}/>
          <Route path="/watched-movies" element={<WatchedList />} />
          <Route path="/movie/:title&:releaseYear" element={<MovieDetails />} />
        </Routes>
      </Container>
  </Router>
  )
}

export default App
