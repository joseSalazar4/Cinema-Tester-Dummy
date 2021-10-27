import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SelectSeats.css";

function selectSeats({ pMovieTitle, pSeatsReserved }) {
  const title = pMovieTitle;
  const seatsReserved = pSeatsReserved;

  let selectedSeats = [];
  var selectedCount = 0;

  console.log(title);
  console.log(seatsReserved);


  function updateSeats(e) {
    if(e.currentTarget.class !== "seat occupied")
    {
      e.currentTarget.class = "seat occupied";
      e.currentTarget.style = "background-color: #6feaf6";
      selectedSeats.push(parseInt(e.currentTarget.id, 10));
      selectedCount= selectedSeats.length;
    }
    else{
      e.currentTarget.class = "seat";
      e.currentTarget.style = "background-color: #444451";
      selectedSeats.pop(parseInt(e.currentTarget.id, 10));
      selectedCount= selectedSeats.length;
    }
    
  }

  function fillReservedSeats(props) {
    let row = [];
    const seatsArray = props.map((number, index) => {
     
      if (number === 1) {
        row.push(<div class="seat occupied" id={index}>{(index+1)}</div>);
      } else{
        row.push(<div class="seat" id={index} onClick={(e) => updateSeats(e)}>{(index+1)}</div>);
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
      <h1 className="title">{title}</h1>

      {fillReservedSeats(seatsReserved)}

      <Link className="buy"  
          to={{
            pathname: "/buyTickets",
            state: {
              title: title,
              seats: selectedSeats
            }
          }}>Comprar Boletos</Link>
    </div>
    
      
  );
}

export default selectSeats;
