import React, { useState } from "react";
import SubTask from "../subtasks/SubTask";
import { IoIosAddCircleOutline  } from "react-icons/io";
import classes from "./tasks.module.css"



interface TaskListProps {
  saveTask: string[];
  onAddTask: (newTask: string)=> void;
}



const Tasks: React.FC<TaskListProps> = ({ saveTask, onAddTask })=> {
  const [task, setTask] = useState<string>('');
  const [isChecked, setIsChecked] = useState(false);

  const [subtask, setSubtask] = useState(false);

  const openSubTask = ()=> {
    setSubtask(!subtask)
  }

  const handleCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }

  const handleAddTask = (e:React.FormEvent) => {
    e.preventDefault()
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };


  return (
    <div className={classes.containerTasks}>
      <h3>Tasks</h3>

      <ul>
        {saveTask.map((task)=> (
          <div className={classes.container}>
          <div className={classes.task}>
            <input
              type="checkbox"
              style={{opacity: isChecked ? '0.4' : '1'}}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <button 
              style={{ 
                textDecoration: isChecked ? 'line-through' : 'none',
                opacity: isChecked ? '0.4' : '1' 
              }}
              onClick={openSubTask}
              >
                {task}
            </button>
    
          </div>
          {
            subtask && 
            <div className={classes.subtask}>
              {subtask && <SubTask/>}
            </div>
          }
        </div>
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