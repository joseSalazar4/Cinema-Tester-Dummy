import React, { useState, useEffect } from "react";
import "./SelectSeats.css";

function selectSeats({ pMovieTitle, pSeatsReserved }) {
  const title = pMovieTitle;
  const seatsReserved = pSeatsReserved;

  console.log(title);
  console.log(seatsReserved);

  function reserveSeat(props,id){
    props[id] = 2;
    console.log("fiumba")
    console.log(id);
  }

  function fillReservedSeats(props) {
    let row = [];
    const seatsArray = props.map((number, index) => {
     
      if (number === 1) {
        row.push(<div class="seat occupied" id={index}>{(index+1)}</div>);
      } else if(number === 0) {
        row.push(<div class="seat" id={index} onClick={reserveSeat(props,index)}>{(index+1)}</div>);
      }else{
        row.push(<div class="seat selected" id={index}>{(index+1)}</div>);
      }
    
      if ((index+1)% 8 === 0) {

        //Si ya debo hacer un row nuevo
        const to_return = row;
        row = [];
        return <div class="row">{to_return}</div>;
      }
      return;
    });
    return <div class="container"><div class="screen"></div>{seatsArray}</div>;
  }

  return (
    <div className="selectSeats">
      {fillReservedSeats(seatsReserved)}
    </div>
      
  );
}

export default selectSeats;
