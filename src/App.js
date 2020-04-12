import React, { Component } from "react";
import Radium from "radium";

import Scorm from "./scorm/Scorm";
import {
  fullscreen_container,
  fullscreen_subContainer,
  loaderStage,
  launchBtn,
  loader,
  loaderImg
} from "./AppStyles";

import loading from "./images/loading.gif";
import CourseStage from "./containers/CourseStage";

class App extends Component {
  constructor(props) {
    super(props);
    Scorm.init();
    this.state = {
      learnerName: Scorm.getLearnerName(),
      courseStarted: false,
      lessonStarted: false
    };
  }

  finish() {
    Scorm.finish();
  }

  startCourse = () => {
    this.setState({ courseStarted: true, lessonStarted: true });
  };

  render() {
    const { courseStarted, lessonStarted } = this.state;

    return (
      <React.Fragment>
        {courseStarted ? (
          lessonStarted ? (
            <CourseStage />
          ) : (
            <div style={loaderStage}>
              <div style={loader}>
                <img alt="loading" style={loaderImg} src={loading}></img>
              </div>
            </div>
          )
        ) : (
          <div style={fullscreen_container}>
            <div style={fullscreen_subContainer}>
              <div style={launchBtn} onClick={this.startCourse}></div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Radium(App);
