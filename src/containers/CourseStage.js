import React, { Component } from "react";

import Header from "./Header";
import LessonTitle from "./LessonTitle";
import SlideContainer from "./SlideContainer";
import PlayerButtons from "./PlayerButtons";
import "./CourseStage.css";

export class CourseStage extends Component {
  render() {
    return (
      <div className="fullscreen_container">
        <div className="wrapper">
          <Header />
          <LessonTitle />
          <SlideContainer />

          <PlayerButtons />
        </div>
      </div>
    );
  }
}

export default CourseStage;
