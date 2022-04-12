import React from 'react';
import '../App.css';
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import twitter from 'react-useanimations/lib/twitter'
import instagram from 'react-useanimations/lib/instagram'
import linkedin from 'react-useanimations/lib/linkedin'
import {Row,Col} from "react-bootstrap"

const Contact = () => {
    return (
        <div className='Container'>
            {/* <header>
                <div className='HeaderText'>
                    <div >
                        <h1>CONTACT</h1>
                        <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                    </div>
                </div>
            </header> */}
            <div className='contact_bg'>
                <h1 className='about-heading'>CONTACT US</h1>
            
                <form className='contact_form' id="contact-form" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn BTN">Submit</button>
                </form>
                <div className='Contact-Icons-div'>
                <Row className='Contact-Socialmedia'>
            <h2 style={{marginBottom:"5%"}}>Social Media</h2>
            <Col>
          <UseAnimations strokeColor='#ff9902'  speed={2} animation={facebook} size={56}  />
          </Col>
          <Col> 
          <UseAnimations strokeColor='#ff9902'  speed={2} animation={instagram} size={56}  />
          </Col> 
          <Col>
          <UseAnimations strokeColor='#ff9902'  speed={2} animation={twitter} size={56}  />
          </Col>
          <Col>
          <UseAnimations strokeColor='#ff9902'  speed={2} animation={linkedin} size={56}  />
          </Col>
          
          </Row>
          </div>
            </div>
           
        </div>
    )
}

export default Contact;