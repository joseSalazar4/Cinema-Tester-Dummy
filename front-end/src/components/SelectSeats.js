import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SelectSeats.css";

function SelectSeats({ pMovieTitle, pSeatsReserved }) {
  const title = pMovieTitle;
  const seatsReserved = pSeatsReserved;
  const [selectedSeats, setSelectedSeats] = useState([])

  //let selectedSeats = [];

  function updateSeats(e) {
    console.log(e.currentTarget.id)
    if (e.currentTarget.class !== "seat occupied") {
      e.currentTarget.class = "seat occupied";
      e.currentTarget.style = "background-color: #6feaf6";
      setSelectedSeats([...selectedSeats, parseInt(e.currentTarget.id, 10)]);
    }
    else {
      e.currentTarget.class = "seat";
      e.currentTarget.style = "background-color: #444451";
      var index = parseInt(e.currentTarget.id, 10);
      setSelectedSeats(selectedSeats.filter(function(e) { return e !== index }))
    }
    
  }

  useEffect(() => {
    console.log("############", selectedSeats)
  }, [selectedSeats])

  function fillReservedSeats(props) {
    let row = [];
    const seatsArray = props.map((number, index) => {

      if (number === 1) {
        row.push(<div class="seat occupied" id={index}>{(index + 1)}</div>);
      } else {
        row.push(<div class="seat" id={index} onClick={(e) => updateSeats(e)}>{(index + 1)}</div>);
      }

      if ((index + 1) % 8 === 0) {

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
        }} style={!selectedSeats.length ? { pointerEvents: 'none', backgroundColor: '#3a787e' } : null} >Comprar Boletos</Link>
    </div>


  );
}

export default SelectSeats;
