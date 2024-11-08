import { useState } from 'react'
import './scss/custom.scss'
import Navbar from "./Components/Navbar";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Components/Loading";
import Search from "./Pages/Search";
import SearchResult from "./Pages/SearchResults";
import WatchList from "./Pages/WatchList";
import WatchedList from "./Pages/watchedList";

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
            <Route exact path="/" element={<Search />} >
              <Route path=":search-result" element={<SearchResult />} />
            </Route>
            <Route path="/watch-list" element={<WatchList />}/>
            <Route path="/watched-list" element={<WatchedList />} />
        </Routes>
      </Container>
  </Router>
  )
}

export default App
