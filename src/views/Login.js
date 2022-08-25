import { Button, Form, Col, Row, Input, FormText } from "reactstrap";
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { signIn } from "services/StudentService";
import { useAuth } from "Guards/Auth";

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const history = useHistory();

  
/**
 * Signin() is a function that calls signIn() which is a function that returns a promise that calls
 * dispatch() which is a function that calls setStudentState() which is a function that returns a
 * value.
 */
  const signin = () => {
    signIn(email, password).then((value) => {
      auth.login(value);
      history.push('./')
    });
  };


  return (
    <Row className="mx-0">
      <Col lg={4}></Col>
      <Col lg={4} xs={12}>
        <Form className="form d-flex flex-column justify-content-center px-4">
          <h2>E-high logo</h2> {/*Place a logo of e-High app  */}
          <h1>Sign in E-high</h1>
          <Input type="email" name="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
          <Input className="my-3" type="password" placeholder=" Enter password" name="password" onChange={(event) => setPassword(event.target.value)} />
          <Button variant="dark" onClick={signin}>
            Log in
          </Button>
          <br />
          <Button variant="dark">
            Forgot password?
          </Button>
          <FormText className="text-muted">
            Don't have an account? <Link to={'/register'}><span onClick={props.handleClick}>Sign up</span></Link>
          </FormText>
        </Form>
      </Col>
      <Col lg={4}></Col>
    </Row>
  )
}

export default Login