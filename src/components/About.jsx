import React, { Component } from 'react';
import {  MDBRow, MDBCol } from "mdbreact";
import { MDBBtn, MDBInput, MDBIcon } from "mdbreact";

export default class About extends Component {
    render() {
        return (

          <MDBRow className="page-footer black scrollspy" id="contact">
          <MDBCol md="4" className="aboutme">

            <h4>About me</h4>
            <p>
              Hi, My Name Is Roni, <br />
              Software engineer, full stack, web developer and a funny guy :)<br />
              I am always excited to explore and learn new things. <br />
              I also love to travel the world. You may check out my portfolio and view my
              resume at this page. If you are interested of building a website
                  for your business or any other purpose, <br />please contact me.
                </p>

          </MDBCol>
          <MDBCol md="4" className="contact">

            <h4>Contact Me</h4>
            <form onSubmit={this.handleSubmit}>

              <MDBInput label="Full Name" icon="user" id="name" type="text" data-length="20" maxLength="20" name="name" required="" />

              <MDBInput label="Email" id="email" icon="envelope-o" type="email" data-length="30" maxLength="30" name="mail" required="" />

              <MDBInput label="Message" icon="pencil" id="message" data-length="200" maxLength="200" name="message" required="" />

              <MDBBtn color="info" type="submit" id="submitBtn" >Send</MDBBtn>
            </form>

          </MDBCol>

          <MDBCol md="4" className="contactWays" id='contactForm'>

            <h4>Social ways</h4>
            <MDBBtn size="lg" tag="a" href="https://www.linkedin.com/in/roni-chabra-61698558" floating social="li" className="linkedin">
              <MDBIcon icon="linkedin" />
            </MDBBtn>

            <MDBBtn size="lg" tag="a" href="https://www.facebook.com/roni6ch" floating social="fb" className="facebook">
              <MDBIcon icon="facebook" />
            </MDBBtn>

            <MDBBtn size="lg" tag="a" href="tel:+972502560005" floating social="fb" className="phone">
              <MDBIcon icon="phone" />
            </MDBBtn>

            <MDBBtn size="lg" tag="a" href="mailto:Roni691986@Gmail.com" floating social="email" className="mail">
              <MDBIcon icon="envelope" />
            </MDBBtn>
          </MDBCol>

        </MDBRow>
        )
    }
}