
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
          <li>Asiento: {(number*1+1)}</li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }

    return (
        <form onSubmit={submitHandler} >
            <div className="form-inner">
                <div className="form-group">
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electronico: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
             
                <div className="detalles">
                    <h4>Detalles de la compra</h4>
                    <h5>Nombre: {details.title}</h5>
                    <h5>Asientos seleccionados</h5>
                    {NumberList(seatsArray)}
                    <h5>Total a pagar: {total} colones</h5>
                </div>
            <input type="submit" value="Pagar"/>
            </div>
        </form>
    );
}
  

export default PaymentForm;