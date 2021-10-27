
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
        <div className="payment">
            <form onSubmit={submitHandler} >
                <div className="form-inner">
                    <div className="form-group">
                        <h5 className="name">Nombre:</h5>
                        <div>
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <h5 className="name">Correo Electronico:</h5>
                        <div>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                        </div>               
                    </div>

                    
                    <div className="detalles">
                        <h4 className="td">Detalles de la compra</h4>
                        <h5 className="nd">{details.title}</h5>
                        <h5 className="ad">Asientos seleccionados</h5>
                        {NumberList(seatsArray)}
                        <h5>Total a pagar: {total} colones</h5>
                    </div>
                <input type="submit" value="Pagar"/>
                </div>
            </form>
        </div>
    );
}
  

export default PaymentForm;