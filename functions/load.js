import axios from '../utils/axios';

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
  return response.data;
};

export const loadCurrentUser = async () => {
  const response = await axios.get('/auth/current-user');
  return response.data;
};

// load user post
export const loadUserPost = async (username) => {
  const response = await axios.get(`/${username}/posts`);
  return response.data;
};

export const loadUserMedia = async (username) => {
  const response = await axios.get(`/${username}/files`);
  return response.data;
};

export const loadUserCategory = async (username) => {
  const response = await axios.get(`/${username}/categories`);
  return response.data;
};

export const loadUser = async (username) => {
  const response = await axios.get(`/user/${username}`);
  return response.data;
};

export const loadComments = async (postId) => {
  const response = await axios.get(`/comments/${postId}`);
  return response.data;
};

export const loadAllComments = async () => {
  const response = await axios.get(`/comments`);
  return response.data;
};

export const loadStatsData = async () => {
  const response = await axios.get(`/stats`);
  return response.data;
};
