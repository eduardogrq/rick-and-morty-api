import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import AllCharacters from './components/AllCharacters'
import Character from './components/Character'
import Header from './components/Header'
import './App.css'

const App = () => {

  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const getAllCharacters = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setCharacters(data.results)
    setInfo(data.info)
  }

  const onPrev = () => {
    getAllCharacters(info.prev)
  }

  const onNext = () => {
    getAllCharacters(info.next)
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
          <Route path='/' element={<AllCharacters characters={characters} prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>} />
          <Route path='/characters/:id' 
            element={<Character characters={characters} />}
          />
          {/* 404 Error */}
          <Route path='/*' element={<h1 className="text-white text-center">404 <br></br>Page not found</h1>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;