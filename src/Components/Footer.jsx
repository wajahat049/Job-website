import * as React from 'react';
import { AiOutlineFacebook,AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai'
import "../App.css"
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import twitter from 'react-useanimations/lib/twitter'
import instagram from 'react-useanimations/lib/instagram'
import linkedin from 'react-useanimations/lib/linkedin'
export default function Footer() {
  return (
    <Container fluid className="Footer">
      <Row >
        <Col sm={4} m={4} >
          <div  >
              <h2>Top Jobs</h2>
          <ul>
  <li>Web Design</li>
  <li>Graphic Design</li>
  <li>Web Developer</li>
  <li>Python</li>
  <li>HTML</li>
  <li>CSS</li>


</ul>
          </div>
        </Col>
        <Col sm={4}  m={4}>
        <div className="ResponseFoot" >
              <h2>Response</h2>
          <Row style={{paddingTop:"5%"}}>
          <Form style={{display:"flex",justifyContent:"space-around",paddingLeft:0}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Button style={{backgroundColor:"#ff9902",height:"70%"}} variant="flat" type="submit">
    Submit
  </Button>
</Form>
          </Row>
          </div>
        </Col >
        <Col sm={4}  m={4}>
        <div className="SocialMediaIcons" >
              <h2>Social Media</h2>
          <ul>
            <li><UseAnimations strokeColor='#ff9902'  speed={2} animation={facebook} size={56}  /></li>
  <li> <UseAnimations strokeColor='#ff9902'  speed={2} animation={instagram} size={56}  /></li>
  <li> <UseAnimations strokeColor='#ff9902'  speed={2} animation={twitter} size={56}  /></li>
  <li><UseAnimations strokeColor='#ff9902'  speed={2} animation={linkedin} size={56}  />
</li>

  
</ul>
  
          </div>
        </Col>
        
      </Row>
    </Container>
  );
}