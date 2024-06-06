import React from 'react';
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, onToggleTask, onDeleteTask, filter }) => {
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };
  
  return (
    <ul>
      {getFilteredTasks().length > 0 ? (
        getFilteredTasks().map((task) => (
          <TaskItem 
            key={task.id} 
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))
        ) : (
          <p>No tasks</p>
        )}
    </ul>
  );
};

export default TaskList;
