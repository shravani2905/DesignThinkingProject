import React, { useState } from 'react';

function Language() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ sentence: '', translation: '' });

  const handleInputChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPost = () => {
    setPosts([...posts, newPost]);
    setNewPost({ sentence: '', translation: '' });
  };

  return (
    <div style={styles.languageContainer}>
      <h1>Language Exchange</h1>
      <p>Connect with other students for language exchange opportunities and broaden your linguistic skills.</p>

      <div style={styles.postForm}>
        <h2>Share Sentences in Your Language</h2>
        <textarea
          placeholder="Write a sentence in your language..."
          name="sentence"
          value={newPost.sentence}
          onChange={handleInputChange}
          style={styles.textArea}
        />
        <textarea
          placeholder="Provide English translation..."
          name="translation"
          value={newPost.translation}
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
            <p>
              <strong>Sentence:</strong> {post.sentence}
            </p>
            <p>
              <strong>Translation:</strong> {post.translation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  languageContainer: {
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

export default Language;
