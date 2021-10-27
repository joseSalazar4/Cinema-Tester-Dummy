import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/movies'
})

function Cards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, [])

  function getMovies() {
    api.get('/').then(moviesRes => {
      setMovies(moviesRes.data);
    })
      .catch(() => {
        console.log("Error")
      })
  }
  const moviesItems = movies.map(movie => <CardItem key={movie.title} src={movie.url} text={movie.title} label='Acción/Sci-Fi' movieBody={movie.description} seats={movie.seats}/>)
 
  return (
    <div className='cards'>
      <h1>Catálogo de películas</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {moviesItems}
          </ul> 
        </div>
      </div>
    </div>
  );
}

export default Cards;
