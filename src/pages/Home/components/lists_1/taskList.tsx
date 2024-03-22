// src/components/TaskList.tsx
import React from 'react';
import ListItem from './ListItem';




interface TaskListProps {
  tasks: string[];
}



const TaskList: React.FC<TaskListProps> = ({ tasks })=> {
  return (
    <ul>
      {tasks.map((task, index)=> (
        <ListItem key={index} task={task}/>
        ))}
    </ul>
  );
};

export default TaskList;