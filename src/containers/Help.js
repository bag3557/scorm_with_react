import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { openHelp, closeHelp } from "../actions/playerActions";
import {
  helpBtn,
  help_bg,
  helpBtnDisabled,
  helpCloseBtn,
  helpWrap
} from "./HeaderStyles";

import helpImg from "../images/help_en.png";
import logoImg from "../images/logo.png";

function Help({ help, openHelp, closeHelp }) {
  const onHelpClick = () => {
    !help.isOpen && help.isEnabled && openHelp();
    help.isOpen && help.isEnabled && closeHelp();
  };
  return (
    <React.Fragment>
      <div
        style={help.isEnabled ? helpBtn : helpBtnDisabled}
        onClick={onHelpClick}
      ></div>
      {help.isOpen && (
        <div style={helpWrap}>
          <div style={helpCloseBtn} onClick={onHelpClick}>
            X
          </div>
          <img alt="close" style={help_bg} src={helpImg} />
        </div>
      )}
    </React.Fragment>
  );
}

Help.propTypes = {
  help: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  help: state.player.help
});

const mapDispatchToProps = {
  openHelp: openHelp,
  closeHelp: closeHelp
};

export default connect(mapStateToProps, mapDispatchToProps)(Help);
