import React from "react";
import "./PlayerButtons.css";

function PlayerButtons() {
  return (
    <div className="footer">
      <ul>
        <div align="center">
          <li className="menuBtn"></li>
          <li className="ttBtn"></li>
          <li className="audioBtn"></li>
          <div className="volumeSlider"></div>
          <li className="replayBtn"></li>
          <li className="pauseBtn"></li>
          <li className="backBtn"></li>
          <div className="pagecounter">
            <div className="currentPageNum">Page 00/00</div>
          </div>
          <li className="nextBtn"></li>
        </div>
      </ul>
    </div>
  );
}

export default PlayerButtons;
