import React, { useState } from 'react';
import TopicItem from './TopicItem';

const TopicList = ({ topics, onUpdate }) => (
  <div>
    <h2>Your Study Topics</h2>
    {topics.map((topic, index) => (
      <TopicItem key={index} topic={topic} onUpdate={onUpdate} />
    ))}
  </div>
);

export default TopicList;
