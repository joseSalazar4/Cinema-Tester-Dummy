import React from 'react';
import Button from 'react-bootstrap/Button'
import MyVerticallyCenteredModal from '../components/Modal.js'

function CardItem(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)} 
        movieTitle= {props.text}
        movieType= {props.label}/>
      <li className='cards__item'>
        <Button className='cards__item__link' onClick={() => setModalShow(true)}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img className='cards__item__img' alt='Travel' src={props.src} />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div> 
        </Button>
      </li>
    </>
  );
}


export default CardItem;
