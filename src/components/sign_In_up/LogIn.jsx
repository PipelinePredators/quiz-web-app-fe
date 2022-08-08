import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./LogIn.css";

function LogIn(props) {
  return (
    <Form className="form justify-content-center">
      <h2>E-high logo</h2> {/*Place a logo of e-High app  */}
      <h1>Sign in E-high</h1>
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder=" Enter password"
          name="password"
        />
      </Form.Group>
      <Button className="button mb-3" variant="dark">
        Log in
      </Button>
      <br />
      <Button className="button mb-5" variant="dark">
        Forgot password?
      </Button>
      <Form.Text className="text-muted">
        Don't have an account? <span onClick={props.handleClick}>Sign up</span>
      </Form.Text>
    </Form>
  );
}

export default LogIn;
