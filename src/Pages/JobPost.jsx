import React, { useEffect, useState } from 'react';
import '../App.css'
import {Form,Button,Row,Col} from "react-bootstrap"

const JobPost = () => {

    const [jobTitle,setJobTitle] = useState("")
    const [jobDescription,setJobDescription] = useState("")
    const [jobLocation,setJobLocation] = useState("")
    const [jobTimings,setJobTimings] = useState("")
    const [jobType,setJobType] = useState("")
    const [jobCategory,setJobCategory] = useState("")
    const [jobRequirements,setJobRequirements] = useState("")
    const [jobVacancies,setJobVacancies] = useState("")
    const [companyName,setCompanyName] = useState("")
    const [companyDescription,setCompanyDescription] = useState("")
    const [companyLocation,setCompanyLocation] = useState("")
    const [companyWebsite,setCompanyWebsite] = useState("")
    const [companyLogo,setCompanyLogo] = useState("")
    const [fieldSize,setFieldSize] = useState(60)

    useEffect(()=>{
        if(window.screen.width<600){
            setFieldSize(35)

        }

    },[window.screen.width])


    const SubmitJob=()=>{
        
        // if(jobTitle != "" && jobTitle != "" && jobTitle != "" && jobTitle != "" && jobTitle != ""
        // && jobTitle != "" && jobTitle != "" && jobTitle != "" && jobTitle != "" && jobTitle != ""
        // && jobTitle != "" && jobTitle != "" && jobTitle != "" && jobTitle != "" )
            // console.log(email, pass)
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ jobTitle, jobDescription,jobLocation,jobTimings,jobType,jobCategory,
            jobRequirements,jobVacancies,companyName,companyDescription,companyLocation,companyWebsite,companyLogo
            })
            };
            // setShow(true)
            fetch('http://localhost:8001/PostJob', requestOptions)
              .then(response => response.json())
            //   .then(data => setMsg(data.message));
    }

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
      <input required onChange={(e)=>setJobTitle(e.target.value)} size={fieldSize} type="text" placeholder='Enter job title' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB DESCRIPTION
      </Col>
      <Col sm={9}>
      <textarea required  onChange={(e)=>setJobDescription(e.target.value)} rows={4} cols={30} type="text" placeholder='Enter job description' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB LOCATION
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setJobLocation(e.target.value)} size={fieldSize} type="text" placeholder='Enter job location' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB TIMINGS
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setJobTimings(e.target.value)} size={fieldSize} type="text" placeholder='Enter job timings' />
      </Col>
  </Row>


  <Row className='form-row'>
      <Col sm={3}>
            JOB TYPE
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setJobType(e.target.value)} size={fieldSize} type="text" placeholder='Enter job type' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB CATEGORY
      </Col>
      <Col sm={9}>
      <select required  onChange={(e)=>setJobCategory(e.target.value)} name="cars" id="cars">
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
      <input required  onChange={(e)=>setJobRequirements(e.target.value)} size={fieldSize} type="text" placeholder='Enter job requirements' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            VACANCIES AVAILABLE
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setJobVacancies(e.target.value)} size={fieldSize} type="number" placeholder='Enter no. of vacancies' />
      </Col>
  </Row>


  <h5 className='about-heading'>COMPANY DETAILS</h5>

  
  <Row className='form-row'>
      <Col sm={3}>
            COMPANY NAME
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setCompanyName(e.target.value)} size={fieldSize} type="text" placeholder='Enter company name' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            COMPANY DESCRIPTION
      </Col>
      <Col sm={9}>
      <textarea required  onChange={(e)=>setCompanyDescription(e.target.value)} rows={4} cols={30} type="text" placeholder='Enter company description' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            COMPANY LOCATION
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setCompanyLocation(e.target.value)} size={fieldSize} type="text" placeholder='Enter company location' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            COMPANY WEBSITE
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setCompanyWebsite(e.target.value)} size={fieldSize} type="text" placeholder='https://' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            COMPANY LOGO
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setCompanyLogo(e.target.value)} size={fieldSize} type="file" />
      </Col>
  </Row>
  <Button onClick={()=>SubmitJob()} type="submit" style={{backgroundColor:"#ff9902",height:"70%"}} variant="flat" >
    Submit
  </Button>
</Form>
        </div>
    )
}

export default JobPost;