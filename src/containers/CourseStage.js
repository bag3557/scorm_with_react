import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "./Header";
import LessonTitle from "./LessonTitle";
import SlideContainer from "./SlideContainer";
import PlayerButtons from "./PlayerButtons";
import TranscriptPane from "./TranscriptPane";
import MenuPane from "./MenuPane";

import { closeMenu } from "../actions/playerActions";

import "./CourseStage.css";

const CourseStage = ({
  closeMenu,
  transcript,
  menu,
  topics,
  topic,
  lesson,
}) => {
  const currentTopicTitle = topics[topic].title;
  const currentLessonTitle = topics[topic].screens[lesson].title;

  return (
    <div className="fullscreen_container">
      <div className="wrapper">
        <Header />
        <LessonTitle
          currentTopicTitle={currentTopicTitle}
          currentLessonTitle={currentLessonTitle}
        />
        <SlideContainer />

        <PlayerButtons />

        {transcript.isOpen && <TranscriptPane />}

        {menu.isOpen && (
          <MenuPane
            topics={topics}
            topic={topic}
            lesson={lesson}
            closeMenu={closeMenu}
          />
        )}
      </div>
    </div>
  );
};

CourseStage.propTypes = {
  transcript: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
  topics: PropTypes.array.isRequired,
  topic: PropTypes.number.isRequired,
  lesson: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  transcript: state.player.transcript,
  menu: state.player.menu,
  topics: state.course.topics,
  topic: state.course.progress.topic,
  lesson: state.course.progress.lesson,
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseStage);
