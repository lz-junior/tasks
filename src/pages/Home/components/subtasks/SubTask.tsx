import {useState} from "react";
import classes from "./subtask.module.css";
import { IoIosAddCircleOutline  } from "react-icons/io";
import { toast } from "react-toastify";


interface SubtaskProps {
  saveSubtask: string;
}


const SubTask: React.FC<SubtaskProps> = ({ saveSubtask })=> {
  const [task, setTask] = useState<string[]>([]);
  const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>(Array(saveSubtask.length).fill(false))

  const addSubtask = (e: any)=> {
    e.preventDefault();

    const subtaskEmpty = e.currentTarget.task.value.trim();
    if (subtaskEmpty === "") return toast.warn("Write a subtask")

    setTask([...task, e.currentTarget.task.value]);
    e.currentTarget.task.value = "";
  }
  const toggleCheckbox = (index:number)=> {
    setCheckedIndexes(prev => {
      const newCheckedIndexes = [...prev];
      newCheckedIndexes[index] = !newCheckedIndexes[index];
      return newCheckedIndexes;
    });
  }


  return (
    <div className={classes.container}>
      <h4>SubTask</h4>

      <ul>
        {task.map((task: string, index: number)=> (
          <li key={index} className={classes.li_subtask}>
            <input 
              type="checkbox"
              style={{opacity: checkedIndexes[index] ? '0.4' : '1'}}
              checked={checkedIndexes[index]}
              onChange={()=> toggleCheckbox(index)}/>
            <input 
              type="text"
              value={task}
              className={classes.subtask} 
              readOnly
              style={{ 
                textDecoration: checkedIndexes[index] ? 'line-through' : 'none',
                opacity: checkedIndexes[index] ? '0.4' : '1' 
              }}/>
          </li>
        ))}
      </ul>

      <form onSubmit={addSubtask} className={classes.form}>
        <input 
          type="text"
          placeholder="add new subtask"
          name="task"/>
        <button type="submit"><IoIosAddCircleOutline /></button>
      </form>
    </div>
  )
}

export default SubTask;