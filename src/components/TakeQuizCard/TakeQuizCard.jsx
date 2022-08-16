import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TakeQuizCard() {
  const questionNumber = 50;
  const questionDetails = " WASSCE 2013 Q23";
  return (
    <Card>
      <Card.Header>
        <h4
          style={{
            float: "right",
          }}
        >
          {questionDetails}
        </h4>
        <h4>Question : {questionNumber}</h4>

        <hr style={{ border: "solid white 1px" }} />
      </Card.Header>
      <Card.Body>
        <Card.Text>
          The process by which plants manufacture their own food using energy
          from the sun, carbondioxide from the atmosphere, water and mineral
          salts from the soil is called?
        </Card.Text>
        <h4>
          <Button variant="primary" size="sm">
            A
          </Button>{" "}
          Respiration
        </h4>
        <h4>
          <Button variant="primary" size="sm">
            B
          </Button>{" "}
          Photosynthesis
        </h4>
        <h4>
          <Button variant="primary" size="sm">
            C
          </Button>{" "}
          Reproductiion
        </h4>
        <h4>
          <Button variant="primary" size="sm">
            D
          </Button>{" "}
          Excretion
        </h4>
      </Card.Body>
    </Card>
  );
}

export default TakeQuizCard;
