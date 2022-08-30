import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdWork, MdLocationPin, MdAccessTimeFilled, MdPaid, MdAddCircle, MdAddBox, MdAdd, MdModeEdit } from 'react-icons/md'
import { BiMessageRoundedAdd } from 'react-icons/bi';
import ProfileImage from "../Assests/profile.png"
import tick from "../Assests/tick.png"
import "../App.css"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom";
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Snackbar from '@mui/material/Snackbar';

import { connect } from "react-redux";

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function Profile(props) {
  const history = useHistory();
  const [user, setUser] = React.useState({ name: "anonymous", email: "anonymous123@gmail.com" })
  const [addExperience, setAddExperience] = React.useState(false);
  const [addSkill, setAddSkill] = React.useState(false);


  var userInfo = props.userInfo;

  // states for profile API
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [yearsOfExperience, setYearsOfExperience] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [experience, setExperience] = React.useState([]);
  const [allowAlerts, setAllowAlerts] = React.useState("");
  const [skills, setSkill] = React.useState([]);
  const [about, setAbout] = React.useState("");
  const [cnic, setCNIC] = React.useState("");


  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("USER"))) {
      setUser(JSON.parse(localStorage.getItem("USER")))
    }
  }, [])

  function getProfile() {
    fetch('http://localhost:8001/UserProfile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userInfo.email })
    })
      .then(response => response.json())
      .then(data => {
        console.log("get profile data", data)
        setAge(data.result[0].age)
        setAbout(data.result[0].about)
        setName(data.result[0].name)
        setCNIC(data.result[0].cnic)
        setLocation(data.result[0].location)
        setEmail(data.result[0].email)
        setPhoneNo(data.result[0].phoneNo)
        setEducation(data.result[0].education)
        setYearsOfExperience(data.result[0].yearsOfExperience)
        setExperience(data.result[0].experience)
        setSkill(data.result[0].skills)
      }
      );
  }

  // job profile get API
  React.useEffect(() => {
    getProfile()
  }, [])

  function updateChanges() {
    fetch('http://localhost:8001/EditProfile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, age, experience, skills, cnic, about, location, education, phoneNo, yearsOfExperience })
    })
      .then(response => response.json())
      .then(data => {
        console.log("updated data", data)
      }
      );
    setOpen(true);
    getProfile();
  }


  return (
    <Container fluid>
      {/* snackbar show */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully Updated
        </Alert>
      </Snackbar>
      <Row>
        <Col sm={11}>
          <h3 className='about-heading'>PROFILE</h3>
        </Col>
        <Col sm={1} style={{ justifyContent: "right", alignItems: "right", textAlign: "right", }}>
          <Button onClick={() => updateChanges()} style={{ marginTop: "50%", padding: "3px 15px 3px 15px", backgroundColor: "#142050", border: "2px solid #142050" }}>Save</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={5} style={{ marginLeft: "5%" }}>
          <Row style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <img style={{ width: "200px", height: "200px", marginBottom: "20px" }} src={ProfileImage} />
          </Row>
          <Row>
            <Input onChange={(e) => setName(e.target.value)} value={name} color='warning' />
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Input onChange={(e) => setEmail(e.target.value)} value={email} color='warning' />
          </Row>
          <Row style={{ margin: "20px 0px 30px -10px" }}>
            <TextField onChange={(e) => setAbout(e.target.value)} value={about} color='warning' fullWidth label="About" id="fullWidth" />
          </Row>

          <Row>
            <Col sm={4}>
              <h5 style={{ color: "#142050", fontWeight: "bold", marginBottom: "15px" }}>SKILLS</h5>
            </Col>
            <Col sm={4}>
              <BiMessageRoundedAdd onClick={() => setAddSkill(!addSkill)} color='#ff9902' size={30} style={{ marginLeft: "-20%", cursor: "pointer" }} />
            </Col>
          </Row>

          <Row>
            {
              addSkill ?
                <Row>
                  <Col sm={6}>
                    <input className='profile-field' onChange={(e) => setAddSkill(e.target.value)} type="text" placeholder='Enter Job Title' />
                  </Col>
                  <Col sm={6}>
                    <Button style={{ marginBottom: "5%", padding: "3px 15px 3px 15px", backgroundColor: "#142050", border: "2px solid #142050" }}>Add</Button>
                  </Col>
                </Row>
                : null
            }
          </Row>
          <Row>
            {
              skills.length != 0 ?
                skills.map((e) => {
                  return (
                    <p> <img style={{ width: "20px", height: "20px", }} src={tick} /> {e}</p>
                  )
                })
                :
                null
            }
          </Row>
        </Col>

        <Col sm={1}>
        </Col>


        <Col sm={5}>
          <Row style={{ marginBottom: "20px", }}>
            <h5 className='JobProfile-heading'>BASIC INFORMATION</h5>
          </Row>
          <Row style={{ margin: "5px 0px 20px 5px", }}>
            <Col>
              <Row style={{ marginBottom: "20px", }}>
                <TextField
                  label="Age"
                  variant="standard"
                  color="warning"
                  focused
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Row>
              <Row style={{ marginBottom: "20px", }}>
                <TextField
                  label="CNIC"
                  variant="standard"
                  color="warning"
                  focused
                  value={cnic}
                  onChange={(e) => setCNIC(e.target.value)}
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
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                />
              </Row>
              <Row  >
                <TextField
                  label="Phone No."
                  variant="standard"
                  color="warning"
                  focused
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
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
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </Row>
              <Row  >
                <TextField
                  label="Location"
                  variant="standard"
                  color="warning"
                  focused
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
              <h5 className='JobProfile-heading'>EXPERIENCE</h5>
            </Col>
            <Col sm={4}>
              <BiMessageRoundedAdd onClick={() => setAddExperience(!addExperience)} color='#ff9902' size={30} style={{ marginTop: "16%", marginLeft: "-10%", cursor: "pointer" }} />
            </Col>
          </Row>
          <Row>
            {
              addExperience ?
                <Row>
                  <Col sm={6}>
                    <input className='profile-field' required
                      onChange={(e) => setExperience(e.target.value)} type="text" placeholder='Enter Job Title' />
                  </Col>
                  <Col sm={6}>
                    <input className='profile-field' required onChange={(e) => console.log(e.target.value)} type="date" />{" "} to {"  "}
                    <input className='profile-field' required onChange={(e) => console.log(e.target.value)} type="date" />
                  </Col>
                  <Col>
                    <Button style={{ marginBottom: "5%", padding: "3px 15px 3px 15px", marginTop: "-10%", backgroundColor: "#142050", border: "2px solid #142050" }}>Add</Button>
                  </Col>
                </Row>
                : null
            }
          </Row>
          <Row>
            {
              experience.length != 0 ?
                experience.map((e) => {
                  return (
                    <p style={{ color: "#ff9902", fontWeight: "bold" }}> <img style={{ width: "20px", height: "20px", }} src={tick} />  {e.name}
                      <span style={{ color: "gray", fontWeight: "normal", fontSize: "14px" }}>
                        <p className='marginLeft'>{e.startDate} - {e.endDate}</p>
                      </span>
                    </p>
                  )
                })
                :
                null
            }
          </Row>



          <Row style={{ marginBottom: "50px", marginTop: "30px" }}>
            <h5 className='JobProfile-heading'>Allow for Job notification</h5>
            <Switch color="warning" />
          </Row>

        </Col>

      </Row>


    </Container>
  );
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, null)(Profile);
