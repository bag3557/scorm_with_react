import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  openTranscript,
  closeTranscript,
  openMenu,
  closeMenu,
} from "../actions/playerActions";
import "./PlayerButtons.css";

function PlayerButtons({
  isPlayerEnabled,
  openTranscript,
  closeTranscript,
  openMenu,
  closeMenu,
  transcript,
  menu,
  audio,
  replay,
  pause,
  back,
  next,
}) {
  const onTranscriptClick = () =>
    !transcript.isOpen ? openTranscript() : closeTranscript();

  const onMenuClick = () => {
    !menu.isOpen ? openMenu() : closeMenu();
  };

  return (
    <div className="footer">
      <ul>
        <div align="center">
          <li
            className={menu.isEnabled ? "menuBtn" : "menuBtnDisabled"}
            onClick={onMenuClick}
          ></li>
          <li
            className={
              transcript.isEnabled ? "transcriptBtn" : "transcriptBtnDisabled"
            }
            onClick={onTranscriptClick}
          ></li>
          <li
            className={audio.isEnabled ? "audioBtn" : "audioBtnDisabled"}
            // onClick={onAudioClick}
          ></li>
          <div className="volumeSlider"></div>
          <li
            className={replay.isEnabled ? "replayBtn" : "replayBtnDisabled"}
          ></li>
          <li
            className={pause.isEnabled ? "pauseBtn" : "pauseBtnDisabled"}
          ></li>
          <li className={back.isEnabled ? "backBtn" : "backBtnDisabled"}></li>
          <div className="pagecounter">
            <div className="currentPageNum">Page 00/00</div>
          </div>
          <li className={next.isEnabled ? "nextBtn" : "nextBtnDisabled"}></li>
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
};

const mapStateToProps = (state) => ({
  transcript: state.player.transcript,
  menu: state.player.menu,
  audio: state.player.audio,
  replay: state.player.replay,
  pause: state.player.pause,
  back: state.player.back,
  next: state.player.next,
  isPlayerEnabled: state.player,
});

const mapDispatchToProps = {
  openTranscript: openTranscript,
  closeTranscript: closeTranscript,
  openMenu: openMenu,
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerButtons);
