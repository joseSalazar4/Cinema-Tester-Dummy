import React, {useState} from 'react';
import '../../App.css';
import PaymentForm from '../PaymentForm';
import axios from 'axios'



const api = axios.create({
  baseURL: 'http://localhost:3001/movies'
})


export default function BuyTickets() {
  
  const seatsArray = [13,14,15];
  const total = seatsArray.length*3000;

  const info = {
    movieTitle : "StarWars",
    seatsArray : seatsArray,
    total : total
  }
  const [error, setError] = useState("");

  const SendInfo = details => {
    console.log(details);

    // Aca se manda al back por medio de details

    api.post('/buy', details)
    .then(moviesRes => {
      console.log("compra completada");
    })
      .catch(() => {
        console.log("Error")
      })



  }

  return (
      <PaymentForm SendInfo={SendInfo} info={info}  />
  );

}

/* {(user.email != "") ? (
    <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>logout</button>
    </div>
) : (
  <PaymentForm Login={sendData} error={error} />
)} */
