import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Outlet } from 'react-router-dom';
function Navbar() {
  return (
    <div>
    <div className="navbar text-center">
      <div className="navbar1 text-center">
        <img
          src="https://png.pngtree.com/element_our/png_detail/20181227/users-vector-icon-png_295010.jpg"
          width="50px"
          alt=""
        />
        <h3 className="heading text-center">VJ Hostel</h3>
      </div>

      <ul className="List">
        <li>
          <Link to="home" className="btn button">Home</Link>
        </li>
        <li>
          <Link to="aboutus" className="btn button">ABOUT US</Link>
        </li>
        <li>
          <Link to="chat" className="btn button">LIVE CHAT</Link>
        </li>
        <li>
          <Link to="eventcalendar" className="btn button">EVENT CALENDAR</Link>
        </li>
        <li>
          <Link to="community" className="btn button">LOCAL INFO</Link>
        </li>
        <li>
          <Link to="language" className="btn button">LANGUAGE EXCHANGE</Link>
        </li>
        <li>
          <Link to="photo" className="btn button">PHOTO GALLERY</Link>
        </li>
        <li>
          <Link to="resource" className="btn button">RESOURCE SHARING</Link>
        </li>

          <li>
            <Link to="feedback" className="btn button">FEEDBACK</Link>
          </li>
          <li>
            <Link to="lost" className="btn button">LOST AND FOUND</Link>
          </li>
          <li>
           <button className="btn button">LOGOUT</button>
          </li>
    
     </ul>
      </div>
      <div><Outlet /></div>
    </div>
  );
}

export default Navbar;
