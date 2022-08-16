import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function TakeQuiz() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Take quiz
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "large", lineHeight: "1.9rem" }}>
            {" "}
            READ THE FOLLOWING INSTRUCTIONS CAREFULLY BEFORE STARTING THE QUIZ.
            <hr style={{ border: " black thick solid " }} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ backgroundColor: "black" }}>
            <ol style={{ color: "red" }}>
              <li>Each question carries the same mark</li>
              <li>
                Indicate the number of questions you want to answer in the space
                provided .
              </li>
              <li>
                The number of questions must at least be more than 10 but not
                exceeding 40
              </li>
              <li> Select the subject. </li>
              <li>
                Click on attempt quiz to start the quiz or quit if not ready
              </li>
            </ol>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="Enter the number questions "
                autoFocus
              />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Select Subject</option>
              <option value={""}> English</option>
              <option value={""}>Mathematics</option>
              <option value={""}>Integrated Science</option>
              <option value={""}>Social Studies</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quit
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Attempt Quiz!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TakeQuiz;
