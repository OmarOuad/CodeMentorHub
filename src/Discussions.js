import React, { useState } from 'react';
import Navbar from './Nav';

const Discussions = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() !== '' && comment.trim() !== '') {
      const newComment = {
        name,
        comment,
      };

      setComments([...comments, newComment]);
      setName('');
      setComment('');
    }
  };

  return (
    <div>
        <Navbar />
      <h1>Comments</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" value={comment} onChange={handleCommentChange} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Previous Comments:</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}: </strong>
              {comment.comment}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default Discussions;
