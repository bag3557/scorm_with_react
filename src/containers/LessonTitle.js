import React from "react";

const LessonTitle = ({ currentTopicTitle, currentLessonTitle }) => {
  return (
    <div className="lessonTitleWrap">
      <div className="lessonTitleSubWrap">
        <div className="lessonTitle">
          {currentTopicTitle} > {currentLessonTitle}
        </div>
      </div>
    </div>
  );
};

export default LessonTitle;
