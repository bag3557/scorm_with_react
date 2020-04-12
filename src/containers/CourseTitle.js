import React from 'react';

import {
  courseTitleWrap,
  courseTitleSubWrap,
  courseTitle
} from '../styles/HeaderStyles';

const CourseTitle = props => {
  return (
    <div style={courseTitleWrap}>
      <div style={courseTitleSubWrap}>
        <div style={courseTitle}>Scorm In React Course</div>
      </div>
    </div>
  );
};
export default CourseTitle;
