import React, { useState } from "react";
import AnimateCC from "react-adobe-animate";

const Animation = ({ animationName }) => {
  const [, setAnimationObject] = useState(null);
  const getAnimationObject = (obj) => setAnimationObject(obj);

  return (
    <div style={{ width: "50%" }}>
      <AnimateCC
        animationName={animationName}
        getAnimationObject={getAnimationObject}
        paused={false}
      />
    </div>
  );
};

export default Animation;
