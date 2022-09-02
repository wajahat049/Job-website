import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import JobCard from '../Components/JobCard';
import Footer from "../Components/Footer"
import {Button, Row , Col , Pagination} from "react-bootstrap"
import {useEffect,useState} from "react"
import useWindowDimensions from "../Components/WindowDImension";


function JobList() {
    const [paginationSize,setpaginationSize] = useState("lg")
    const [paginationStart,setpaginationStart] = useState(0)
    const [paginationEnd,setpaginationEnd] = useState(10)
    const [active,setactive] = useState(0)

    const { height, width } = useWindowDimensions();
    const [allJobs,setAllJobs] = useState([])

    useEffect(()=>{
        if(width<500){
          setpaginationSize("sm")
        }
        console.log("xbxsxnsx;nsnxsnx;sx",width)
      },[width])


      useEffect(()=>{
        fetch(process.env.REACT_APP_BASE_URL+'/AllJobs')
        .then(response => response.json())
        .then(data =>setAllJobs(data) );
    
    },[])

    const changePage=(page)=>{
      console.log("P",page-1,page*10,(page*10)-10)
setactive(page-1)
setpaginationEnd(page*10)
setpaginationStart((page*10)-10)

    }
let items = [];
for (let number = 0; number <= 9; number++) {
  items.push(
    <Pagination.Item onClick={()=>changePage(number+1)} key={number} active={number === active}>
      {number+1}
    </Pagination.Item>,
  );
}

  return (
    <div className="Home">
      <Header/>
      {console.log("ALL",allJobs)}
      <h1 className='home-heading'>
        ALL JOBS
      </h1>

      {allJobs.slice(paginationStart,paginationEnd).map((item,index)=>{
        return(
      <JobCard jobGender={item.jobGender} jobSalary={item.jobSalary} jobRequirements={item.jobRequirements} jobDescription={item.jobDescription} jobTitle={item.jobTitle} jobLocation={item.jobLocation} jobType={item.jobType} jobTimings={item.jobTimings} />
        )
      })}
     
      {/* <div> */}
      <Row style={{marginTop:"5%",marginBottom:"5%"}}>
      <Pagination onChange={(e)=>{console.log("e",e)}} size={paginationSize}>{items}</Pagination>
</Row>
      {/* </div> */}
    </div>


  );
}

export default JobList;
