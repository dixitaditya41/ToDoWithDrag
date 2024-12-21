import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.escuelajs.co/api/v1/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="bg-custom-pink p-6 w-9/12 rounded-[40px]">
      <h2 className="text-black text-center text-xl font-bold mb-4">User List</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left border border-gray-300">Name</th>
            <th className="px-4 py-2 text-left border border-gray-300">Email</th>
            <th className="px-4 py-2 text-left border border-gray-300">Roles</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{user.name}</td>
              <td className="px-4 py-2 border border-gray-300">{user.email}</td>
              <td className="px-4 py-2 border border-gray-300">
                {user.roles ? user.roles.join(', ') : 'User'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
