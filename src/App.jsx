import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Search from "./Pages/Search";
import SearchResult from "./Pages/SearchResults";
import WatchList from "./Pages/WatchList";
import WatchedList from "./Pages/watchedList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/watch-list" element={<WatchList />}/>
          <Route path="/watched-list" element={<WatchedList />} />
      </Routes>
  </Router>
  )
}

export default App
