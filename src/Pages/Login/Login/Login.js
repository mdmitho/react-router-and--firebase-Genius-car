import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () =>{ 
    const emailRef= useRef('') 
    const passwordRef = useRef('')
    const Navigate = useNavigate()

const handleSubmit = event =>{
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password);
}
const navigateRegister = (event) =>{
    Navigate('/register')
}

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center">Please login</h1>
      <div className="mt-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>New to Genius Car ? <span className="text-danger" onClick={navigateRegister}>Please Register</span></p>
      </div>
    </div>
  );
};

export default Login;
