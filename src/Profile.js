import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
const logout = () => {
  localStorage.clear(); 

  window.location.href = '/login';
}

const profile = () => {
  if (localStorage.getItem('username') === null || localStorage.getItem('password') === null) {
      return (
        <div className="profile-container">
          <h1>Please login to view your profile</h1>
          <Link to="/login" className='name'>Login</Link>
        </div>
      );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-content">
        <p>Welcome to your profile!</p>
        <p>Here you can manage your account settings and preferences.</p>
        <p><span>Username:</span> {localStorage.getItem('username')}</p>
<p><span>Password:</span> {localStorage.getItem('password')}</p>
<p><span>Email:</span> {localStorage.getItem('email')}</p>
<p><span>College:</span> {localStorage.getItem('college')}</p>
<p><span>Branch:</span> {localStorage.getItem('branch')}</p>
<p><span>Year:</span> {localStorage.getItem('year')}</p>

      </div>
      <div className="profile-footer">
        <button onClick={logout} className="logout-button">Logout</button>
        <Link to="/details" className="details-button">Edit</Link>
      </div>
    </div>
  );
}
 
export default profile ;