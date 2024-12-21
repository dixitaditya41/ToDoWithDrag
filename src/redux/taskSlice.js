import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, work: "Drag and Drop Functionality" },
    { id: 2, work: "Double Tick to Remove and Update" },
    { id: 3, work: "Check by Clicking on Remove here" },
    { id: 4, work: "Click Check Employees to show Employees" },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    
    updateTask: (state, action) => {
      const { id, updatedWork } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.work = updatedWork;
      }
    },
  },
});

export const { addTask, removeTask, setTasks, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
