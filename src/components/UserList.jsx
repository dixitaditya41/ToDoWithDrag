import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.escuelajs.co/api/v1/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="bg-custom-pink p-6 w-full md:w-9/12 rounded-[40px] mx-auto">
      <h2 className="text-black text-center text-xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse hidden md:table">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border border-gray-300">Name</th>
              <th className="px-4 py-2 text-left border border-gray-300">Email</th>
              <th className="px-4 py-2 text-left border border-gray-300">Roles</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
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
        {/* Mobile View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <p>
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Roles:</span>{' '}
                {user.roles ? user.roles.join(', ') : 'User'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
