import React, { useState } from 'react';

function Community() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleInputChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleAddPost = () => {
    setPosts([...posts, newPost]);
    setNewPost('');
  };

  return (
    <div style={styles.communityContainer}>
      <h1>Community Corner</h1>
      <p>Discover and participate in the various community-driven initiatives and projects at VJ Hostel.</p>

      <div style={styles.postForm}>
        <h2>Share Information about Your Local Area</h2>
        <textarea
          placeholder="Write about your local area..."
          value={newPost}
          onChange={handleInputChange}
          style={styles.textArea}
        />
        <button onClick={handleAddPost} style={styles.addButton}>
          Post
        </button>
      </div>

      <div style={styles.postsContainer}>
        {posts.map((post, index) => (
          <div key={index} style={styles.post}>
            <p>{post}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  communityContainer: {
    padding: '20px',
  },
  postForm: {
    marginBottom: '20px',
  },
  textArea: {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
  addButton: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  post: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  },
};

export default Community;
