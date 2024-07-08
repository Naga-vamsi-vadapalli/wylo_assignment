import { createAction } from '@reduxjs/toolkit';

export const addPost = createAction('ADD_POST');
export const editPost = createAction('EDIT_POST', (index, post) => ({
  payload: { index, post },
}));
