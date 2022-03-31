import React from "react";
// import { Button,Modal } from 'react-bootstrap/Modal';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Item name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Qty</label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Amount </label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Total </label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Tax </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Actions </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
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
