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
      moviesRes.data = moviesRes.data.slice(0, 4)
      setMovies(moviesRes.data);
    })
      .catch(() => {
        console.log("Error")
      })
  }

  const moviesItems = movies.map(movie => <CardItem key={movie.title} src={movie.url} text={movie.title} label='Acción/Sci-Fi' movieBody={movie.description}/>)

  return (
    <div className='cards'>
      <h1>Vea estas peliculas!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {moviesItems}
          </ul>

          <ul className='cards__items'>
            {moviesItems}
          </ul>          
        </div>
      </div>
    </div>
  );
}

export default Cards;
