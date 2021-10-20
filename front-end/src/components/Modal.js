
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
          <h3> {props.movieStartTime} </h3>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal; 

  