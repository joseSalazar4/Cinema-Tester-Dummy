import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Movies.css';

function movieSection() {
  return (
    <div className='movie-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Best Screen Technology</h1>
      <p>1 Mill pixels per meter of rich color!</p>
      <div className='movie-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Ver películas
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >
          Ver Salas
          <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default movieSection;
