import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SlideOne from './slides/One';

class Presentation extends Component {
  render() {
    const { slideNumber, goToNextSlide, goToPrevSlide } = this.props;
    let currentSlide;

    switch (slideNumber) {
      case 0:
        currentSlide = <SlideOne />;
        break;
      default:
        currentSlide = null;
    }

    return (
      <div id="presentationRoot">
        <button
          className="transition-btn left-transition"
          onClick={goToPrevSlide}>
          <i className="fa fa-2x fa-caret-left"></i>
        </button>
        <span>{slideNumber}</span>
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
