import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const TopicList = ({topics, onTopicSelect}) => {
  console.log(topics); // Add this to debug
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