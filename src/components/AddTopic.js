import React, { useState } from 'react';

const AddTopic = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [resource, setResource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, resource, status: 'In Progress' });
    setTitle('');
    setDescription('');
    setResource('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Topic Title" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={resource} onChange={(e) => setResource(e.target.value)} placeholder="Resource Link" />
      <button type="submit">Add Topic</button>
    </form>
  );
};

export default AddTopic;
