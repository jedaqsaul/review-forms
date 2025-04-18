🛣️ React Form + Backend Project Roadmap

1. Create the project folder and structure
   Setup with create-react-app

Made folders like: components, Form.jsx, UserCard.jsx, etc.

2. Build a basic form
   Used useState to store each input (like firstName, lastName)

Made the form controlled using value and onChange

Added a handleSubmit function to capture the form data

3. Combine form inputs into one formData object
   Used a single useState for all form inputs

Updated each input field with name attribute and a shared handleChange

4. Setup a fake backend using json-server
   Installed json-server

Created db.json to store user data

Ran it with:

bash
Copy
Edit
npx json-server --watch db.json --port 3001 5. POST form data to the backend
In handleSubmit, used fetch() to send a POST request to db.json

6. Create a UserCard component
   This component receives a user object as props and displays the data

7. Fetch and display all users in App.jsx
   Used useEffect to fetch() users from db.json

Stored users in users state

Mapped over the array and rendered a UserCard for each one

8. Auto-refresh user list after form submission
   Passed a function (fetchUsers) from App to Form as a prop

Called it in Form after submitting a new user → live update!
