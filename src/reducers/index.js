import  {
  GO_TO_NEXT_SLIDE,
  GO_TO_PREV_SLIDE
} from '../actions';


function presentationReducer(state = {
  slideNumber: 0
}, action) {
  let tPresentation = state;
  switch(action.type) {
    case GO_TO_NEXT_SLIDE:
      //TODO: Add Max Page
      tPresentation.slideNumber = state.slideNumber + 1;
      return {
        ...tPresentation
      }
    case GO_TO_PREV_SLIDE:
      tPresentation.slideNumber = tPresentation.slideNumber <= 0 ? 0 : tPresentation.slideNumber - 1;
      return {
        ...tPresentation
      }
    default:
      return {
        ...tPresentation
      }
  }
}

export default presentationReducer;
