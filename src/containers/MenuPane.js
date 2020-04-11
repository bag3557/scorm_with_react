import React from "react";
import PropTypes from "prop-types";

import "./MenuPane.css";

const MenuPane = ({ closeMenu, topics }) => {
  return (
    <div className="menuPane">
      <div className="menuCloseBtnBg"></div>
      <div className="menuCloseBtn" onClick={closeMenu}>
        X
      </div>
      <div className="header">
        <div className="topics">Topic Name</div>
        <div className="subTopics">Subtopic Name</div>
        <div className="pages">Pages</div>
      </div>
      <div className="topicsContainer">
        <div className="topicSubCont">
          {topics.map((topic) => {
            const lessons = topic.screens.map((screen, index) => (
              <div key={screen.title} className="p1 pageTitleCont">
                <div className="pageTitle">{screen.title}</div>
                <div className="pageNum">{index + 1}</div>
              </div>
            ));
            return (
              <div key={topic.title}>
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
};

MenuPane.propTypes = {
  topics: PropTypes.array.isRequired,
  topic: PropTypes.number.isRequired,
  lesson: PropTypes.number.isRequired,
};

export default MenuPane;
