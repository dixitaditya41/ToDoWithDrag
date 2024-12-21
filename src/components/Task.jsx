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
      className='flex flex-col md:flex-row justify-between items-center w-full md:w-9/12 h-auto md:h-20 rounded-lg bg-custom-pink p-4 gap-4'
    >
      
      <div className='flex items-center gap-x-2'>
        <input type='checkbox' className='w-4 h-4' />
        <p className='text-sm md:text-base font-semibold'>{index + 1}</p>
      </div>

      
      <div className='text-center flex-1'>
        <p className='text-sm md:text-base'>{task.work}</p>
      </div>

    
      <div className='flex justify-end gap-2'>
        <button
          onClick={() => handleRemoveTask(index)}
          className='px-4 py-2 bg-red-500 text-white rounded-lg text-sm md:text-base hover:bg-red-600'
        >
          Remove
        </button>
        <button
          onClick={() => handleUpdateTask(index)}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg text-sm md:text-base hover:bg-blue-600'
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Task;
