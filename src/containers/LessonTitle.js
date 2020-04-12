import React from 'react';

import {
  lessonTitle,
  lessonTitleSubWrap,
  lessonTitleWrap
} from '../styles/HeaderStyles';

const LessonTitle = ({ currentTopicTitle, currentLessonTitle }) => {
  return (
    <div style={lessonTitleWrap}>
      <div style={lessonTitleSubWrap}>
        <div style={lessonTitle}>
          {currentTopicTitle} > {currentLessonTitle}
        </div>
      </div>
    </div>
  );
};

export default LessonTitle;
