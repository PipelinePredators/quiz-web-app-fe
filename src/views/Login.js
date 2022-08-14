import { Button, Form, Col, Row, Input, FormText } from "reactstrap";
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Axios from "axios";

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * It's a function that makes a get request to the server, and then logs the value or reason to the
   * console.
   */
  const signIn = () => {
    Axios.get("http://localhost:8080/student/api/login_student", { params: { email: email, password: password } }).then({
      onfulfilled: (value) => {
        console.log('This is the value', value);
      },
      onrejected: (reason) => {
        console.log('This is the reason', reason);
      }
    })
  }

  return (
    <Row className="mx-0">
      <Col lg={4}></Col>
      <Col lg={4} xs={12}>
        <Form className="form d-flex flex-column justify-content-center px-4">
          <h2>E-high logo</h2> {/*Place a logo of e-High app  */}
          <h1>Sign in E-high</h1>
          <Input type="email" name="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
          <Input className="my-3" type="password" placeholder=" Enter password" name="password" onChange={(event) => setPassword(event.target.value)} />
          <Button variant="dark" onClick={signIn}>
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