import React, { useState } from "react";
import CourseTitle from "./CourseTitle";
import Help from "./Help";
import ExitConfirmation from "./ExitConfirmation";

import "./Header.css";

function Header({
  isHelpOpen,
  toggleHelp,
  enableHeader,
  toggleExitConfirmation,
  isExitPopupOpen,
}) {
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src="images/logo.png" />
      </div>
      <CourseTitle />
      <div className={enableHeader ? "langBtn" : "langBtnDisabled"}></div>

      <Help
        isHelpOpen={isHelpOpen}
        enableHeader={enableHeader}
        toggleHelp={toggleHelp}
      />

      <ExitConfirmation
        isExitPopupOpen={isExitPopupOpen}
        enableHeader={enableHeader}
        toggleExitConfirmation={toggleExitConfirmation}
      />
    </div>
  );
}

export default Header;
