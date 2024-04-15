import React from 'react';
import './StudentLogin.css';
import {Link} from "react-router-dom"
function StudentLogin() {
  return (
    <div className="login-container">
      <h2>Hostel Website Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>

       <Link to="/navbar"><button type="submit">Login</button></Link> 
      </form>
    </div>
  );
}

export default StudentLogin;
