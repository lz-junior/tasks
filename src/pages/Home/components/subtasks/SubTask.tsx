import {useState} from "react";
import classes from "./subtask.module.css";
import { toast } from "react-toastify";



const SubTask = ()=> {
  const [task, setTask] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false)

  const addSubtask = (e: any)=> {
    e.preventDefault();

    const subtaskEmpty = e.currentTarget.task.value.trim();
    if (subtaskEmpty === "") return toast.warn("Write a subtask")

    setTask([...task, e.currentTarget.task.value]);
    e.currentTarget.task.value = "";
  }
  const onCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }


  return (
    <div className={classes.container}>
      <h4>SubTask</h4>
      <ul>
        {task.map((task: any, index: any)=> (
          <li key={index} className={classes.li_subtask}>
            <input 
              type="checkbox" 
              key={index} 
              checked={isChecked}
              onChange={onCheckboxChange}/>
            <input 
              type="text" 
              key={index} 
              value={task}
              className={classes.subtask} 
              style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
              readOnly/>
          </li>
        ))}
      </ul>

      <form onSubmit={addSubtask}>
        <input 
          type="text"
          placeholder="add new subtask"
          name="task"/>
        <button type="submit">+</button>
      </form>
    </div>
  )
}

export default SubTask;