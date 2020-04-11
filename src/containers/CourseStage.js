import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "./Header";
import LessonTitle from "./LessonTitle";
import SlideContainer from "./SlideContainer";
import PlayerButtons from "./PlayerButtons";
import TranscriptPane from "./TranscriptPane";
import MenuPane from "./MenuPane";

import "./CourseStage.css";

class CourseStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpOpen: false,
      enablePlayer: true,
      enableHeader: true,
      isExitPopupOpen: false,
    };
  }

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
      enablePlayer,
      isHelpOpen,
      enableHeader,
      isExitPopupOpen,
    } = this.state;

    const { transcript, menu, isPlayerEnabled } = this.props;

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

          <PlayerButtons />

          {transcript.isOpen && <TranscriptPane />}

          {menu.isOpen && <MenuPane />}
        </div>
      </div>
    );
  }
}

CourseStage.propTypes = {
  transcript: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
  isPlayerEnabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  transcript: state.player.transcript,
  menu: state.player.menu,
  isPlayerEnabled: state.player.isPlayerEnabled,
});

export default connect(mapStateToProps, null)(CourseStage);
