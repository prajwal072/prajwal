import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileDisplay.css";

const ProfileDisplay = () => {
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState(""); // State for name input
  const [error, setError] = useState(""); // State for error message

  const fetchProfile = async () => {
    if (!name) {
      setError("Please enter a name to fetch the profile.");
      return;
    }
    try {
      
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user-data/${name}`);
      if (response.data.success) {
        setUserData(response.data.user);
        setError(""); 
      } else {
        setError("Profile not found.");
      }
    } catch (error) {
      setError("Failed to load profile. Please try again.");
      console.error("Error fetching profile data:", error);
    }
  };

  return (
    <div className="profile-display-container">
      <h2>User Profile</h2>
      
      {/* Input box and button */}
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update name state
      />
      <button onClick={fetchProfile}>Fetch Profile</button>
      
      {/* Display error message if any */}
      {error && <p className="error-message">{error}</p>}
      
      {/* Display profile data if available */}
      {userData ? (
        <div>
          <p><strong>Name:</strong> {userData.name}</p> 
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Address:</strong> {userData.address}</p>
        </div>
      ) : (
        !error && <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default ProfileDisplay;
