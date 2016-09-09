import React, { Component } from 'react';
import videoSlideTwo from '../../../assets/slide_two.mp4'

class Two extends Component {
  componentDidMount() {
    document.getElementById('slideTwoVideo').playbackRate = 0.75;
  }
  render() {
    return (
      <div
        id="slideTwo"
        className="slide-container flex align-center">
       <video id="slideTwoVideo" className="center-video" autoPlay="autoplay" loop="loop" muted>
          <source src={videoSlideTwo} type="video/mp4" />
       </video>
       <h1>Understanding Current Controls</h1>
      </div>
    )
  }
}

export default Two;
