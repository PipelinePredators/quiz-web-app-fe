import React, { useState } from "react";
import { Row, Col, Button, Card, CardTitle, CardText, Modal, ModalBody, ModalFooter, Container } from 'reactstrap'
import { Form } from "react-bootstrap";

function TakeQuizRules(props) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal)

  return (
    <Container>
      <Row>
        <Col>
          <Card
            body
            className="my-2">
            <CardTitle tag="h3">
              Welcome to e-examination room.
            </CardTitle>
            <CardText>
              This forum allows you to answer past questions on the various subjects
              taught in senior high school. <br />
              Your results would be displayed after the time ellapses. <br />
              Note that the time duration is the same as the West Africa Examination
              time schedule for examination questions.
            </CardText>
            <hr />
            <CardTitle tag="h5" classname="my-5">
              READ THE FOLLOWING INSTRUCTIONS CAREFULLY BEFORE STARTING THE QUIZ.
            </CardTitle>
            <CardText>
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
            </CardText>
            <Button color="primary" onClick={toggle}>
              Take quiz Now
            </Button>
          </Card>
        </Col>
      </Row>
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...props}>
        <ModalBody>
          <Form className="form justify-content-center pt-0">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Select Number of Questions.{" "}
              </Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  name="questions"
                  label="20 Questions "
                  checked
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
          </Form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-end p-2">
          <Button color="primary mx-4" onClick={toggle}>
            Close
          </Button>
          <Button color="secondary" onClick={props.handleClick}>
            Start Quiz
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default TakeQuizRules;
