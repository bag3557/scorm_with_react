import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  openExitConfirmationModal,
  closeExitConfirmationModal,
} from "../actions/playerActions";

import "./ExitConfirmation.css";

function ExitConfirmation({
  exitModal,
  openExitConfirmationModal,
  closeExitConfirmationModal,
}) {
  const onExitClick = () => {
    !exitModal.isOpen
      ? openExitConfirmationModal()
      : closeExitConfirmationModal();
  };
  return (
    <React.Fragment>
      <div
        className={exitModal.isEnabled ? "exitBtn" : "exitBtnDisabled"}
        onClick={onExitClick}
      ></div>

      {exitModal.isOpen && (
        <div className="exitWrap">
          <div className="exit">
            <div className="exitHeader">
              <div>Exit</div>
            </div>
            <div className="exitInfo">
              <div>Are you sure you want to exit this course?</div>
              <div onClick={onExitClick} class="agreeToClose">
                Yes
              </div>
              <div onClick={onExitClick} class="disagreeToClose">
                No
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

ExitConfirmation.propTypes = {
  exitModal: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  exitModal: state.player.exitModal,
  isPlayerEnabled: state.player.isPlayerEnabled,
});

const mapDispatchToProps = {
  openExitConfirmationModal: openExitConfirmationModal,
  closeExitConfirmationModal: closeExitConfirmationModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExitConfirmation);
