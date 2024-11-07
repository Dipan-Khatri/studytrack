import React from 'react';

const TopicItem = ({ topic, onUpdate }) => {
  const { title, description, resource, status } = topic;

  const handleStatusChange = () => {
    onUpdate({ ...topic, status: status === 'In Progress' ? 'Completed' : 'In Progress' });
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {resource && <a href={resource} target="_blank" rel="noopener noreferrer">Resource</a>}
      <p>Status: {status}</p>
      <button onClick={handleStatusChange}>
        Mark as {status === 'In Progress' ? 'Completed' : 'In Progress'}
      </button>
    </div>
  );
};

export default TopicItem;
