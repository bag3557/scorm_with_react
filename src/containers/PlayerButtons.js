import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  openTranscript,
  closeTranscript,
  openMenu,
  closeMenu,
  disableNextButton,
  enableNextButton,
  disableBackButton,
  enableBackButton
} from '../actions/playerActions';

import { loadNextSlide, loadPrevSlide } from '../actions/courseActions';

import {
  getSlidesCount,
  getCurrentSlideNumber,
  getNextSlideCount,
  getBackSlideCount
} from '../utils';

import {
  footer,
  menuBtn,
  menuBtnDisabled,
  transcriptBtn,
  transcriptBtnDisabled,
  audioBtn,
  audioBtnDisabled,
  volumeSlider,
  replayBtn,
  replayBtnDisabled,
  pauseBtn,
  pauseBtnDisabled,
  backBtn,
  backBtnDisabled,
  nextBtn,
  nextBtnDisabled,
  pagecounter,
  currentPageNum
} from '../styles/PlayerButtonsStyles.js';

function PlayerButtons({
  topics,
  topic,
  lesson,
  isPlayerEnabled,
  transcript,
  menu,
  audio,
  replay,
  pause,
  back,
  next,
  openTranscript,
  closeTranscript,
  loadNextSlide,
  loadPrevSlide,
  disableBackButton,
  enableBackButton,
  disableNextButton,
  enableNextButton,
  openMenu,
  closeMenu
}) {
  const totalSlides = getSlidesCount(topics);
  const currentSlide = getCurrentSlideNumber(topics, topic, lesson);

  const onTranscriptClick = () => {
    !transcript.isOpen && transcript.isEnabled && openTranscript();
    transcript.isOpen && transcript.isEnabled && closeTranscript();
  };

  const onMenuClick = () => {
    !menu.isOpen && menu.isEnabled && openMenu();
    menu.isOpen && menu.isEnabled && closeMenu();
  };

  const onNextClick = () => {
    const nextSlideNumber = getNextSlideCount(topics, topic, lesson);
    if (next.isEnabled) {
      loadNextSlide({
        topic: nextSlideNumber.topic,
        lesson: nextSlideNumber.lesson
      });
      enableBackButton();
      if (totalSlides === currentSlide + 1) {
        disableNextButton();
      }
    }
  };

  const onBackClick = () => {
    const backSlideNumber = getBackSlideCount(topics, topic, lesson);
    if (back.isEnabled) {
      loadPrevSlide({
        topic: backSlideNumber.topic,
        lesson: backSlideNumber.lesson
      });
      enableNextButton();
      if (currentSlide - 2 === 0) {
        disableBackButton();
      }
    }
  };

  return (
    <div style={footer}>
      <ul>
        <div align="center">
          <li
            style={menu.isEnabled ? menuBtn : menuBtnDisabled}
            onClick={onMenuClick}
          ></li>
          <li
            style={transcript.isEnabled ? transcriptBtn : transcriptBtnDisabled}
            onClick={onTranscriptClick}
          ></li>
          <li
            style={audio.isEnabled ? audioBtn : audioBtnDisabled}
            // onClick={onAudioClick}
          ></li>
          <div style={volumeSlider}></div>
          <li style={replay.isEnabled ? replayBtn : replayBtnDisabled}></li>
          <li style={pause.isEnabled ? pauseBtn : pauseBtnDisabled}></li>
          <li
            style={back.isEnabled ? backBtn : backBtnDisabled}
            onClick={onBackClick}
          ></li>
          <div style={pagecounter}>
            <div style={currentPageNum}>
              Page {currentSlide}/{totalSlides}
            </div>
          </div>
          <li
            style={next.isEnabled ? nextBtn : nextBtnDisabled}
            onClick={onNextClick}
          ></li>
        </div>
      </ul>
    </div>
  );
}

PlayerButtons.propTypes = {
  transcript: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
  audio: PropTypes.object.isRequired,
  replay: PropTypes.object.isRequired,
  pause: PropTypes.object.isRequired,
  back: PropTypes.object.isRequired,
  next: PropTypes.object.isRequired,
  topics: PropTypes.array.isRequired,
  topic: PropTypes.number.isRequired,
  lesson: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  transcript: state.player.transcript,
  menu: state.player.menu,
  audio: state.player.audio,
  replay: state.player.replay,
  pause: state.player.pause,
  back: state.player.back,
  next: state.player.next,
  topics: state.course.topics,
  topic: state.course.progress.topic,
  lesson: state.course.progress.lesson
});

const mapDispatchToProps = {
  openTranscript: openTranscript,
  closeTranscript: closeTranscript,
  openMenu: openMenu,
  closeMenu: closeMenu,
  loadNextSlide: loadNextSlide,
  disableNextButton: disableNextButton,
  enableNextButton: enableNextButton,
  loadPrevSlide: loadPrevSlide,
  disableBackButton: disableBackButton,
  enableBackButton: enableBackButton
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerButtons);
