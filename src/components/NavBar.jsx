import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='flex flex-wrap justify-center md:justify-evenly border w-full md:w-9/12 h-20 mb-10 items-center text-lg md:text-3xl font-semibold rounded-[40px] p-2 md:p-0'>
      <NavLink to="/" className="w-full md:w-auto text-center">
        <p className='bg-white p-2 m-2 hover:text-orange-500 rounded-md'>Aditya's TaskBook</p>
      </NavLink>

      <NavLink to="/users" className="w-full md:w-auto text-center">
        <button className='bg-green-400 p-2 m-2 rounded-md w-full md:w-auto'>
          <p className='text-semibold text-white hover:text-black'>Check Employees</p>
        </button>
      </NavLink>
    </div>
  );
};
