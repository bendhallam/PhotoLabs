import React from "react";
import "../styles/TopicList.scss";
import "../styles/TopicListItem.scss";

const TopicList = ({topics, onTopicSelect}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <div className="topic-list__item" key={topic.id} onClick={() => onTopicSelect(topic.id)}>
          {topic.title}
        </div>
      ))}
    </div>
  );
};

export default TopicList;