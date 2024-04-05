import React, {useState} from "react";
import TaskOfTasks from "./TaskOfTasks";
import { IoIosAddCircleOutline  } from "react-icons/io";
import classes from "./tasks.module.css"

interface TaskListProps {
  saveTask: string[];
  onAddTask: (newTask: string)=> void;
}

const Tasks: React.FC<TaskListProps> = ({ saveTask, onAddTask })=> {
  const [task, setTask] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  const handleAddTask = (e:React.FormEvent) => {
    e.preventDefault()
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };
  const handleCheckboxChange = (index: number)=> {
    setIsChecked(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };


  return (
    <div className={classes.containerTasks}>
      <h3>Tasks</h3>

      <ul>
        {saveTask.map((task, index)=> (
          <TaskOfTasks 
            key={index} 
            tasks={task} 
            isChecked={isChecked[index] || false} 
            onCheckboxChange={()=> handleCheckboxChange(index)}/>
        ))}
      </ul>

      <form onSubmit={handleAddTask} className={classes.form}>
        <input
          type="text"
          placeholder="add a new task"
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <button type="submit"><IoIosAddCircleOutline /></button>
      </form>
    </div>
  );
}

export default Tasks;