import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { MDBRow, MDBCol, Animation } from "mdbreact";


export default class Header extends Component {
    render() {
        return (
            <MDBRow>
                <MDBCol>
                    <div className="section1">
                        <Parallax bgImage={require('./../bg4.jpg')} strength={500}>
                            <Animation type="zoomIn" >
                                <h1>Roni Chabra</h1>
                            </Animation>
                            <Animation type="zoomIn" >
                                <h2>Software Engineer</h2>
                            </Animation>
                            <Animation type="zoomIn">
                                <h5>A modern responsive front-end developer</h5>
                            </Animation>

                            <Animation type="bounceIn" delay="1s">
                                <div>
                                    <ul className="headerIcons">
                                        <li><a href="https://www.linkedin.com/in/roni-chabra-profile" target="_blank" className="fa fa-linkedin" rel="noopener noreferrer">linkedin</a></li>
                                        <li><a href="https://www.facebook.com/roni6ch" target="_blank" className="fa fa-facebook" rel="noopener noreferrer">facebook</a></li>
                                        <li><a href="https://gitlab.com/users/Roni691986/projects" target="_blank" className="fa fa-code-fork" rel="noopener noreferrer">gitlab</a></li>
                                        <li><a href="tel:+972502560005" className="fa fa-phone" rel="noopener noreferrer">phone</a></li>
                                        <li><a href="#contactForm" className="fa fa-envelope-o" rel="noopener noreferrer">contact</a></li>
                                    </ul>
                                </div>
                            </Animation>
                            <Animation type="bounceIn" delay="1s">
                                <div className="files">
                                    <a className="btn" href="assets/Roni Chabra - Resume.pdf" target="_blank">Download Resume</a>
                                </div>
                            </Animation>
                        </Parallax>
                    </div>
                </MDBCol>
            </MDBRow>
        )
    }
}