// components/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
