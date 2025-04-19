import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

export default function App() {
  const [users, setUsers] = useState([]);
  //fetch from db.json
  const fetchUsers = () => {
    fetch(" http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        React form+ user list
      </h1>
      <Form onUserAdded={fetchUsers} />
      <h2 className="text-xl font-semibold mt-10 mb-4 text-gray-700">
        Registered Users:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={fetchUsers} />
        ))}
      </div>
    </div>
  );
}
