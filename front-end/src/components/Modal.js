
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Seats from './pages/Seats';
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered >
        <Modal.Header  closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movieTitle}
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.movieType}</h4>
          <p> {props.movieBody} </p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Link style={{backgroundcolor: "red"}}  
          to={{
            pathname: "/seats",
            state: {
              title: props.movieTitle,
              seats: props.seats
            }
          }}>Seleccionar Asientos</Link>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal; 

  