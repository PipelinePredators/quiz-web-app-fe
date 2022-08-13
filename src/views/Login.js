import { Button, Form, FormGroup, Input, FormText } from "reactstrap";
import {Link} from 'react-router-dom'
import React from 'react'

const Login = (props) => {
  return (
    <Form className="form justify-content-center">
      <h2>E-high logo</h2> {/*Place a logo of e-High app  */}
      <h1>Sign in E-high</h1>
      <FormGroup className="mb-3  " controlId="formBasicEmail">
        <Input type="email" name="email" placeholder="Enter email" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicPassword">
        <Input
          type="password"
          placeholder=" Enter password"
          name="password"
        />
      </FormGroup>
      <Button className="button mb-3" variant="dark">
        Log in
      </Button>
      <br />
      <Button className="button mb-5" variant="dark">
        Forgot password?
      </Button>
      <FormText className="text-muted">
        Don't have an account? <Link to={'/register'}><span onClick={props.handleClick}>Sign up</span></Link>
      </FormText>
    </Form>
  )
}

export default Login