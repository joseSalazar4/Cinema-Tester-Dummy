import React from 'react';
import '../../App.css';
import SelectSeats from '../SelectSeats'

export default function Seats(props) {
  return <SelectSeats pMovieTitle={props.location.state.title} pSeatsReserved={props.location.state.seats}/>
}
