import CountDownTimer from "components/TakeQuizCard/CountDownTimer";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Container, Row, Col, Label, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { saveTakeQuizResults } from "services/QuizService";
import trophy from "../../assets/img/trophy.png"

function TakeQuizCard() {
  const quiz = useSelector(state => state.takeQuiz.quiz.data);
  const questionNumber = quiz.length;
  const questionDetails = "";
  const [quizNo, setQuizNo] = useState(0);
  const [checkedAnswer, setCheckedAnswer] = useState(0)
  const [enableNextButton, setEnableNextButton] = useState(false);
  const [enableFinishButton, setEnableFinishButton] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  const [modal, setModal] = useState(false);

  const [focusAfterClose, setFocusAfterClose] = useState(true);

  const [questionTimer, setQuestionTimer] = useState(1000);

  const toggle = () => setModal(!modal);

  const studentToken = useSelector((state) => state.student.token)

  /**
   * If the quizNo is less than the length of the quiz array, then check the selected option, increment
   * the quizNo, and uncheck all the radio buttons.
   */
  const handleNextButton = () => {
    if (quizNo < quiz.length - 1) {
      checkSelectedOption();
      setQuizNo(quizNo + 1);
      unCheckAllRadioButtons()
      setEnableNextButton(false);
    }
  }
  /**
   * If the value of the checked answer is equal to the value of the answer in the quiz object, then add
   * one to the current score.
   */

  const checkSelectedOption = () => {
    if (Number(checkedAnswer) === Number(quiz[quizNo].answer)) {
      setCurrentScore((currentScore) => currentScore + 1);
    }
  }

  /**
   * It takes all the radio buttons, checks if they're checked, and if they are, it unchecks them.
   */
  const unCheckAllRadioButtons = () => {
    const radioButtons = document.querySelectorAll('.optionsRadio');
    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        radioButton.checked = false
        return
      }
    })
  }

  /**
   * If the checkbox is checked, set the checkedAnswer state to the value of the checkbox, set the
   * enableNextButton state to true, and log the value of the checkbox.
   * @param event - the event object
   */
  const saveSelected = (event) => {
    if (event.target.checked) {
      setCheckedAnswer(event.target.value);
      (quizNo !== quiz.length - 1) ? setEnableNextButton(true) : setEnableFinishButton(true);
    }
  }

  /**
   * It checks if the user has selected an option, and if so, it saves the results.
   */
  const handleFinish = () => {
    checkSelectedOption();
    toggle();
  }


  /**
   * When the user clicks the submit button, the saveResults function is called, which calls the
   * saveTakeQuizResults function, which saves the user's results to the database, and then calls the
   * toggle function, which closes the modal.
   */
  const saveResults = () => {
    const subjectId = quiz[0].subject_id;
    saveTakeQuizResults({ studentToken, currentScore, questionNumber, subjectId }).then((value) => {
      toggle();
      window.location.reload()
    })
  }


  return (
    <Container>
      <CountDownTimer setModal={setModal} />
      <Card>
        <Card.Header>
          <h4
            style={{
              float: "right"
            }}
          >
            {questionDetails}
          </h4>
          <h4>Question: {quizNo + 1} of {questionNumber}</h4>
          <hr style={{ border: "solid white 1px" }} />
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={8} sm={12}>
              <Card.Text style={{ fontSize: '1.5em' }} className="mb-4">
                {quiz[quizNo].question}
              </Card.Text>
            </Col>
            <Col lg={3}>
              {quiz[quizNo].options.map((option, index) => {
                return (
                  <FormGroup check className="take-quiz-options mb-1" key={index}>
                    <Input
                      name="options"
                      type="radio"
                      className="optionsRadio"
                      value={index + 1}
                      id={option} onChange={(event) => saveSelected(event)} />
                    {' '}
                    <Label check for={option} className="p-3 rounded w-100 text-center">
                      {option}
                    </Label>
                  </FormGroup>
                );
              })}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={12} sm={12} className="d-flex justify-content-end">
              {(quizNo < quiz.length - 1) ? <Button disabled={!enableNextButton} onClick={() => handleNextButton()}>Next</Button>
                : <Button disabled={!enableFinishButton} onClick={() => handleFinish()}>Finish</Button>}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal isOpen={modal} returnFocusAfterClose={focusAfterClose}>
        <ModalBody className="d-flex flex-column align-items-center">
          <h2 className="text-muted">Congratulations</h2>
          <img className="w-50" src={trophy} alt="Trophy" />
          <p>You scored {currentScore} out of {quiz.length}</p>
        </ModalBody>
        <ModalFooter className="p-2 d-flex justify-content-end">
          <Button color="primary" onClick={() => { saveResults() }}>
            Save Results
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default TakeQuizCard;
