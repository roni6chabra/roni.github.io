import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import { Provider } from 'react-redux';
import store from './store/';
import './App.scss';

import Header from './components/Header';
import WhiteCircle from './components/WhiteCircle';
import Protfolio from './components/Protfolio';
import Sentence from './components/Sentence';
import About from './components/About';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("%cRoniChabra.com - Protfolio & Resume :)", "color: #007bff; font-size: x-large");
    console.log("test1");
  }
  render() {
    return (
      <div className="App" id='app'>
        <Provider store={store}>
          <MDBContainer fluid>
            <Header />
            <WhiteCircle />
            <Protfolio />
            <Sentence />
            <About />
          </MDBContainer>
        </Provider>
          <a href="#app" className="goUp btn-floating">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </a>
      </div>
    );
  }
}

export default App;
