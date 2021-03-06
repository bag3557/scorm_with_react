import React from "react";
import CourseTitle from "./CourseTitle";
import Help from "./Help";
import ExitConfirmation from "./ExitConfirmation";

import { header, logo, langBtn, langBtnDisabled } from "./HeaderStyles";
import logoImg from "../images/logo.png";

function Header({ enableHeader, toggleExitConfirmation, isExitPopupOpen }) {
  return (
    <div style={header}>
      <div style={logo}>
        <img alt="logo" src={logoImg} />
      </div>

      <CourseTitle />

      <div style={enableHeader ? langBtn : langBtnDisabled}></div>

      <Help />

      <ExitConfirmation />
    </div>
  );
}

export default Header;
