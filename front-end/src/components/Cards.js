import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/movies'
})

function Cards() {
  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);

  useEffect(() => {
    getMovies();
  }, [])

  function getMovies() {
    api.get('/').then(moviesRes => {
      let moviesLen = moviesRes.data.length;
      setMovies(moviesRes.data.slice(0,moviesLen/2));
      setMovies2(moviesRes.data.slice(moviesLen/2, moviesLen));
    })
      .catch(() => {
        console.log("Error")
      })
  }
  const moviesItems = movies.map(movie => <CardItem key={movie.title} src={movie.url} text={movie.title} label='Acción/Sci-Fi' movieBody={movie.description} seats={movie.seats}/>)
  const moviesItems2 = movies2.map(movie => <CardItem key={movie.title} src={movie.url} text={movie.title} label='Acción/Sci-Fi' movieBody={movie.description} seats={movie.seats}/>)

  return (
    <div className='cards'>
      <h1>Catálogo de películas</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {moviesItems}
          </ul>
          <ul className='cards__items'>
            {moviesItems2}
          </ul>          
        </div>
      </div>
    </div>
  );
}

export default Cards;
