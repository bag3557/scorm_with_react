import React from "react";

import Animation from "../components/common/Animation";
import "./SlideContainer.css";

function SlideContainer({ currentTopic }) {
  return (
    <div className="stage">
      <div className="pageContainer">
        {currentTopic.animationName && (
          <Animation animationName={currentTopic.animationName} />
        )}
      </div>
    </div>
  );
}

export default SlideContainer;
