// components/TaskForm.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !priority || !dueDate) return;
    addTask({ title, description, priority, dueDate, completed: false });
    setTitle('');
    setDescription('');
    setPriority('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default connect(null, { addTask })(TaskForm);
