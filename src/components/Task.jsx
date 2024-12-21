import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Task = ({ index, task, handleRemoveTask, handleUpdateTask }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className='flex justify-evenly items-center w-9/12 h-20 rounded-[40px] bg-custom-pink p-3'
    >
      <div className='flex justify-center items-center w-1/3 gap-x-2 '>
        <input type='checkbox' />
        <p>{index + 1}</p>
      </div>
      <div className='w-1/3 p-2 m-2 '>
        <p>{task.work}</p>
      </div>
      <div className='w-1/3'>
        <button onClick={() => handleRemoveTask(index)}>Remove</button>
      </div>
      <div className='w-1/3'>
        <button onClick={() => handleUpdateTask(index)}>Update</button>
      </div>

    </div>
  );
};

export default Task;
