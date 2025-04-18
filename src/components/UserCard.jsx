import React from "react";
import "./UserCard.css";

export default function UserCard({ user }) {
  {
  }
  return (
    <div className="user-card">
      <h3>{user.username}</h3>
      <p>
        <strong>Name:</strong>
        {user.firstName} {user.lastName}
      </p>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>Gender:</strong>
        {user.gender}
      </p>
      <p>
        <strong>Course:</strong>
        {user.course}
      </p>
    </div>
  );
}
