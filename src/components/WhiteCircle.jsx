import React, { Component } from 'react';
import { MDBRow, MDBCol, Animation } from "mdbreact";


export default class WhiteCircle extends Component {
    render() {
        return (<div>
            <MDBRow>
            <MDBCol>
              <div className="scrollDown hoverable">
                <a href="#protfolio">
                  <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="section2 slide-fwd-center">
            <MDBCol md="4">
              <Animation type="bounceIn" duration="3s">
                <img src="assets/icon1.png"  alt="Responsive" />
                <h5>Responsive Web Sites</h5>
                <p>Get your Responsive Landing page for all
                devices within a week.</p>
              </Animation>

            </MDBCol>
            <MDBCol md="4">
              <Animation type="bounceIn" duration="3s">
                <img src="assets/icon2.png" alt="scratch" />
                <h5>User Experience Focused</h5>
                <p>By using the principles of Material Design,
                  I'm able to create a framework that incorporates components and
                animations that provide more feedback to users.</p>
              </Animation>

            </MDBCol>
            <MDBCol md="4">
              <Animation type="bounceIn" duration="3s">
                <img src="assets/icon3.png"  alt="Experience" />
                <h5>From scratch to 100%</h5>
                <p>Include's web site domain, DB and hosting
							server.</p>
              </Animation>

            </MDBCol>
          </MDBRow>
          </div>
        )
    }
}