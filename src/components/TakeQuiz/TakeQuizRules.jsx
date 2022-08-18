import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function TakeQuizRules(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        {" "}
        <h3>Welcome to e-examination room. </h3>
        <h4 style={{ lineHeight: "1.8rem" }}>
          This forum allows you to answer past questions on the various subjects
          taught in senior high school. <br />
          Your results would be displayed after the time ellapses. <br />
          Note that the time duration is the same as the West Africa Examination
          time schedule for examination questions.
          <br />
        </h4>{" "}
      </div>
      <Button variant="primary" onClick={handleShow}>
        Take quiz Now
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
            <h4 style={{ lineHeight: "2.5rem" }}>
              <ol>
                <li>Select the subject in the space provided below</li>
                <li>
                  Indicate the number of questions you want to answer in the
                  space provided .
                </li>
                <li>
                  The number of questions must be more than 20 but not exceeding
                  40
                </li>
                <li> Each question carries equal mark </li>
                <li>
                  Click on attempt quiz to start the quiz or quit if not ready
                </li>
              </ol>
            </h4>
          </div>
          <Form className="form justify-content-center">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "20px" }}>
                Select Number of Questions.{" "}
              </Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  name="questions"
                  label="20 Questions "
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="questions"
                  label="25 Questions"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="questions"
                  label="30 Questions "
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="questions"
                  label="35 Questions"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="questions"
                  label="40 Questions "
                ></Form.Check>
              </div>
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              className=" mb-3 bg-secondary"
              required
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
          <Button variant="primary" onClick={props.handleClick} type="submit">
            Attempt Quiz!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TakeQuizRules;
