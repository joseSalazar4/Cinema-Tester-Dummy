import React, {useState} from 'react';
import '../../App.css';
import PaymentForm from '../PaymentForm';
import axios from 'axios'



const api = axios.create({
  baseURL: 'http://localhost:3001'
})


export default function BuyTickets(props) {
  

  const movieTitle = props.location.state.title;
  const seatsArray = props.location.state.seats
  const total = seatsArray.length*3000;

  const info = {
    movieTitle : movieTitle,
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
      alert(moviesRes.data)
    })
      .catch((err) => {
        alert("Error realizando compra")
      })
  }

  return (
      <PaymentForm SendInfo={SendInfo} info={info}  />
  );

}

