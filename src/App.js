import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, Animation } from "mdbreact";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
import { MDBBtn, MDBInput, MDBIcon, Button, ModalFooter, ModalHeader, Modal, Container } from "mdbreact";
import { Parallax, Background } from 'react-parallax';

import axios from 'axios';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      modal: false,
      modalText: ''
    };
  }
  componentDidMount = () => {
    var self = this;
    axios.get('./assets/works.json')
      .then(function (response) {
        console.log(response.data['works']);
        self.setState({
          works: response.data['works']
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    var self = this;
    axios.post('./mail.php', data)
      .then(function (response) {
        self.setState({
          modal: !self.state.modal,
          modalText: response.data
        });

      })
      .catch(function (error) {
        console.log(error);
        self.setState({
          modal: !self.state.modal,
          modalText: 'mail.php does not Exist!'
        });
      });

  }

  render() {
    return (
      <div className="App" id='app'>
        {/* 
            Section 1
          */}
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <div className="section1">
                <Parallax bgImage={require('./bg1.jpg')} strength={500}>
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

          {/* 
            Section 2
          */}

          <MDBRow>
            <MDBCol>
              <div className="scrollDown hoverable">
                <a href="#protfolio">
                  <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="section2">
            <MDBCol md="4">
              <Animation type="bounceIn" duration="3s">
                <img src="assets/icon1.png" />
                <h5>Responsive Web Sites</h5>
                <p>Get your Responsive Landing page for all
                devices within a week.</p>
              </Animation>

            </MDBCol>
            <MDBCol md="4">
              <Animation type="bounceIn" duration="3s">
                <img src="assets/icon2.png" />
                <h5>User Experience Focused</h5>
                <p>By using the principles of Material Design,
                  I'm able to create a framework that incorporates components and
                animations that provide more feedback to users.</p>
              </Animation>

            </MDBCol>
            <MDBCol md="4">
              <Animation type="bounceIn" duration="3s">
                <img src="assets/icon3.png" />
                <h5>From scratch to 100%</h5>
                <p>Include's web site domain, DB and hosting
							server.</p>
              </Animation>

            </MDBCol>
          </MDBRow>

          {/* 
            Section 3
          */}

          <MDBRow id="protfolio">
            <MDBCol>
              <div className="parallax-container section3 iphoneWrapper">
                <Parallax bgImage={require('./bg2.jpg')} strength={500}>
                  <MDBRow>
                    <MDBCol md="6">
                      <h5 className="sentence" >A modern responsive front-end framework based on Material Design</h5>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="iphoneWrapper">
                        <img className="iphone" src="assets/iPhone6.png" />
                        {this.state.works.length > 0 ?
                          <Carousel activeItem={1} length={this.state.works.length} showControls={true} showIndicators={true} className="z-depth-1">
                            <CarouselInner>
                              {
                                this.state.works.map((work, i) =>
                                  <CarouselItem itemId={i + 1} key={i}>
                                    <View>
                                      <a href={work.link} target="_blank">
                                        <img className="d-block w-100" src={"assets/works/" + work.img} alt={work.title} />
                                        <Mask overlay="black-light" />
                                      </a>
                                    </View>
                                    <CarouselCaption>
                                      <h3 className="h3-responsive">{work.title}</h3>
                                      <p>{work.description}</p>
                                    </CarouselCaption>
                                  </CarouselItem>
                                )}
                            </CarouselInner>
                          </Carousel>
                          : ''}
                      </div>

                    </MDBCol>
                  </MDBRow>
                </Parallax>
              </div>
            </MDBCol>
          </MDBRow>
          {/* 
            Section 4
          */}
          <MDBRow>
            <MDBCol>
              <div className="imagination hoverable">
                <span><span className="orange-text text-lighten-2">"Imagination </span>
                  Is More Important Then <span className="orange-text text-lighten-2"> Knowledge"</span></span>
              </div>
            </MDBCol>
          </MDBRow>
          {/* 
            Section 5
          */}
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
        </MDBContainer>

        <a href="#app" className="goUp btn-floating">
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </a>
        <Container>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>{this.state.modalText}</ModalHeader>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>Close</Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default App;
