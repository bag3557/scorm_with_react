import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { openHelp, closeHelp } from "../actions/playerActions";

function Help({ help, openHelp, closeHelp }) {
  const onHelpClick = () => {
    !help.isOpen ? openHelp() : closeHelp();
  };
  return (
    <React.Fragment>
      <div
        className={help.isEnabled ? "helpBtn" : "helpBtnDisabled"}
        onClick={onHelpClick}
      ></div>
      {help.isOpen && (
        <div className="helpWrap">
          <div className="helpCloseBtn" onClick={onHelpClick}>
            X
          </div>
          <img alt="close" className="help_bg" src="images/help_en.png" />
        </div>
      )}
    </React.Fragment>
  );
}

Help.propTypes = {
  help: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  help: state.player.help,
});

const mapDispatchToProps = {
  openHelp: openHelp,
  closeHelp: closeHelp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Help);
