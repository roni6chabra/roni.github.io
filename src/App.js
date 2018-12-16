import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import { Button, ModalFooter, ModalHeader, Modal, Container } from "mdbreact";
import axios from 'axios';
import './App.scss';

import Header from './components/Header';
import WhiteCircle from './components/WhiteCircle';
import Protfolio from './components/Protfolio';
import Sentence from './components/Sentence';
import About from './components/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalText: ''
    };
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
        <MDBContainer fluid>
          <Header />
          <WhiteCircle />
          <Protfolio />
          <Sentence />
          <About />
        </MDBContainer>

        <a href="#app" className="goUp btn-floating">
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </a>
        {/*Modal*/}
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
