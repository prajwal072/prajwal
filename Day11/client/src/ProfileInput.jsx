import React, { useState } from "react";
import axios from "axios";
import "./ProfileInput.css";

const ProfileInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, age, phone, address };

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user-data`, userData);
      console.log("Profile saved successfully:", response.data);
      if(response.data.success){
        alert("Profile saved successfully!");
      } else {
        alert("Error in creating user in frontend")
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile. Please try again.");
    }
  };

  return (
    <div className="profile-input-container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileInput;
