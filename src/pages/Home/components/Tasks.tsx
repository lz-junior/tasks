import React from "react";
import ListItem from "./ListItem";

interface TaskListProps {
  task: string[];
}

const Tasks: React.FC<TaskListProps> = ({ task })=> {
  return (
    <div>
      <h3>Tasks</h3>
      {task.map((task, index)=> (
        // <ListItem key={index} task={task}/>
      ))}
    </div>
  );
}

export default Tasks;