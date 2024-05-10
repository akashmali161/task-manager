// components/TaskList.js

import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { filterTasks, sortTasks } from '../actions/actions';

function TaskList({ tasks, filter, sort, filterTasks, sortTasks }) { // Added sort prop
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.slice().sort((a, b) => {
    if (sort === 'priority') return a.priority - b.priority;
    if (sort === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
    return 0;
  });

  return (
    <div>
      <div>
        <label>Filter: </label>
        <select onChange={(e) => filterTasks(e.target.value)} value={filter}> {/* Added value prop */}
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div>
        <label>Sort By: </label>
        <select onChange={(e) => sortTasks(e.target.value)} value={sort}> {/* Added value prop */}
          <option value="none">None</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <ul>
        {sortedTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  filter: state.filter,
  sort: state.sort
});

export default connect(mapStateToProps, { filterTasks, sortTasks })(TaskList);
