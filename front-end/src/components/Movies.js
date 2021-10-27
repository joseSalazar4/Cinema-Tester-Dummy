import React from 'react';
import '../App.css';
import './Movies.css';

function movieSection() {
  return (
    <div className='movie-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>La mejor calidad de películas</h1>
      <p>Los mejores estrenos y salas del pais!</p>
    </div>
  );
}

export default movieSection;
