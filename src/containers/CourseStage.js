import React, { Component } from "react";

import Header from "./Header";
import LessonTitle from "./LessonTitle";
import SlideContainer from "./SlideContainer";
import PlayerButtons from "./PlayerButtons";
import TranscriptPane from "./TranscriptPane";
import "./CourseStage.css";

class CourseStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTranscriptOpen: false,
      isHelpOpen: false,
      enablePlayer: true,
      enableHeader: true,
      isExitPopupOpen: false,
    };
  }

  toggleTranscript = () =>
    this.setState({
      enablePlayer: !this.state.enablePlayer,
      enableHeader: !this.state.enableHeader,
      isTranscriptOpen: !this.state.isTranscriptOpen,
    });

  toggleHelp = () =>
    this.setState({
      enablePlayer: !this.state.enablePlayer,
      enableHeader: !this.state.enableHeader,
      isHelpOpen: !this.state.isHelpOpen,
    });

  toggleExitConfirmation = () => {
    this.setState({
      enablePlayer: !this.state.enablePlayer,
      enableHeader: !this.state.enableHeader,
      isExitPopupOpen: !this.state.isExitPopupOpen,
    });
  };

  render() {
    const {
      isTranscriptOpen,
      enablePlayer,
      isHelpOpen,
      enableHeader,
      isExitPopupOpen,
    } = this.state;
    return (
      <div className="fullscreen_container">
        <div className="wrapper">
          <Header
            toggleHelp={this.toggleHelp}
            toggleExitConfirmation={this.toggleExitConfirmation}
            enableHeader={enableHeader}
            isHelpOpen={isHelpOpen}
            isExitPopupOpen={isExitPopupOpen}
          />
          <LessonTitle />
          <SlideContainer />

          <PlayerButtons
            enablePlayer={enablePlayer}
            toggleTranscript={this.toggleTranscript}
          />

          {isTranscriptOpen && (
            <TranscriptPane toggleTranscript={this.toggleTranscript} />
          )}
        </div>
      </div>
    );
  }
}

export default CourseStage;
