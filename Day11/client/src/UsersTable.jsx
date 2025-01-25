import React, { useState } from "react";
import axios from "axios";
import "./UsersTable.css";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/users`);
      if (response.data.success) {
        setUsers(response.data.users);
        setError("");
        console.log("users fetched !")
      } else {
        setError("No users found.");
        console.log("error in fetching users")
      }
    } catch (error) {
      setError("Failed to fetch users. Please try again.");
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="users-table-container">
      <button className="fetch-users-btn" onClick={fetchUsers}>
        Get all Users
      </button>
      {error && <p className="error-message">{error}</p>}

      {/* Display table when users data is fetched */}
      {users.length > 0 && (
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
