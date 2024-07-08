import React from 'react';

const PostItem = ({ title, content, onEdit }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
    <button onClick={onEdit}>Edit</button>
    <br></br>
  </div>
);

export default PostItem;
