import React, { useEffect, useState } from 'react';
import '../App.css'
import {Form,Button,Row,Col} from "react-bootstrap"
import { storage } from '../Config/FirebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";

const JobPost = () => {

    const [jobTitle,setJobTitle] = useState("")
    const [jobDescription,setJobDescription] = useState("")
    const [jobLocation,setJobLocation] = useState("")
    const [jobStartTimings,setjobStartTimings] = useState("")
    const [jobEndTimings,setjobEndTimings] = useState("")
    const [jobTimings,setJobTimings] = useState("")
    const [jobType,setJobType] = useState("")
    const [jobCategory,setJobCategory] = useState("")
    const [jobRequirements,setJobRequirements] = useState("")
    const [jobEducation,setJobEducation] = useState("")
    const [jobExperience,setJobExperience] = useState("")
    const [jobVacancies,setJobVacancies] = useState("")
    const [jobSalary,setjobSalary] = useState(0)
    const [jobStartSalary,setjobStartSalary] = useState(0)
    const [jobEndSalary,setjobEndSalary] = useState(0)
    const [jobGender,setjobGender] = useState("")

    const [companyName,setCompanyName] = useState("")
    const [companyDescription,setCompanyDescription] = useState("")
    const [companyLocation,setCompanyLocation] = useState("")
    const [companyWebsite,setCompanyWebsite] = useState("")
    const [companyLogo,setCompanyLogo] = useState("")
    
    const [fieldSize,setFieldSize] = useState(60)
    const [disableBtn,setdisableBtn] = useState(true)


    useEffect(()=>{
        // console.log("JOB SALARY",jobStartSalary+" - "+jobEndSalary)
        if(jobStartTimings!="" && jobEndTimings !=""){
            setJobTimings(jobStartTimings+" - "+jobEndTimings)
        }

        if(jobStartSalary!=0 && jobEndSalary !=0){
        console.log("JOB SALARY","RS:"+jobStartSalary+" - "+"RS:"+jobEndSalary)
            setjobSalary("RS:"+jobStartSalary+" - "+"RS:"+jobEndSalary)
        }
        if(window.screen.width<600){
            setFieldSize(35)

        }

        if(jobTitle != "" && jobDescription != "" && jobLocation != "" && jobTimings != "" && jobType != ""
        && jobCategory != "" && jobEducation != "" && jobExperience != "" && jobRequirements!="" && jobVacancies != "" && companyName != "" && companyDescription != ""
     && companyLogo != "" && companyLocation!="" && companyWebsite!="" && jobStartTimings!="" && jobEndTimings!="" ){
         setdisableBtn(false)
     }
    },[window.screen.width,jobTitle, jobDescription,jobLocation,jobTimings,jobType,jobCategory,
        jobEducation,jobExperience,jobVacancies,companyName,companyLocation,companyWebsite,companyDescription,companyLogo
    ,jobStartTimings,jobEndTimings,jobStartSalary,jobEndSalary])

    const SubmitJob=(event)=>{
        
        console.log("JOB",jobTitle, jobDescription,jobLocation,jobTimings,jobType,jobCategory,
        jobEducation,jobExperience,jobVacancies,companyName,companyLocation,companyWebsite,companyDescription,companyLogo
    )
        event.preventDefault()
        if(jobTitle != "" && jobDescription != "" && jobLocation != "" && jobTimings != "" && jobType != ""
        && jobCategory != "" && jobEducation != "" && jobExperience != "" && jobRequirements!="" && jobVacancies != "" && companyName != "" && companyDescription != ""
     && companyLogo != "" && companyLocation!="" && companyWebsite!="" )
        {
            // console.log(email, pass)
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ jobTitle, jobDescription,jobLocation,jobTimings,jobType,jobCategory,
                jobEducation,jobExperience,jobVacancies,companyName,companyLocation,companyWebsite,companyDescription,companyLogo,jobRequirements
            })
            };
            // setShow(true)
            fetch('http://localhost:8001/PostJob', requestOptions)
              .then(response => response.json())
              .then(data => console.log(data));
        }
        else{
            console.log("FILL ALL")
        }
    }

const handleSubmit=(e)=>{
    e.preventDefault()
    const file = e.target.files[0]
console.log(e.target.files[0])
    if (!file) return;

    const storageRef = ref(storage, `CompanyLogos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
console.log("in progress")

        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
console.log("URL",downloadURL)
          setCompanyLogo(downloadURL)
        });
      }
    );

}

    return (
        <div className='Container job-post jobPost_bg'>
            <div className='Container '>
            {/* <header>
                <div className='HeaderText'>
                    <div >
                        <h1>POST A JOB</h1>
                        <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                    </div>
                </div>
            </header> */}
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
      <select className='Select' required  onChange={(e)=>setJobLocation(e.target.value)} name="cars" id="cars">
  <option value="Karachi">Karachi</option>
  <option value="Islamabad">Islamabad</option>
  <option value="Lahore">Lahore</option>

</select>
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB TIMINGS
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setjobStartTimings(e.target.value)} size={fieldSize} type="time" />{" "} to {"  "}
      <input required  onChange={(e)=>setjobEndTimings(e.target.value)} size={fieldSize} type="time" />

      </Col>
  </Row>


  <Row className='form-row'>
      <Col sm={3}>
            JOB TYPE
      </Col>
      <Col sm={9}>
      <select defaultValue={"Full Time"} className='Select'  required  onChange={(e)=>setJobType(e.target.value)} >
  <option value="Full Time">Full Time</option>
  <option value="Part Time">Part Time</option>
  <option value="Internship">Internship</option>


</select>
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB CATEGORY
      </Col>
      <Col sm={9}>
      <select defaultValue={"Engineer"} className='Select'  required  onChange={(e)=>setJobCategory(e.target.value)} name="cars" id="cars">
  <option value="Engineer">Engineer</option>
  <option value="Computer Engineer">Computer Engineer</option>
  <option value="Doctor">Doctor</option>
  <option value="Teacher">Teacher</option>
  <option value="Medicine">Medicine</option>
  <option value="Musician">Musician</option>
  <option value="Painter">Painter</option>
  <option value="Receptionist">Receptionist</option>
  <option value="Business">Business</option>
  <option value="Delivery">Delivery</option>
  <option value="Dentist">Dentist</option>
  <option value="Reporter">Reporter</option>


</select>
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            JOB REQUIREMENTS
      </Col>
      <Col sm={9}>
      <textarea rows={4} cols={30} required  onChange={(e)=>setJobRequirements(e.target.value)} size={fieldSize} type="text" placeholder='Enter job requirements' />
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            EDUCATION
      </Col>
      <Col sm={9}>
      <select defaultValue={"Matric Pass"} className='Select' required  onChange={(e)=>setJobEducation(e.target.value)} name="cars" id="cars">
  <option value="Matric Pass">Matric Pass</option>
  <option value="Intermediate Pass">Intermediate Pass</option>
  <option value="Undergraduate">Undergraduate</option>
  <option value="Graduated">Graduated</option>
  <option value="Masters">Masters</option>

</select>
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            EXPERIENCE
      </Col>
      <Col sm={9}>
      <select defaultValue={"No Experience"} className='Select' required  onChange={(e)=>setJobExperience(e.target.value)} name="cars" id="cars">
  <option value="No Experience">No Experience</option>
  <option value="less than a year">less than a year</option>
  <option value="more than a year">more than a year</option>
  <option value="more than 2 years">more than 2 years</option>
  <option value="more than 3 years">more than 3 years</option>
  <option value="more than 5 years">more than 5 years</option>
  <option value="more than 5 years">more than 5 years</option>
  <option value="more than 7 years">more than 7 years</option>



</select>
      </Col>
  </Row>

  <Row className='form-row'>
      <Col sm={3}>
            GENDER
      </Col>
      <Col sm={9}>
      <select defaultValue={"Any"} className='Select' required  onChange={(e)=>setjobGender(e.target.value)} >
  <option value="Any">Any</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>
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

  <Row className='form-row'>
      <Col sm={3}>
            JOB SALARY (in Rupees)
      </Col>
      <Col sm={9}>
      <input required  onChange={(e)=>setjobStartSalary(e.target.value)} placeholder="10000" size={fieldSize} type="Number" />{" "} to {"  "}
      <input required  onChange={(e)=>setjobEndSalary(e.target.value)} placeholder="20000" size={fieldSize} type="Number" />

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
      <select className='Select' required  onChange={(e)=>setCompanyLocation(e.target.value)} >
  <option value="Karachi">Karachi</option>
  <option value="Islamabad">Islamabad</option>
  <option value="Lahore">Lahore</option>

</select>
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
      <input required id="Logo"  onChange={(e)=>handleSubmit(e)} size={fieldSize} type="file" />
      </Col>
      {/* <img src={companyLogo} alt="" srcset="" /> */}
  </Row>
  <Button   disabled={disableBtn} onClick={(event)=>SubmitJob(event)}  className="MyBtn" variant="flat" >
    Submit
  </Button>
</Form>
        </div>
    )
}

export default JobPost;