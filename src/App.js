import React, { useState } from 'react';
import AddTopic from './components/AddTopic';
import TopicList from './components/TopicList';

function App() {
  const [topics, setTopics] = useState([]);

  const addTopic = (topic) => {
    setTopics([...topics, topic]);
  };

  const updateTopic = (updatedTopic) => {
    setTopics(
      topics.map((topic) => (topic.title === updatedTopic.title ? updatedTopic : topic))
    );
  };

  return (
    <div>
      <h1>StudyTrack</h1>
      <AddTopic onAdd={addTopic} />
      <TopicList topics={topics} onUpdate={updateTopic} />
    </div>
  );
}

export default App;
