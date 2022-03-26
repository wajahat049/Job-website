import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdWork,MdLocationPin,MdAccessTimeFilled } from 'react-icons/md'

import "../App.css"
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import {Link,useHistory } from "react-router-dom"

export default function JobCard() {
  const history = useHistory();
  return (
    <Container className="JobCard">
      <Row>
          <Col >
          <Row>
              <h3>Job Title</h3>
          </Row>
          <Row >
          <Col xs={2} sm={1}  className="JobCardIcon"> <MdLocationPin/></Col>
              <Col>Location</Col>
              
          </Row>
          <Row>
              <Col  xs={2} sm={1} className="JobCardIcon"><MdWork/></Col>
              <Col>Type of Work</Col>
               
          </Row>
          <Row>
          <Col  xs={2} sm={1} className="JobCardIcon"><MdAccessTimeFilled/></Col>
              <Col>Timing</Col>
               
          </Row>
          </Col>
          <Col className="btnCol">
    
  <Button className='Job-time-card-btn' variant="flat">
    Full Time
  </Button>   
  <br />
  <Link to="/Job">
  <Button  className='Job-card-btn' variant="flat">
    Apply
  </Button>
  </Link>
          </Col>
      </Row>
    </Container>
  );
}