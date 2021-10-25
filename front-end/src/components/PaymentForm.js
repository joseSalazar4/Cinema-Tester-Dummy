
import React,{useState} from 'react';
import './PaymentForm.css';

function PaymentForm({ SendInfo, info }) {

    const movieTitle = info.movieTitle;
    const seatsArray = info.seatsArray;
    const total = info.total;


    const [details, setDetails] = useState({title: movieTitle, seats: seatsArray, total: total, name:"", email:""});

    const submitHandler = e => {
        e.preventDefault();

        SendInfo(details);
    }

    function NumberList(props) {
        const numbers = props;
        const listItems = numbers.map((number) =>
          <li>Asiento: {number}</li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }



    console.log(seatsArray)
    return (
        <div className="paymentForm">
            <form onSubmit={submitHandler} >
                <div className="form-inner">
                    {/* ERROR */}
                    <div className="form-group">
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electronico: </label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                </div>
                <h5>Película: {details.movieTitle}</h5>
                <h5>Asientos seleccionados</h5>
                {NumberList(seatsArray)}
                <h5>Total a pagar: {total} colones</h5>
                <input type="submit" value="Comprar" />
            </form>
        </div>
    );
}
  

export default PaymentForm;