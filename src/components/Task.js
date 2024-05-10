// src/components/Task.js

import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/actions';

function Task({ task, deleteTask, toggleTask }) {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggle = () => {
    toggleTask(task.id);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default connect(null, { deleteTask, toggleTask })(Task);
