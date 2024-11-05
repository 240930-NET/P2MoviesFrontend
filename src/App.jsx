import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Your favorite movie's!</h1>
      <nav>
        <ul>SEARCH</ul>
        <ul>PROFILE</ul>
        <ul>FAVORITES</ul>
        <ul>HOME</ul>
      </nav>
      <Search></Search>
    </>
  )
}

export default App
