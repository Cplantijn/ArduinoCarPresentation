
export const GO_TO_NEXT_SLIDE = 'GO_TO_NEXT_SLIDE';
export const GO_TO_PREV_SLIDE = 'GO_TO_PREV_SLIDE';

export function goToNextSlide() {
  return {
    type: GO_TO_NEXT_SLIDE
  };
}

export function goToPrevSlide() {
  return {
    type: GO_TO_PREV_SLIDE
  };
}
