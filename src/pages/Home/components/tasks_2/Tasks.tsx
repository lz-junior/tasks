import React, {useState} from "react";
import TaskOfTasks from "./TaskOfTasks";

interface TaskListProps {
  taskType?: string[];
}

const Tasks: React.FC<TaskListProps> = ({ taskType })=> {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const handleAddTask = (e:any) => {
    e.preventDefault()
    if (task.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h5>Tasks</h5>
      <ul>
        {tasks.map((task, index)=> (
          <TaskOfTasks key={index} tasks={task} />
        ))}
      </ul>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="add a new task"
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default Tasks;