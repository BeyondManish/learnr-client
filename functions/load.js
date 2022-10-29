import axios from 'axios';

export const loadCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};