import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Task {
  id: number;
  name: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};


const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: state.tasks.length + 1,
        name: action.payload,
      };
      state.tasks.push(newTask);
    },
    // Outros reducers para tarefas, como editar ou remover, podem ser adicionados aqui
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;