import React, { useState } from 'react';

function Resource() {
  const [resourceLink, setResourceLink] = useState('');

  const handleShareResource = () => {
    // You can implement the logic to handle the shared resource, for example, sending it to a server.
    console.log('Shared resource link:', resourceLink);
    // Reset the input after sharing
    setResourceLink('');
  };

  return (
    <div>
      <h1>Resource Sharing</h1>
      <p>Access and share resources that enhance your academic and personal life during your stay at VJ Hostel.</p>
      
      {/* Form for sharing resources */}
      <form>
        <label>
          Resource Link:
          <input
            type="text"
            value={resourceLink}
            onChange={(e) => setResourceLink(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleShareResource}>
          Share Resource
        </button>
      </form>
    </div>
  );
}

export default Resource;
