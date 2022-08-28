import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import JobCard from '../Components/JobCard';
import Footer from "../Components/Footer"
import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { propTypes } from 'react-bootstrap/esm/Image';
import { motion } from "framer-motion";
import {connect} from "react-redux"
// import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion"


function Home(props) {
  const [allJobs, setAllJobs] = useState([])

  useEffect(() => {
    console.log("USER",props.userInfo)
    fetch('http://localhost:8001/AllJobs')
      .then(response => response.json())
      .then(data => setAllJobs(data));

  }, [])

  // const { ref, inView } = useInView();
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: { type: "spring", duration: 25, bounce: 0.3 }
  //     })
  //     // if (!inView) {
  //     //   animation.start({ x: "-100vw" })
  //     // }
  //   }

  // }, [inView])

  return (
    <div className="Home">
      <Header />
      <h1 className='home-heading'>
        RECENT JOBS
      </h1>
      {allJobs.map((item, index) => {
        if (index <= 5) {
          console.log(item)
          return (
            <motion.div 
              initial={{ x: "-100vw" }}
              animate={{x: 0}}
              transition={{ type: "spring", duration: 6, bounce: 0.4 }}
            >
              <JobCard companyDescription={item.companyDescription} companyLogo={item.companyLogo} companyName={item.companyName}
                companyWebsite={item.companyWebsite} jobCategory={item.jobCategory} jobDescription={item.jobDescription}
                jobRequirements={item.jobRequirements} jobSalary={item.jobSalary.slice(0, 20)} jobVacancies={item.jobVacancies}
                companyLocation={item.companyLocation} jobTitle={item.jobTitle} jobLocation={item.jobLocation} jobType={item.jobType} jobTimings={item.jobTimings} />
            </motion.div>
          )
        }

      })}
      <div className='see-more-div'>
        <Button onClick={() => { window.location.replace("/AllJobs") }} className='see-more-btn' variant="flat">
          More Jobs
        </Button>
      </div>
    </div>


  );
}

function mapStateToProps(state) {
  return {
      userInfo:state.userInfo
  }
}

export default connect(mapStateToProps,null)( Home);
