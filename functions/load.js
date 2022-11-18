import axios from 'axios';

export const loadCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

export const loadCategoryPost = async (slug) => {
  const response = await axios.get(`/category/${slug}`);
  console.log(response.data);
  return response.data;
};

export const loadPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const loadPost = async (slug) => {
  const response = await axios.get(`/post/${slug}`);
  return response.data;
};

export const loadAllMedias = async () => {
  const response = await axios.get('/files');
  console.log(response);
  return response.data;
};