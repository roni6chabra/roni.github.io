import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { MDBRow, MDBCol } from "mdbreact";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
import axios from 'axios';


export default class Protfolio extends Component {
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

    render() {
        return (
<MDBRow id="protfolio">
<MDBCol>
  <div className="parallax-container section3 iphoneWrapper">
    <Parallax bgImage={require('./../bg2.jpg')} strength={500}>
      <MDBRow>
        <MDBCol md="6">
          <h5 className="sentence" >A modern responsive front-end framework based on Material Design</h5>
        </MDBCol>
        <MDBCol md="6">
          <div className="iphoneWrapper">
            <img className="iphone" src="./assets/iPhone6.png" />
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
        )
    }
}