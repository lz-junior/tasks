// src/App.tsx
import React, { useState } from 'react';
import TaskList from './components/taskList.tsx';



const Home: React.FC = ()=> {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;





// import React from 'react';
// import Header from '../../components/Header';
// import { useState } from 'react';
// import './home.css';


// interface AddTaskFormProps {
//   onAddTask: (task: string)=> void;
// }



// const Home: React.FC<AddTaskFormProps> = ({ onAddTask })=> {
//   const [task, setTask] = useState('');
  

//   const handleAddTask = ()=> {
//     if(task.trim() !== '') {
//       onAddTask(task);
//       setTask('');
//     }
//   }
  

//   return (
//     <div>
//       <Header/>
//       <input
//         type="text"
//         value={task}
//         onChange={(e)=> setTask(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button onClick={handleAddTask} >Add</button>
//     </div>
//   )
// };

// export default Home;