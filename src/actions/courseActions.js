import { LOAD_NEXT_SLIDE, LOAD_BACK_SLIDE } from "./types";

export const loadNextSlide = (payload) => async (dispatch) => {
  dispatch({
    type: LOAD_NEXT_SLIDE,
    payload: payload,
  });
};

export const loadPrevSlide = (payload) => async (dispatch) => {
  dispatch({
    type: LOAD_BACK_SLIDE,
    payload: payload,
  });
};
