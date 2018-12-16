import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { MDBRow, MDBCol, Animation } from "mdbreact";


export default class Header extends Component {
    render() {
        return (
            <MDBRow>
                <MDBCol>
                    <div className="section1">
                        <Parallax bgImage={require('./../bg1.jpg')} strength={500}>
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
                                        <li><a target="_blank" href="https://www.linkedin.com/in/roni-chabra-61698558" className="fa fa-linkedin "></a></li>
                                        <li><a href="https://www.facebook.com/roni6ch" target="_blank" className="fa fa-facebook"></a></li>
                                        <li><a href="https://gitlab.com/users/Roni691986/projects" target="_blank" className="fa fa-code-fork"></a></li>
                                        <li><a href="tel:+972502560005" className="fa fa-phone"></a></li>
                                        <li><a href="#contactForm" className="fa fa-envelope-o"></a></li>
                                    </ul>
                                </div>
                            </Animation>
                            <Animation type="bounceIn" delay="1s">
                                <div className="files">
                                    <a className="btn" href="assets/Roni Chabra - Resume EN.docx">English Resume</a>
                                    <a className="btn" href="assets/Roni Chabra - Resume.docx">Hebrew Resume</a>
                                </div>
                            </Animation>
                        </Parallax>
                    </div>
                </MDBCol>
            </MDBRow>
        )
    }
}