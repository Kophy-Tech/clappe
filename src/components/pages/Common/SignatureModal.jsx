import React from "react";
// import { Button,Modal } from 'react-bootstrap/Modal';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Signature from "./SignaturePad";
export default function SignatureModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign here</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Signature/>
      </Modal.Body>
      {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
    </Modal>
  );
}
