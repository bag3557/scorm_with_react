import React from "react";

import Animation from "../components/common/Animation";
import { stage, pageContainer } from "./SlideContainerStyles";

function SlideContainer({ currentTopic }) {
  return (
    <div style={stage}>
      <div style={pageContainer}>
        {currentTopic.animationName && (
          <Animation animationName={currentTopic.animationName} />
        )}
      </div>
    </div>
  );
}

export default SlideContainer;
