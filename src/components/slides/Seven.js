import React, { Component } from 'react';
import videoSlideSeven from '../../../assets/slide_seven.mp4'

class Seven extends Component {
  componentDidMount() {
    document.getElementById('slideSevenVideo').playbackRate = 0.75;
  }
  render() {
    return (
      <div
        id="slideSeven"
        className="slide-container flex align-center">
       <video id="slideSevenVideo" className="center-video" autoPlay="autoplay" loop="loop" muted>
          <source src={videoSlideSeven} type="video/mp4" />
       </video>
       <h1>Soldering the Wires</h1>
      </div>
    )
  }
}

export default Seven;
