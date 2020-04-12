import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  openExitConfirmationModal,
  closeExitConfirmationModal
} from '../actions/playerActions';

import {
  exitWrap,
  exit,
  exitHeader,
  exitInfo,
  exitInfoDesc,
  agreeToClose,
  disagreeToClose,
  exitBtn,
  exitBtnDisabled
} from '../styles/ExitConfirmationStyles.js';

function ExitConfirmation({
  exitModal,
  openExitConfirmationModal,
  closeExitConfirmationModal
}) {
  const onExitClick = () => {
    !exitModal.isOpen && exitModal.isEnabled && openExitConfirmationModal();
    exitModal.isOpen && exitModal.isEnabled && closeExitConfirmationModal();
  };
  return (
    <React.Fragment>
      <div
        style={exitModal.isEnabled ? exitBtn : exitBtnDisabled}
        onClick={onExitClick}
      ></div>

      {exitModal.isOpen && (
        <div style={exitWrap}>
          <div style={exit}>
            <div style={exitHeader}>
              <div>Exit</div>
            </div>
            <div style={exitInfo}>
              <div style={exitInfoDesc}>
                Are you sure you want to exit this course?
              </div>
              <div onClick={onExitClick} style={agreeToClose}>
                Yes
              </div>
              <div onClick={onExitClick} style={disagreeToClose}>
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
  exitModal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  exitModal: state.player.exitModal,
  isPlayerEnabled: state.player.isPlayerEnabled
});

const mapDispatchToProps = {
  openExitConfirmationModal: openExitConfirmationModal,
  closeExitConfirmationModal: closeExitConfirmationModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ExitConfirmation);
