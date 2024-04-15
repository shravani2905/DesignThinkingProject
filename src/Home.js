import React from 'react';
import image from "./hostel.jpeg";

function Home() {
  return (
    <div>
      <h1>Welcome to VJ Hostel</h1>
      <p>Explore and enjoy our hostel's vibrant community and amenities.</p>
      <img src={image} alt="" style={{ width: '100%',display:"block",margin:"auto",maxWidth: '450px' }} />
    </div>
  );
}

export default Home;
