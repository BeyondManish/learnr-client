import axios from 'axios';

export const loadCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

export const loadPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const loadPost = async (author, slug) => {
  const response = await axios.get(`/${author}/${slug}`);
  return response.data;
};

export const loadAllMedias = async () => {
  const response = await axios.get('/files');
  return response.data;
};