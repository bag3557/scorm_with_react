import React, { useState } from "react";
import CourseTitle from "./CourseTitle";

import "./Header.css";

function Header() {
  const [isHelpOpen, setHelpOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src="images/logo.png" />
      </div>
      <CourseTitle />
      <div className="langBtn"></div>
      <div className="helpBtn" onClick={() => setHelpOpen(true)}></div>
      <div className="exitBtn"></div>
      {isHelpOpen && (
        <div className="helpWrap">
          <div className="helpCloseBtn" onClick={() => setHelpOpen(false)}>
            X
          </div>
          <img alt="close" className="help_bg" src="images/help_en.png" />
        </div>
      )}
    </div>
  );
}

export default Header;
