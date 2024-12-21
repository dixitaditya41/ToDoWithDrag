import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, setTasks, updateTask } from '../redux/taskSlice';
import Task from './Task';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable';

const ShowSection = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [taskInput, setTaskInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [updatedTaskInput, setUpdatedTaskInput] = useState('');

  const addNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      work: taskInput,
    };
    dispatch(addTask(newTask));
    setTaskInput('');
  };

  const handleRemoveTask = (index) => {
    dispatch(removeTask(index));
  };

  const openUpdateModal = (index) => {
    const taskToEdit = tasks[index];
    setCurrentTask(taskToEdit);
    setUpdatedTaskInput(taskToEdit.work);
    setIsModalOpen(true);
  };

  const handleUpdateTask = () => {
    if (currentTask && updatedTaskInput.trim()) {
      dispatch(updateTask({ id: currentTask.id, updatedWork: updatedTaskInput.trim() }));
      setIsModalOpen(false);
      setCurrentTask(null);
      setUpdatedTaskInput('');
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      const newTasks = arrayMove(tasks, oldIndex, newIndex);
      dispatch(setTasks(newTasks));
    }
  };

  return (
    <div className='flex flex-col justify-center mt-4 h-full items-center border w-full md:w-9/12 rounded-[20px] md:rounded-[40px] px-4'>
      <DndContext onDragEnd={handleDragEnd} strategy={closestCorners}>
        <SortableContext items={tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
          <div className='p-4 w-full'>
            <form onSubmit={addNewTask} className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
              <div className="flex items-center border w-full md:w-7/12 rounded-full px-4 py-2 gap-4 bg-transparent">
                <input
                  type="text"
                  value={taskInput}
                  className="w-full h-10 rounded-full px-4 bg-transparent outline-none text-black"
                  onChange={(e) => setTaskInput(e.target.value)}
                  required
                  placeholder="Add One More Task"
                />
                <button
                  className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className='flex flex-col justify-center mt-4 w-full h-full items-center gap-y-2 p-3'>
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                handleRemoveTask={handleRemoveTask}
                handleUpdateTask={() => openUpdateModal(index)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
            <h2 className="text-lg font-semibold mb-4">Update Task</h2>
            <input
              type="text"
              value={updatedTaskInput}
              onChange={(e) => setUpdatedTaskInput(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateTask}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowSection;
