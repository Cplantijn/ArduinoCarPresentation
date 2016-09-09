import React, { Component } from 'react';
import videoSlideSix from '../../../assets/slide_six.mp4'

class Six extends Component {
  componentDidMount() {
    document.getElementById('slideSixVideo').playbackRate = 0.75;
  }
  render() {
    return (
      <div
        id="slideSix"
        className="slide-container flex align-center">
       <video id="slideSixVideo" className="center-video" autoPlay="autoplay" loop="loop" muted>
          <source src={videoSlideSix} type="video/mp4" />
       </video>
       <h1>Controls under the Hood</h1>
      </div>
    )
  }
}

export default Six;
