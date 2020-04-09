import React from "react";
import "./ExitConfirmation.css";

function ExitConfirmation({
  isExitPopupOpen,
  toggleExitConfirmation,
  enableHeader,
}) {
  return (
    <React.Fragment>
      <div
        className={enableHeader ? "exitBtn" : "exitBtnDisabled"}
        onClick={toggleExitConfirmation}
      ></div>

      {isExitPopupOpen && (
        <div className="exitWrap">
          <div className="exit">
            <div className="exitHeader">
              <div>Exit</div>
            </div>
            <div className="exitInfo">
              <div>Are you sure you want to exit this course?</div>
              <div>Yes</div>
              <div>No</div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ExitConfirmation;
