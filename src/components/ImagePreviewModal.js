import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ImagePreviewModal({handleClose, show, img}) {

  return (
    <>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuestro Trabajo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} width='100%' alt='enlarged image'/>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Link to='/contact'>
            <Button style={{margin: '1rem'}} variant="primary" onClick={handleClose}>
              Reservar una Consulta
            </Button>
          </Link>

          <Button style={{margin: '1rem'}} variant="primary" onClick={handleClose}>
            Atras
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImagePreviewModal;