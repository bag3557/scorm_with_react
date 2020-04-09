import React from "react";

function Help({ toggleHelp, enableHeader, isHelpOpen }) {
  return (
    <React.Fragment>
      <div
        className={enableHeader ? "helpBtn" : "helpBtnDisabled"}
        onClick={toggleHelp}
      ></div>
      {isHelpOpen && (
        <div className="helpWrap">
          <div className="helpCloseBtn" onClick={toggleHelp}>
            X
          </div>
          <img alt="close" className="help_bg" src="images/help_en.png" />
        </div>
      )}
    </React.Fragment>
  );
}

export default Help;
