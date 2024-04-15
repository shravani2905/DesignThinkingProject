import React from 'react';
import { Link } from "react-router-dom";
import Image from "./hostel.jpeg"
function Main() {
  return (
    <div>
      <h1 className="text-primary text-center">VJ HOSTEL</h1>
      <div>
        <h2 className=" p-3 text-center student bg-light ">
          <Link to="/studentlogin" className="student text-danger text-center"  style={{ textDecoration: 'none' }}>
          STUDENT LOGIN
          </Link>

        </h2>
        <img src={Image} width="600px" style={{display:"block",margin:"auto"}} alt=" "/>
      </div>
    </div>
  );
}

export default Main;
