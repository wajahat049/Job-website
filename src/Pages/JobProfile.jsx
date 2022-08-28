import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdWork, MdLocationPin, MdAccessTimeFilled, MdPaid } from 'react-icons/md'
import ProfileImage from "../Assests/profile.png"
import tick from "../Assests/tick.png"
import "../App.css"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

export default function Profile(props) {
  const history = useHistory();
  const [user, setUser] = React.useState({ name: "anonymous", email: "anonymous123@gmail.com" })

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("USER"))) {
      setUser(JSON.parse(localStorage.getItem("USER")))
    }
  }, [])




  return (
    <Container>
      <h3 className='about-heading'>PROFILE</h3>
      <Row>
        <Col >
          <Row style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <img style={{ width: "200px", height: "200px", marginBottom: "20px" }} src={ProfileImage} />
          </Row>
          <Row style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <p style={{ color: "#ff9902", fontWeight: "bold" }}>Wajahat Ahmed </p>
          </Row>
          <Row style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <p style={{ color: "#ff9902", fontWeight: "bold" }}> wajahatahmed049@gmail.com </p>
          </Row>
          <Row >
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eos soluta modi perspiciatis, dolorum ipsum, officia numquam tempore quibusdam debitis ullam exercitationem quasi, laboriosam eaque. Rerum nesciunt ea a quae? </p>
          </Row>
          <Row>
            <h5 style={{ color: "#142050", fontWeight: "bold", marginBottom: "15px" }}>SKILLS</h5>
            <p> <img style={{ width: "20px", height: "20px", }} src={tick} />  Python</p>
            <p> <img style={{ width: "20px", height: "20px", }} src={tick} />  Python</p>
            <p> <img style={{ width: "20px", height: "20px", }} src={tick} />  Python</p>
            <p> <img style={{ width: "20px", height: "20px", }} src={tick} />  Python</p>
          </Row>
        </Col>


        <Col>
          <Row>
            <h5 style={{ color: "#142050", fontWeight: "bold", marginBottom: "15px" , marginTop: "20px" }}>BASIC INFORMATION</h5>
          </Row>
          <Row>
            <Col>
              <Row  >
                <bold style={{ color: "grey" }}> Age </bold>
                <p style={{ color: "black" }}>20 </p>
              </Row>
              <Row  >
                <bold style={{ color: "grey" }}> CNIC </bold>
                <p style={{ color: "black" }}>200875359099 </p>
              </Row>
            </Col>

            <Col>
              <Row  >
                <bold style={{ color: "grey" }}> Education </bold>
                <p style={{ color: "black" }}>Bachlors </p>
              </Row>
              <Row  >
                <bold style={{ color: "grey" }}> Phone No. </bold>
                <p style={{ color: "black" }}>200875359099 </p>
              </Row>
            </Col>

            <Col>
              <Row  >
                <bold style={{ color: "grey" }}> Year Of Experience </bold>
                <p style={{ color: "black" }}>4 </p>
              </Row>
              <Row  >
                <bold style={{ color: "grey" }}> Location </bold>
                <p style={{ color: "black" }}>Karachi </p>
              </Row>
            </Col>
          </Row>

          <Row>
          <h5 style={{ color: "#142050", fontWeight: "bold", marginBottom: "15px", marginTop: "20px" }}>EXPERIENCE</h5>
          </Row>

        </Col>
      </Row>


    </Container>
  );
}