import React, { useEffect, useState } from 'react';
import '../App.css'
import {Form,Button,Row,Col} from "react-bootstrap"

const JobPost = () => {

    const [fieldSize,setFieldSize] = useState(60)

    useEffect(()=>{
        if(window.screen.width<600){
            setFieldSize(35)

        }

    },[window.screen.width])

    return (
        <div className='Container job-post'>
            <div className='Container'>
            <header>
                <div className='HeaderText'>
                    <div >
                        <h1>POST A JOB</h1>
                        <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                    </div>
                </div>
            </header>
        </div>
            {console.log("AAS",window.screen.width)}
            {/* <div>
                <h1 className='about-heading'>POST A JOB</h1>
            </div> */}
            <Form className='post-form'>
            <h5 className='about-heading'>JOB DETAILS</h5>

  <Row className='form-row'>
      <Col  sm={3}>
            JOB TITLE
      </Col>
      <Col   sm={9}>
      <input size={fieldSize} type="text" placeholder='Enter job title' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB DESCRIPTION
      </Col>
      <Col sm={9}>
      <textarea rows={4} cols={30} type="text" placeholder='Enter job description' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB LOCATION
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="text" placeholder='Enter job location' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB TIMINGS
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="text" placeholder='Enter job timings' />
      </Col>
  </Row>


  <Row className='form-row'>
      <Col sm={3}>
            JOB TYPE
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="text" placeholder='Enter job type' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB CATEGORY
      </Col>
      <Col sm={9}>
      <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB REQUIREMENTS
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="text" placeholder='Enter job requirements' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            VACANCIES AVAILABLE
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="number" placeholder='Enter no. of vacancies' />
      </Col>
  </Row>


  <h5 className='about-heading'>COMPANY DETAILS</h5>

  
  <Row className='form-row'>
      <Col sm={3}>
            COMPANY NAME
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="text" placeholder='Enter company name' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            COMPANY DESCRIPTION
      </Col>
      <Col sm={9}>
      <textarea rows={4} cols={30} type="text" placeholder='Enter company description' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            COMPANY LOCATION
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="text" placeholder='Enter company location' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            COMPANY WEBSITE
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="text" placeholder='https://' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            COMPANY LOGO
      </Col>
      <Col sm={9}>
      <input size={fieldSize} type="file" />
      </Col>
  </Row>
  <Button style={{backgroundColor:"#ff9902",height:"70%"}} variant="flat" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default JobPost;