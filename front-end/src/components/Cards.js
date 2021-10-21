import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Vea estas peliculas!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://img.pixers.pics/pho_wat(s3:700/FO/57/40/61/03/700_FO57406103_f13f48a1d2dd603a6e0b36d0e8a6a205.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/wall-murals-fire-alphabet-letter-a.jpg.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure' 
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards; 
