// reducers/reducers.js

import { combineReducers } from 'redux';
import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK, FILTER_TASKS, SORT_TASKS } from '../actions/actions';

const initialState = {
  tasks: [],
  filter: 'all',
  sort: 'none'
};

const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      return state.map(task =>
        task.id === action.payload.taskId ? action.payload.updatedTask : task
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case FILTER_TASKS:
      return action.payload;
    default:
      return state;
  }
};

const sortReducer = (state = initialState.sort, action) => {
  switch (action.type) {
    case SORT_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
  sort: sortReducer
});
