import React, { useState } from 'react';
import './Discussions.css'; // Import the CSS file
import { Container } from 'react-bootstrap'; // Import Bootstrap Container
import Navbar from './components/navbar/Nav';
import Footer from './components/Footer';


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
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="container discussions-container">
        <h1>Discussions</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              className="form-control"
              value={comment}
              onChange={handleCommentChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <h2>Previous Comments:</h2>
        {comments.length > 0 ? (
          <ul className="list-group">
            {comments.map((comment, index) => (
              <li key={index} className="list-group-item">
                <strong>{comment.name}: </strong>
                {comment.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </Container>
    <Footer />
    </div>
  );
};

export default Discussions;
