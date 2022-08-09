import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import AllCharacters from './components/AllCharacters'
import Character from './components/Character'
import Header from './components/Header'
import './App.css'

const App = () => {

  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])

  const getAllCharacters = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setCharacters(data.results)
  }

  useEffect(() => {
    getAllCharacters(url)
  }, [])


  return(
    <div className="body">
      <div>
        <Header />
      </div>
      <div className="container">
        <Routes>
          <Route path='/' element={<AllCharacters characters={characters} />} />
          <Route path='/:id' element={<Character />}/>
          {/* 404 Error */}
          <Route path='/*' element={<div>404 No se encuentra</div>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;