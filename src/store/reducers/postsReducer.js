import { createReducer } from '@reduxjs/toolkit';
import { addPost, editPost } from '../actions/postsActions';

const initialState = {
  posts: [],
};

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      state.posts.push(action.payload);
    })
    .addCase(editPost, (state, action) => {
      const { index, post } = action.payload;
      state.posts[index] = { ...state.posts[index], ...post };
    });
});

export default postsReducer;
