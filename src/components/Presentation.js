import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SlideOne from './slides/One';
import SlideTwo from './slides/Two';
import SlideThree from './slides/Three';
import SlideFour from './slides/Four';
import SlideFive from './slides/Five';
import SlideSix from './slides/Six';
import SlideSeven from './slides/Seven';
import SlideEight from './slides/Eight';





import EndSlide from './slides/EndSlide';


class Presentation extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this._kbNavigation.bind(this));
  }
  _kbNavigation(e) {
    const { goToNextSlide, goToPrevSlide } = this.props;

    if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    } else if (e.key === 'ArrowRight') {
      goToNextSlide();
    }
  }
  render() {
    const { slideNumber, goToNextSlide, goToPrevSlide } = this.props;
    let currentSlide;

    switch (slideNumber) {
      case 0:
        currentSlide = <SlideOne />;
        break;
      case 1:
        currentSlide = <SlideTwo />;
        break;
      case 2:
        currentSlide = <SlideThree />;
        break;
      case 3:
        currentSlide = <SlideFour />;
        break;
      case 4:
        currentSlide = <SlideFive />;
        break;
      case 5:
        currentSlide = <SlideSix />;
        break;
      case 6:
        currentSlide = <SlideSeven />;
        break;
      case 7:
        currentSlide = <SlideEight />;
        break;
      default:
        currentSlide = <EndSlide />;
    }

    return (
      <div id="presentationRoot">
        <button
          className="transition-btn left-transition"
          onClick={goToPrevSlide}>
          <i className="fa fa-2x fa-caret-left"></i>
        </button>
        {currentSlide}
        <button
          className="transition-btn right-transition"
          onClick={goToNextSlide}>
          <i className="fa fa-2x fa-caret-right"></i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    slideNumber: state.slideNumber
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

Presentation.propTypes = {
  slide: PropTypes.object.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  goToPrevSlide: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
