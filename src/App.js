import './App.css';
import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import ShowSection from './components/ShowSection';
import { Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';



function App() {
  const initialTasks = [
    { id: 1, work: "It has Drag and drop funcionality" },
    { id: 2, work: "Double Tick to Remove" },
    { id: 3, work: "Check by Clicking on Remove here" },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="flex flex-col justify-center items-center mt-8 h-full w-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<ShowSection tasks={tasks} setCurrTask={setTasks} />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
  
}

export default App;
