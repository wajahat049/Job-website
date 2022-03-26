import React, { useContext,useEffect, useState } from "react";
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

  }



  return (
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
  );
}