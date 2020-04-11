import {
  OPEN_TRANSCRIPT,
  HIDE_TRANSCRIPT,
  OPEN_MENU,
  HIDE_MENU,
  OPEN_HELP,
  HIDE_HELP,
  OPEN_EXIT_CONFIRMATION_MODAL,
  CLOSE_EXIT_CONFIRMATION_MODAL,
  DISABLE_NEXT,
  ENABLE_NEXT,
  DISABLE_BACK,
  ENABLE_BACK,
} from "../actions/types";

const initialState = {
  transcript: {
    isOpen: false,
    isEnabled: true,
  },
  help: { isOpen: false, isEnabled: true },
  menu: { isOpen: false, isEnabled: true },
  exitModal: { isOpen: false, isEnabled: true },
  audio: { isEnabled: true },
  replay: { isEnabled: true },
  pause: { isEnabled: true },
  back: { isEnabled: true },
  next: { isEnabled: true },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_TRANSCRIPT:
      return {
        ...state,
        transcript: { isOpen: true, isEnabled: true },
        menu: { isOpen: false, isEnabled: false },
        help: { isOpen: false, isEnabled: false },
        exitModal: { isOpen: false, isEnabled: false },
        audio: { isEnabled: false },
        replay: { isEnabled: false },
        pause: { isEnabled: false },
        back: { isEnabled: false },
        next: { isEnabled: false },
      };

    case HIDE_TRANSCRIPT:
      return {
        ...state,
        transcript: { isOpen: false, isEnabled: true },
        menu: { isOpen: false, isEnabled: true },
        help: { isOpen: false, isEnabled: true },
        exitModal: { isOpen: false, isEnabled: true },
        audio: { isEnabled: true },
        replay: { isEnabled: true },
        pause: { isEnabled: true },
        back: { isEnabled: true },
        next: { isEnabled: true },
      };

    case OPEN_MENU:
      return {
        ...state,
        transcript: { isOpen: false, isEnabled: false },
        menu: { isOpen: true, isEnabled: true },
        help: { isOpen: false, isEnabled: false },
        exitModal: { isOpen: false, isEnabled: false },
        audio: { isEnabled: false },
        replay: { isEnabled: false },
        pause: { isEnabled: false },
        back: { isEnabled: false },
        next: { isEnabled: false },
      };

    case HIDE_MENU:
      return {
        ...state,
        transcript: { isOpen: false, isEnabled: true },
        menu: { isOpen: false, isEnabled: true },
        help: { isOpen: false, isEnabled: true },
        exitModal: { isOpen: false, isEnabled: true },
        audio: { isEnabled: true },
        replay: { isEnabled: true },
        pause: { isEnabled: true },
        back: { isEnabled: true },
        next: { isEnabled: true },
      };

    case OPEN_HELP:
      return {
        ...state,
        transcript: { isOpen: false, isEnabled: false },
        menu: { isOpen: false, isEnabled: false },
        help: { isOpen: true, isEnabled: true },
        exitModal: { isOpen: false, isEnabled: false },
        audio: { isEnabled: false },
        replay: { isEnabled: false },
        pause: { isEnabled: false },
        back: { isEnabled: false },
        next: { isEnabled: false },
      };

    case HIDE_HELP:
      return {
        ...state,
        transcript: { isOpen: false, isEnabled: true },
        menu: { isOpen: false, isEnabled: true },
        help: { isOpen: false, isEnabled: true },
        exitModal: { isOpen: false, isEnabled: true },
        audio: { isEnabled: true },
        replay: { isEnabled: true },
        pause: { isEnabled: true },
        back: { isEnabled: true },
        next: { isEnabled: true },
      };

    case OPEN_EXIT_CONFIRMATION_MODAL:
      return {
        ...state,
        transcript: { isOpen: false, isEnabled: false },
        menu: { isOpen: false, isEnabled: false },
        help: { isOpen: false, isEnabled: false },
        exitModal: { isOpen: true, isEnabled: true },
        audio: { isEnabled: false },
        replay: { isEnabled: false },
        pause: { isEnabled: false },
        back: { isEnabled: false },
        next: { isEnabled: false },
      };

    case CLOSE_EXIT_CONFIRMATION_MODAL:
      return {
        ...state,
        transcript: { isOpen: false, isEnabled: true },
        menu: { isOpen: false, isEnabled: true },
        help: { isOpen: false, isEnabled: true },
        exitModal: { isOpen: false, isEnabled: true },
        audio: { isEnabled: true },
        replay: { isEnabled: true },
        pause: { isEnabled: true },
        back: { isEnabled: true },
        next: { isEnabled: true },
      };
    case DISABLE_NEXT:
      return {
        ...state,
        next: { isEnabled: false },
      };
    case ENABLE_NEXT:
      return {
        ...state,
        next: { isEnabled: true },
      };
    case DISABLE_BACK:
      return {
        ...state,
        back: { isEnabled: false },
      };
    case ENABLE_BACK:
      return {
        ...state,
        back: { isEnabled: true },
      };
    default:
      return state;
  }
}
