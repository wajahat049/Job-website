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
import { Link, useHistory } from "react-router-dom";
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';


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
          <Row>
            <Input defaultValue={"Wajahat Ahmed"} color='warning'/>
          </Row>
          <Row style={{marginBottom: "10px"}}>
          <Input defaultValue={"wajahatahmed049@gmail.com"} color='warning'/>
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


        <Col style={{marginLeft:"50px"}}>
          <Row style={{ marginBottom: "20px", }}>
            <h5 className='JobProfile-heading'>BASIC INFORMATION</h5>
          </Row>
          <Row style={{margin: "5px 0px 20px 5px",}}>
            <Col>
              <Row style={{ marginBottom: "20px", }}>
                <TextField
                  label="Age"
                  variant="standard"
                  color="warning"
                  focused
                  defaultValue={20}
                />
              </Row>
              <Row style={{ marginBottom: "20px", }}>
                <TextField
                  label="CNIC"
                  variant="standard"
                  color="warning"
                  focused
                  defaultValue={'200875359099'}
                />
              </Row>
            </Col>

            <Col>
              <Row style={{ marginBottom: "20px", }} >
                <TextField
                  label="Year Of Experience"
                  variant="standard"
                  color="warning"
                  focused
                  defaultValue={3}
                />
              </Row>
              <Row  >
                <TextField
                  label="Phone No."
                  variant="standard"
                  color="warning"
                  focused
                  defaultValue={'03206853380'}
                />
              </Row>
            </Col>

            <Col>
              <Row style={{ marginBottom: "20px", }} >
                <TextField
                  label="Eduction"
                  variant="standard"
                  color="warning"
                  focused
                  defaultValue={'Bachlors'}
                />
              </Row>
              <Row  >
                <TextField
                  label="Location"
                  variant="standard"
                  color="warning"
                  focused
                  defaultValue={'Karachi'}
                />
              </Row>
            </Col>
          </Row>

          <Row>
            <h5 className='JobProfile-heading'>EXPERIENCE</h5>
          </Row>
          <Row>
            <p style={{ color: "#ff9902", fontWeight: "bold" }}> <img style={{ width: "20px", height: "20px", }} src={tick} />  React Developer
              <span style={{ color: "gray", fontWeight: "normal", fontSize: "14px" }}>
                <p className='marginLeft'>Apr 2022 - Aug 2022</p>
              </span>
            </p>
          </Row>
          <Row>
            <p style={{ color: "#ff9902", fontWeight: "bold" }}> <img style={{ width: "20px", height: "20px", }} src={tick} />  React Developer
              <span style={{ color: "gray", fontWeight: "normal", fontSize: "14px" }}>
                <p className='marginLeft'>Apr 2022 - Aug 2022</p>
              </span>
            </p>
          </Row>
          <Row>
            <p style={{ color: "#ff9902", fontWeight: "bold" }}> <img style={{ width: "20px", height: "20px", }} src={tick} />  React Developer
              <span style={{ color: "gray", fontWeight: "normal", fontSize: "14px" }}>
                <p className='marginLeft'>Apr 2022 - Aug 2022</p>
              </span>
            </p>
          </Row>
          <Row>
            <p style={{ color: "#ff9902", fontWeight: "bold" }}> <img style={{ width: "20px", height: "20px", }} src={tick} />  React Developer
              <span style={{ color: "gray", fontWeight: "normal", fontSize: "14px" }}>
                <p className='marginLeft'>Apr 2022 - Aug 2022</p>
              </span>
            </p>
          </Row>

          <Row style={{ marginBottom: "50px" }}>
            <h5 className='JobProfile-heading'>Allow for Job notification</h5>
            <Switch color="warning" />
          </Row>

        </Col>

      </Row>


    </Container>
  );
}