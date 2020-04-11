import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { closeMenu } from "../actions/playerActions";

import "./MenuPane.css";
import { topics } from "../courseMap";

function MenuPane({ closeMenu }) {
  return (
    <div className="menuPane">
      <div className="menuCloseBtnBg"></div>
      <div className="menuCloseBtn" onClick={closeMenu}>
        X
      </div>
      <div className="header">
        <div className="topics">Topics</div>
        <div className="subTopics">Sub Topics</div>
        <div className="pages">Pages</div>
      </div>
      <div className="topicsContainer">
        <div className="topicSubCont">
          {topics.map((topic) => {
            const lessons = topic.screens.map((screen, index) => (
              <div id="en_0_0_1" className="p1 pageTitleCont">
                <div className="pageTitle">{screen.title}</div>
                <div className="pageNum">{index + 1}</div>
              </div>
            ));
            return (
              <div>
                <div className="topicTitleCont">
                  <div className="topicTitle">{topic.title}</div>
                </div>
                {lessons}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  closeMenu: closeMenu,
};
export default connect(null, mapDispatchToProps)(MenuPane);
