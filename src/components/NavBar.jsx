import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='flex justify-evenly border w-9/12 h-20 mb-10 flex justify-center items-center text-3xl font-semibold rounded-[40px]'>
      <NavLink to="/"> <p className='bg-white p-2 m-2 hover:text-orange-500' >Aditya's TaskBook</p>  </NavLink>

      <NavLink to="/users">
        <button  className='bg-green-400 p-2 m-2'>
         <p className='text-semibold text-white hover:text-black'> Check Employees</p> 
        </button>
      </NavLink>
    </div>
  );
};
