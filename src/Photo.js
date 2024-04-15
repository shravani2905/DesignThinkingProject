import React from 'react';
import hostelImage from "./hostel.jpeg";
import hostelRoomImage from './Hostelroomedit.png';
import seatingImage from './confoedit.png';
import diningImage from './dining.png';
import common from "./commonareasedit.png"
import study from "./studyedit.png"
function Photo() {
  return (
    <div>
      <h1>Photo Gallery</h1>
      <p>Explore the vibrant moments captured in our hostel's photo gallery. Share and relive the memories!</p>
<p className="fw-bold">Hostel , Quiet StudySpaces ,Comfortable Seating, Dining Area, Interactive Common Areas, Comfortable Rooms  </p>
      <div style={styles.galleryContainer}>
        <div style={styles.row}>
          <img src={hostelImage} alt="Hostel" style={styles.image} />
          <img src={study} alt="Common" style={styles.image} />
        
          <img src={seatingImage} alt="Comfortable Seating" style={styles.image} />
        </div>
        <div style={styles.row}>
          <img src={diningImage} alt="Dining" style={styles.image} />
          <img src={common} alt="Common" style={styles.image} />
          <img src={hostelRoomImage} alt="Hostel Room" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  galleryContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
    marginLeft:'20px'
  },
  image: {
    width:"22%", // Adjust the width as needed
    borderRadius: '5px',
  },
};

export default Photo;
