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
  const [isChecked, setIsChecked] = useState<boolean[]>(Array(saveTask.length).fill(false));
  const [subtask, setSubtask] = useState<number | null>(null);
  
  const openSubTask = (index: number)=> {
    setSubtask(subtask === index ? null : index)
  }

  const toggleCheckbox = (index:number)=> {
    setIsChecked(prev => {
      const newIsChecked = [...prev];
      newIsChecked[index] = !newIsChecked[index];
      return newIsChecked;
    });
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
        {saveTask.map((task, index)=> (
          <div className={classes.container} key={index}>
            <div className={classes.task}>
              <input
                type="checkbox"
                style={{opacity: isChecked[index] ? '0.4' : '1'}}
                checked={isChecked[index]}
                onChange={()=> toggleCheckbox(index)}
              />
              <button 
                style={{ 
                  textDecoration: isChecked[index] ? 'line-through' : 'none',
                  opacity: isChecked[index] ? '0.4' : '1' 
                }}
                onClick={()=> openSubTask(index)}
                >
                  {task}
              </button>
            </div>

          {subtask === index && (
            <div className={classes.subtask}>
              <SubTask />
            </div>
          )}
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