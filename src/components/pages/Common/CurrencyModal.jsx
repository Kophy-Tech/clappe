import React from "react";
// import { Button,Modal } from 'react-bootstrap/Modal';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function CurrencyModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Currency</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          
        <div className="mb-3">
                      <select id="Select" className="form-select">
                        <option> Select a Currency</option>
                        <option>AUD</option>
                     
                      </select>
                    </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
    </Modal>
  );
}
