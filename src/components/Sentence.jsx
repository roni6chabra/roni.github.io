import React, { Component } from 'react';
import {  MDBRow, MDBCol } from "mdbreact";

export default class Sentence extends Component {
    render() {
        return (
            <MDBRow>
            <MDBCol>
              <div className="imagination hoverable">
                <span><span className="orange-text text-lighten-2">"Imagination </span>
                  Is More Important Then <span className="orange-text text-lighten-2"> Knowledge"</span></span>
              </div>
            </MDBCol>
          </MDBRow>
        )
    }
}