import React, { useState, useEffect } from "react";
import "./SelectSeats.css";

function selectSeats({ pMovieTitle, pSeatsReserved }) {
  const title = pMovieTitle;
  const seatsReserved = pSeatsReserved;

  console.log(title);
  console.log(seatsReserved);

  // function createSeat(number,id){
  //   if(number){
  //     return(
  //       <div class="seat occupied" id={id}></div>
  //     );
  //   }
  //   return(<div class="seat"  id={id}></div>)
  // }

  // function createRow(count,countSeats){

  //   for (var i = 0; i < countSeats; i++) {
  //     var p = createSeat(0,i);
  //   }
  //   console.log(p);

  // }

  function fillReservedSeats(props) {

   

  }

  return (
    <div className="selectSeats">
      <div class="container">
        <div class="screen"></div>
        <div class="row"> 
          <div class="seat" id={0}></div>
          <div class="seat" id={1}></div>
          <div class="seat" id={2}></div>
          <div class="seat" id={3}></div>
          <div class="seat" id={4}></div>
          <div class="seat" id={5}></div>
          <div class="seat" id={6}></div>
          <div class="seat" id={7}></div>
        </div>
        <div class="row">
          <div class="seat" id={8}></div>
          <div class="seat" id={9}></div>
          <div class="seat" id={10}></div>
          <div class="seat" id={11}></div>
          <div class="seat" id={12}></div>
          <div class="seat occupied" id={13}></div>
          <div class="seat occupied" id={14}></div>
          <div class="seat" id={15}></div>
          <div class="seat" id={16}></div>
          <div class="seat" id={17}></div>
        </div>

        <div class="row">
          <div class="seat" id={18}></div>
          <div class="seat" id={19}></div>
          <div class="seat" id={20}></div>
          <div class="seat" id={21}></div>
          <div class="seat" id={22}></div>
          <div class="seat" id={23}></div>
          <div class="seat occupied" id={24}></div>
          <div class="seat occupied" id={25}></div>
        </div>

        <div class="row">
          <div class="seat" id={26}></div>
          <div class="seat" id={27}></div>
          <div class="seat" id={28}></div>
          <div class="seat" id={29}></div>
          <div class="seat" id={30}></div>
          <div class="seat" id={31}></div>
          <div class="seat" id={32}></div>
          <div class="seat" id={33}></div>
        </div>

        <div class="row">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat occupied"></div>
          <div class="seat occupied"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>

        <div class="row">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat occupied"></div>
          <div class="seat occupied"></div>
          <div class="seat occupied"></div>
          <div class="seat"></div>
        </div>
      </div>

      <p class="text">
        You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
      </p>
    </div>
      
  );
}

export default selectSeats;
