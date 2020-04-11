import React from "react";
import CourseTitle from "./CourseTitle";
import Help from "./Help";
import ExitConfirmation from "./ExitConfirmation";

import "./Header.css";

function Header({ enableHeader, toggleExitConfirmation, isExitPopupOpen }) {
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src="images/logo.png" />
      </div>

      <CourseTitle />

      <div className={enableHeader ? "langBtn" : "langBtnDisabled"}></div>

      <Help />

      <ExitConfirmation />
    </div>
  );
}

export default Header;
