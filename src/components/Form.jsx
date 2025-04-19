import React, { useState } from "react";

export default function Form({ onUserAdded }) {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    course: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User saved", data);
        alert("User submitted successfully");
        setFormData({
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          course: "",
        });

        // refresh the user list
        onUserAdded();
      })
      .catch((err) => {
        console.error("Failed to submit", err);
      });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <div className="grid">
          <label>
            <input
              type="radio"
              name="gender"
              placeholder="Username"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              placeholder="Username"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            Female
          </label>
        </div>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
