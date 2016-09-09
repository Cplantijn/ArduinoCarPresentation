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
        <button onClick={goToPrevSlide} />
        {currentSlide}
        <span>{slideNumber}</span>
        <button onClick={goToNextSlide} />
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
