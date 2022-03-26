import React from 'react';
import '../App.css';
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
            </div>
        </div>
    )
}

export default Contact;