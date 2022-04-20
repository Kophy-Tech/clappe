import React from "react";
// import { Button,Modal } from 'react-bootstrap/Modal';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function BrowseGallery(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Choose a Template</Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <div> 

<img 
      src="https://www.freshbooks.com/wp-content/uploads/invoice-template-blue-985x1280.png"
      alt="new"
      height='200px'
      width='150px'
      />
     </div>

     <button className="btn btn-primary my-2"> Proceed </button>
      </Modal.Body>
      {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
    </Modal>
  );
}
