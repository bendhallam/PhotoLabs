import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ slug, label }) => {
  return (
    <div className="topic-list__item">
      <a href={`/${slug}`}>{label}</a>
    </div>
  );
};

export default TopicListItem;