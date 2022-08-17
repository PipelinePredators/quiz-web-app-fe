import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function TakeQuizRules(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Take quiz
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "large", lineHeight: "1.9rem" }}>
            {" "}
            READ THE FOLLOWING INSTRUCTIONS CAREFULLY BEFORE STARTING THE QUIZ.
            <hr style={{ border: " black thick solid " }} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-dark">
            <h3 style={{ lineHeight: "2.5rem" }}>
              <ol>
                <li>Select the subject in the space provided below</li>
                <li>
                  Indicate the number of questions you want to answer in the
                  space provided .
                </li>
                <li>
                  The number of questions must at least be more than 10 but not
                  exceeding 40
                </li>
                <li> Each question carries the equal mark </li>
                <li>
                  Click on attempt quiz to start the quiz or quit if not ready
                </li>
              </ol>
            </h3>
          </div>
          <Form className="form justify-content-center">
            <Form.Group
              className="mb-3 bg-dark"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="number"
                placeholder="Enter the number questions you would like to take"
                autoFocus
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              className=" mb-3 bg-secondary"
            >
              <option>Select Subject</option>
              <option value={""}> English Language</option>
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
          <Button variant="primary" onClick={props.handleClick}>
            Attempt Quiz!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TakeQuizRules;
