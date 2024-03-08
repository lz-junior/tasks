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
        <CheckList key={index} task={task}/>
      ))}
    </ul>
  );
};

export default TaskList;