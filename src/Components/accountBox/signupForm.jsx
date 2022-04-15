import React, { useContext,useEffect, useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

// For Error Message
const [msg, setMsg] = useState("");

// For Toast
const [show, setShow] = useState(false);


  useEffect(()=>{
   
  })


  const Submit=()=>{
    console.log(name,email,pass)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name,email,pass })
  };
  fetch('http://localhost:8000/CreateUser', requestOptions)
  .then(response => response.json())
      .then(data => setMsg(data.message));

  }



  return (
    <>
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} />
        <Input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={()=>Submit()} type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>


    <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
            </Toast.Header>
            <Toast.Body>{msg}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </>
  );
}