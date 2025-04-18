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
    <div className="App">
      <Form onUserAdded={fetchUsers} />
      <h2>Registered Users:</h2>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
