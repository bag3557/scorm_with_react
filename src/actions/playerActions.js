import {
  OPEN_TRANSCRIPT,
  HIDE_TRANSCRIPT,
  OPEN_MENU,
  HIDE_MENU,
  OPEN_HELP,
  HIDE_HELP,
  OPEN_EXIT_CONFIRMATION_MODAL,
  CLOSE_EXIT_CONFIRMATION_MODAL,
} from "./types";

export const openTranscript = () => async (dispatch) => {
  dispatch({
    type: OPEN_TRANSCRIPT,
  });
};

export const closeTranscript = () => async (dispatch) => {
  dispatch({
    type: HIDE_TRANSCRIPT,
  });
};

export const openMenu = () => async (dispatch) => {
  dispatch({
    type: OPEN_MENU,
  });
};

export const closeMenu = () => async (dispatch) => {
  dispatch({
    type: HIDE_MENU,
  });
};

export const openHelp = () => async (dispatch) => {
  dispatch({
    type: OPEN_HELP,
  });
};

export const closeHelp = () => async (dispatch) => {
  dispatch({
    type: HIDE_HELP,
  });
};

export const openExitConfirmationModal = () => async (dispatch) => {
  dispatch({
    type: OPEN_EXIT_CONFIRMATION_MODAL,
  });
};

export const closeExitConfirmationModal = () => async (dispatch) => {
  dispatch({
    type: CLOSE_EXIT_CONFIRMATION_MODAL,
  });
};
