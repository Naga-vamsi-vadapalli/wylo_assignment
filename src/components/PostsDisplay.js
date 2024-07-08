import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from '../store/actions/postsActions';
import './posts.css'

const PostsDisplay = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const handleEdit = (index) => {
    const title = prompt('Edit title', posts[index].title);
    const content = prompt('Edit content', posts[index].content);
    dispatch(editPost(index, { title, content }));
  };

  return (
    <>
    <div className='posts'>
      {posts.map((post, index) => (
        <PostItem key={index} {...post} onEdit={() => handleEdit(index)} />
      ))}
      
      
    </div>
    <div className="sticky-button">
      <Link to="/create-post">
        <button>Create New Post</button>
      </Link>
    </div>
    </>
  );
};

export default PostsDisplay;
