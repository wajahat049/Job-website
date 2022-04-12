import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import { Form, Col, Row, Button } from "react-bootstrap";
import JobCard from '../Components/JobCard';



function JobSearch() {
  return (
    <div className="JobSearch">
      <div className='Container'>
        <header>
          <div className='HeaderText'>
            <div className="SearchBox">
              <Row className="mb-4 RowStyle">
                <Form.Group className="SearchJob" as={Col} sm={10} md={3}>
                  <Form.Select>
                    <option>All Category</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="SearchJob" sm={10} md={3}>
                  <Form.Select >
                    <option>Select Location</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="SearchJob" sm={10} md={3}>
                  <Form.Select >
                    <option>Search Keywords</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} sm={10} md={3}>
                  <Button className="search-btn" style={{backgroundColor:"rgb(2, 35, 95)"}}>Dark</Button>
                </Form.Group>

              </Row>
            </div>

          </div>
        </header>
      </div>
      <JobCard/>
      <JobCard/>

    </div>
  );
}

export default JobSearch;
