import React from "react";

const PersonalInfo = () => {
  return (
    <div className="section">
      <h2>Personal Information</h2>
      <label>Full Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Phone</label>
      <input type="tel" />
    </div>
  );
};

export default PersonalInfo;
