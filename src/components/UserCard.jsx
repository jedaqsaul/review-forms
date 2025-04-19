import React from "react";

export default function UserCard({ user, onDelete }) {
  function handleDelete() {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("user deleted");
        onDelete();
      })
      .catch((err) => console.error("delete failed", err));
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-blue-700">{user.username}</h3>
      <p>
        <span className="font-medium">Name:</span>
        {user.firstName} {user.lastName}
      </p>
      <p>
        <span className="font-medium">Email:</span>
        {user.email}
      </p>
      <p>
        <span className="font-medium">Gender:</span>
        {user.gender}
      </p>
      <p>
        <span className="font-medium">Course:</span>
        {user.course}
      </p>
      <button
        onClick={handleDelete}
        className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
}
