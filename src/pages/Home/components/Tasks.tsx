import React, {useState} from "react";
import TaskOfTasks from "./TaskOfTasks";

interface TaskListProps {
  task: string[];
}

const Tasks: React.FC<TaskListProps> = ({ task })=> {
  const [tasks, setTasks] = useState<string>('')

  return (
    <div>
      <h5>Tasks</h5>
      {task.map((task, index)=> (
        <TaskOfTasks tasks={tasks} />
      ))}
      <input
        type="text"
        placeholder="add a new task"
        value={tasks}
        onChange={(e)=> setTasks(e.target.value)}
      />
    </div>
  );
}

export default Tasks;