import { LOAD_NEXT_SLIDE, LOAD_BACK_SLIDE } from "../actions/types";
import { topics } from "../courseMap";

const initialState = {
  topics: topics,
  progress: {
    topic: 1,
    lesson: 0,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_NEXT_SLIDE:
      return {
        ...state,
        progress: {
          ...state.progress,
          ...action.payload,
        },
      };
    case LOAD_BACK_SLIDE:
      return {
        ...state,
        progress: {
          ...state.progress,
          ...action.payload,
        },
      };

    default:
      break;
  }
  return state;
}
