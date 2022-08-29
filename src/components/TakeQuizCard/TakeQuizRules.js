import React, { useState } from "react";
import { Row, Col, Button, Card, CardTitle, CardText, Modal, ModalBody, ModalFooter, Container } from 'reactstrap'
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTakeQuizzes } from "services/QuizService";
import { setTakeQuizState } from "Redux/TakeQuizSlice";

function TakeQuizRules({ handleClick }) {

  const [modal, setModal] = useState(false);
  const { subjectParam } = useParams();
  const [questionNumber, setQuestionNumber] = useState(20);

  /* Getting the subjects from the redux store. */
  const subjects = useSelector((state) => state.subject.value);

  const toggle = () => setModal(!modal)

  const dispatch = useDispatch();


  /**
   * It takes the subject name from the URL and filters the subjects array to find the subject with the
   * same name. It then sets the state of the quizPreferences object with the subject id and the question
   * number.
   */
  const onStartClicked = () => {
    const filteredSubject = subjects.filter((subject) => {
      let subjectName = subjectParam.toLocaleLowerCase();
      let subjectNameObj = subject.name.toLocaleLowerCase();
      return subjectName === subjectNameObj;
    })

    const value = {
      subjectId: filteredSubject[0].id,
      questionNumber: questionNumber
    }

    /* Calling the getTakeQuizzes function which is a service function that makes an API call to the
    backend. It then dispatches the response to the redux store. */
    getTakeQuizzes({ subjectId: value.subjectId, questionNumber: value.questionNumber }).then(value => {
      dispatch(setTakeQuizState(value));
      handleClick();
    })

  }

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
            <CardTitle tag="h5" className="my-3">
              READ THE FOLLOWING INSTRUCTIONS CAREFULLY BEFORE STARTING THE QUIZ.
            </CardTitle>
            <CardText tag="ol">
              <li>
                <p>Indicate the number of questions you want to answer in the
                  space provided.</p>
              </li>
              <li>
                <p>The number of questions must be more than 20 but not exceeding
                  40</p>
              </li>
              <li><p> Each question carries equal mark</p> </li>
              <li>
                <p>Click on start to start the quiz or close if not ready</p>
              </li>
            </CardText>
            <Button color="primary" onClick={toggle}>
              Take quiz Now
            </Button>
          </Card>
        </Col>
      </Row>
      <Modal
        isOpen={modal}
        toggle={toggle}>
        <ModalBody>
          <Form className="form justify-content-center pt-0">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Select Number of Questions.{" "}
              </Form.Label>
              <div>
                <Form.Check onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  label="20 Questions"
                  value="20"
                  checked
                ></Form.Check>
                <Form.Check onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  value="25"
                  label="25 Questions"
                ></Form.Check>
                <Form.Check onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  value="30"
                  label="30 Questions "
                ></Form.Check>
                <Form.Check onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  value="35"
                  label="35 Questions"
                ></Form.Check>
                <Form.Check onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  value="40"
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
          <Button color="secondary" onClick={() => onStartClicked()}>
            Start Quiz
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default TakeQuizRules;
