import React, { Component } from "react";
import "./App.css";
import Scorm from "./scorm/Scorm";

import CourseStage from "./containers/CourseStage";

class App extends Component {
  constructor(props) {
    super(props);
    Scorm.init();
    this.state = {
      learnerName: Scorm.getLearnerName(),
      courseStarted: false,
      lessonStarted: false,
    };
  }

  finish() {
    Scorm.finish();
  }

  updateAssesment(correct, response) {
    // Scorm.submitMCQ(correct, response);
  }

  startCourse = () => {
    this.setState({ courseStarted: true, lessonStarted: true });
    // setTimeout(() => {
    //   this.setState({ lessonStarted: true });
    // }, 200);
  };

  render() {
    const { courseStarted, lessonStarted } = this.state;
    return (
      <React.Fragment>
        {courseStarted ? (
          lessonStarted ? (
            <CourseStage />
          ) : (
            <div className="loaderStage">
              <div className="loader">
                <img alt="loading" src="/images/loading.gif"></img>
              </div>
            </div>
          )
        ) : (
          <div className="fullscreen_container">
            <div className="fullscreen_subContainer">
              <div className="launchBtn" onClick={this.startCourse}></div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
