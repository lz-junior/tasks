// src/components/TaskList.tsx
import React from 'react';
import CheckList from './CheckList';



interface TaskListProps {
  tasks: string[];
}



const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index)=> (
        <li key={index}>{task}</li>
      ))}
      <button type="button">X</button>
    </ul>
  );
};

export default TaskList;