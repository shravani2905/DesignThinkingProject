import React, { useState } from 'react';

const LostAndFound = () => {
  const [lostItem, setLostItem] = useState('');
  const [lostItems, setLostItems] = useState([]);

  const handleReportLost = () => {
    if (lostItem.trim() !== '') {
      // Add the reported lost item to the list
      setLostItems([...lostItems, lostItem]);
      // Reset the input after reporting
      setLostItem('');
    }
  };

  const handleDeleteLostItem = (index) => {
    // Remove the lost item at the specified index
    const updatedLostItems = [...lostItems];
    updatedLostItems.splice(index, 1);
    setLostItems(updatedLostItems);
  };

  return (
    <div style={lostStyles.container}>
      <h1 style={lostStyles.heading}>Lost and Found</h1>
      <p style={lostStyles.paragraph}>
        Students can enter lost items, and the entered items will be displayed below.
      </p>

      {/* Report Lost Item */}
      <div style={lostStyles.formContainer}>
        <label style={lostStyles.label}>
          Report Lost Item:
          <input
            type="text"
            value={lostItem}
            onChange={(e) => setLostItem(e.target.value)}
            style={lostStyles.input}
          />
        </label>
        <button onClick={handleReportLost} style={lostStyles.button}>
          Report Lost
        </button>
      </div>

      {/* Display Lost Items */}
      {lostItems.length > 0 && (
        <div style={lostStyles.lostItemsContainer}>
          <h2 style={lostStyles.subHeading}>Lost Items:</h2>
          <ul style={lostStyles.lostItemList}>
            {lostItems.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleDeleteLostItem(index)} style={lostStyles.deleteButton}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LostAndFound;

const lostStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    color: '#007bff',
  },
  subHeading: {
    color: '#007bff',
    marginTop: '20px',
  },
  paragraph: {
    marginTop: '10px',
  },
  formContainer: {
    marginTop: '20px',
  },
  label: {
    marginBottom: '10px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '15px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  lostItemsContainer: {
    marginTop: '20px',
  },
  lostItemList: {
    listStyle: 'none',
    padding: 0,
  },
  deleteButton: {
    marginLeft: '10px',
    backgroundColor: '#dc3545',
    margin:'10px',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};
