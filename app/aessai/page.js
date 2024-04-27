"use client";
import React, { useState } from 'react';

const PostCommentForm = () => {
  const [formData, setFormData] = useState({
    pubclé: '',
    useremail: '',
    comment: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api1/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Comment posted successfully');
        // Optionally, clear the form fields after successful submission
        setFormData({
          pubclé: '',
          useremail: '',
          comment: '',
          rating: '',
        });
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <h2>Post a Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Publication Clé:</label>
          <input
            type="text"
            name="pubclé"
            value={formData.pubclé}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>User Email:</label>
          <input
            type="text"
            name="useremail"
            value={formData.useremail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Comment:</label>
          <input
            type="text"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={formData.rating}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostCommentForm;
