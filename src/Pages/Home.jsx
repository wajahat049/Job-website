import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import JobCard from '../Components/JobCard';
import Footer from "../Components/Footer"
import {Button} from "react-bootstrap"
import {useEffect} from "react"


function Home() {
  return (
    <div className="Home">
      <Header/>
      <h1 className='home-heading'>
        RECENT JOBS
      </h1>
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <div className='see-more-div'>
      <Button  className='see-more-btn' variant="flat">
    More Jobs
  </Button>
      </div>
    </div>


  );
}

export default Home;
